export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'x-ai-token, content-type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const aiToken = req.headers['x-ai-token'];
    
    if (!aiToken) {
        return res.status(400).json({ error: 'X-AI-Token header is required' });
    }

    const { match } = req.body;
    if (!match) {
        return res.status(400).json({ error: 'Match data is required' });
    }

    // Call Google Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aiToken}`;

    const prompt = `Bertindaklah sebagai pakar analis sepak bola dan taruhan profesional.
Analisis pertandingan ini dan berikan prediksi pemenangnya, potensi jumlah gol, dan rekomendasi taruhan terbaik.

Pertandingan: ${match.homeTeam} VS ${match.awayTeam}
Liga: ${match.league}
Waktu: ${match.time}

Berikan jawaban singkat, padat, berwibawa, dan langsung ke intinya (maksimal 3 paragraf).`;

    try {
        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });
        
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'Gagal menghubungi AI' });
        }
        
        const analysisText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak dapat menghasilkan analisis saat ini.";
        
        res.status(200).json({ analysis: analysisText });
    } catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(500).json({ error: 'Failed to contact AI provider', details: error.message });
    }
}
