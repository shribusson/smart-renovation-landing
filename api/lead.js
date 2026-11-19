/**
 * Vercel Serverless Function for handling renovation lead submissions.
 * Forwards leads to Telegram when TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are set.
 */
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON payload' });
    }
  }

  const name = String(body?.name || '').trim();
  const contact = String(body?.contact || '').trim();
  const summary = String(body?.summary || '').trim();
  const comment = String(body?.comment || '').trim();

  if (!name || !contact) {
    return res.status(400).json({
      ok: false,
      error: 'Укажите имя и контакт для связи (телефон или Telegram).',
    });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    const lines = [
      '📐 Новая заявка на расчёт ремонта',
      `Имя: ${name}`,
      `Контакт: ${contact}`,
    ];
    if (summary) lines.push(`Конфигурация: ${summary}`);
    if (comment) lines.push(`Комментарий: ${comment}`);

    try {
      const tgResponse = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: lines.join('\n'),
          }),
        }
      );

      if (!tgResponse.ok) {
        console.error('Telegram API error:', await tgResponse.text());
      }
    } catch (err) {
      console.error('Failed to send Telegram notification:', err);
    }
  } else {
    console.info('Lead received (Telegram env vars not set):', {
      name,
      contact,
      summary,
      comment,
    });
  }

  return res.status(200).json({
    ok: true,
    message: 'Заявка принята. Инженер свяжется с вами в рабочее время.',
  });
};
