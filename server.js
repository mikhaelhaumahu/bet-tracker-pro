const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 5000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // API proxy endpoint to bypass CORS and forward auth headers safely with date filters
    if (pathname === '/api/matches') {
        const token = req.headers['x-auth-token'];
        
        if (!token) {
            res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify({ error: 'X-Auth-Token header is required' }));
            return;
        }

        const dateFrom = parsedUrl.query.dateFrom || '';
        const dateTo = parsedUrl.query.dateTo || '';
        
        let apiPath = '/v4/matches';
        if (dateFrom && dateTo) {
            apiPath += `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
        }
        
        const cacheKey = token + '_' + apiPath;
        if (!global.apiCache) global.apiCache = {};
        
        // Return cached data if less than 60 seconds old
        if (global.apiCache[cacheKey] && (Date.now() - global.apiCache[cacheKey].timestamp < 60000)) {
            res.writeHead(200, { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(global.apiCache[cacheKey].data);
            return;
        }

        const options = {
            hostname: 'api.football-data.org',
            port: 443,
            path: apiPath,
            method: 'GET',
            headers: {
                'X-Auth-Token': token
            }
        };

        const apiReq = https.request(options, (apiRes) => {
            let data = '';
            apiRes.on('data', (chunk) => { data += chunk; });
            apiRes.on('end', () => {
                if (apiRes.statusCode === 200) {
                    global.apiCache[cacheKey] = {
                        timestamp: Date.now(),
                        data: data
                    };
                }
                res.writeHead(apiRes.statusCode, { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(data);
            });
        });

        apiReq.on('error', (err) => {
            console.error('API Proxy Error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify({ error: 'Failed to contact external API', details: err.message }));
        });

        apiReq.end();
        return;
    }

    // Serve static files
    if (pathname === '/') {
        pathname = '/index.html';
    }

    pathname = decodeURIComponent(pathname);
    const filePath = path.join(PUBLIC_DIR, pathname);
    
    // Safety check to prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error: ' + err.code);
            }
            return;
        }

        const ext = path.extname(filePath);
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`[BetTracker Server] Running at http://localhost:${PORT}/`);
    console.log(`[BetTracker Server] API Proxy ready at http://localhost:${PORT}/api/matches`);
});
