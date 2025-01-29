function sendTelegramMessage() {
  const token = "YOUR_BOT_TOKEN"; // ใส่ Token ของบอทที่ได้รับจาก @BotFather
  const chatId = "YOUR_CHAT_ID"; // ใส่ Chat ID ของผู้รับข้อความ
  const message = "สวัสดีจาก Google Apps Script!"; // ข้อความที่ต้องการส่ง
  
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: message,
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
  };
  
  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}

function sendTelegramImage() {
  const token = "YOUR_BOT_TOKEN"; // ใส่ Token ของบอท
  const chatId = "YOUR_CHAT_ID"; // ใส่ Chat ID ของผู้รับข้อความ
  const imageUrl = "YOUR_IMAGE_URL"; // ใส่ URL ของรูปภาพ
  
  const url = `https://api.telegram.org/bot${token}/sendPhoto`;
  const payload = {
    chat_id: chatId,
    photo: imageUrl,
    caption: "นี่คือรูปภาพที่ส่งจาก Google Apps Script!", // คำอธิบายรูปภาพ (ใส่ได้)
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
  };
  
  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}
