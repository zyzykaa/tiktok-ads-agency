import { waitUntil } from '@vercel/functions';

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
    // 1. Prepare Telegram request
    const telegramPromise = fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
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

    // 2. Prepare Google Sheets request
    const GOOGLE_WEBHOOK = "https://script.google.com/macros/s/AKfycbxVoqLAwFzyoa1iu4fWV17Mtk2DXTijMqhNBV2nGhPKUUpScQNEA0N22T9m91lPz8BvdA/exec";
    let sheetsPromise = Promise.resolve(); // Default to resolved if no webhook
    if (GOOGLE_WEBHOOK) {
      sheetsPromise = fetch(GOOGLE_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, budget, company: businessType, message: goals }),
      });
    }

    // 3. Use Vercel's waitUntil to keep the exact background tasks alive safely
    waitUntil(Promise.all([telegramPromise, sheetsPromise]).catch(err => {
      console.error("Error executing background task:", err);
    }));

    // 4. Respond to client IMMEDIATELY
    res.status(201).json({ 
      success: true, 
      message: 'Contact inquiry saved successfully.'
    });
  } catch (err) {
    console.error('Error in handler function:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
