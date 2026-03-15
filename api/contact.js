export default async function handler(req, res) {
  // CORS setup for Vercel
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, budget, businessType, goals } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram environment variables missing");
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const message = `
🔥 <b>New Lead from TikTok Ads Agency</b> 🔥

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
💰 <b>Budget:</b> ${budget || 'Not specified'}
🏢 <b>Business Type:</b> ${businessType || 'Not specified'}

📝 <b>Goals & Details:</b>
${goals || 'No additional details provided.'}
  `.trim();

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramResponse.ok) {
        throw new Error('Failed to send Telegram message');
    }

    res.status(201).json({ 
      success: true, 
      message: 'Contact inquiry saved successfully.'
    });
  } catch (err) {
    console.error('Error sending to Telegram:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
