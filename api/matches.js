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
        return res.status(400).json({ error: 'X-Auth-Token header is required' });
    }

    const { dateFrom, dateTo } = req.query;
    
    let apiUrl = 'https://api.football-data.org/v4/matches';
    if (dateFrom && dateTo) {
        apiUrl += `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Auth-Token': token
            }
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
