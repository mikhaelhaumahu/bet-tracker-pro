export default async function handler(req, res) {
    // Handle CORS Preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'x-auth-token, content-type');
        return res.status(200).end();
    }

    const token = req.headers['x-auth-token'];
    
    if (!token) {
        return res.status(400).json({ error: 'Token API diperlukan (X-Auth-Token atau x-apisports-key)' });
    }

    const { dateFrom, dateTo, provider } = req.query;
    
    let apiUrl = '';
    let apiHeaders = {};

    if (provider === 'apisports') {
        // API-Sports Configuration
        // Endpoint: https://v3.football.api-sports.io/fixtures?date=YYYY-MM-DD
        const targetDate = dateFrom || new Date().toISOString().split('T')[0];
        apiUrl = `https://v3.football.api-sports.io/fixtures?date=${targetDate}`;
        apiHeaders = {
            'x-apisports-key': token
        };
    } else {
        // Default to football-data.org
        apiUrl = 'https://api.football-data.org/v4/matches';
        if (dateFrom && dateTo) {
            apiUrl += `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
        }
        apiHeaders = {
            'X-Auth-Token': token
        };
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: apiHeaders
        });
        
        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'x-auth-token, content-type');
        
        res.status(response.status).json(data);
    } catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(500).json({ error: 'Failed to contact external API', details: error.message });
    }
}
