# TelegramBot
การใช้งาน Bot Telegram

@BotFather

/start

/newbot

# URL สำหรับเรียกดู chat_id
https://api.telegram.org/bot + {Token} /getUpdates


# ตัวอย่าง การส่งข้อความธรรมดา
https://api.telegram.org/bot + {Token} /sendMessage

headers: {"contentType":"application/json"}

method: post

  {
  
    chat_id: "YOUR_CHAT_ID",
    
    text: "ข้อความพร้อมฟอร์แมต *ตัวหนา* และ _ตัวเอียง_",
    
    parse_mode: "Markdown",
    
  }
  

# การส่งข้อมูลในรูปแบบต่างๆ
1. ส่งข้อความธรรมดา (Text)
Endpoint: /sendMessage
Key Parameters:

text (ข้อความที่ต้องการส่ง)
parse_mode (ตัวเลือกการฟอร์แมต เช่น Markdown หรือ HTML)
javascript
Copy
Edit
const messagePayload = {
  chat_id: "YOUR_CHAT_ID",
  text: "ข้อความพร้อมฟอร์แมต *ตัวหนา* และ _ตัวเอียง_",
  parse_mode: "Markdown",
};

2. ส่งรูปภาพ (Photo)
Endpoint: /sendPhoto
Key Parameters:

photo (URL หรือไฟล์รูปภาพ)
caption (คำบรรยายใต้ภาพ)
javascript
Copy
Edit
const photoPayload = {
  chat_id: "YOUR_CHAT_ID",
  photo: "YOUR_IMAGE_URL",
  caption: "รูปภาพพร้อมคำอธิบาย",
};

3. ส่งไฟล์เอกสาร (Document)
Endpoint: /sendDocument
Key Parameters:

document (URL หรือไฟล์เอกสาร)
caption (คำบรรยายเอกสาร)
javascript
Copy
Edit
const documentPayload = {
  chat_id: "YOUR_CHAT_ID",
  document: "YOUR_DOCUMENT_URL",
  caption: "เอกสารตัวอย่าง",
};

4. ส่งวิดีโอ (Video)
Endpoint: /sendVideo
Key Parameters:

video (URL หรือไฟล์วิดีโอ)
caption (คำบรรยายวิดีโอ)
javascript
Copy
Edit
const videoPayload = {
  chat_id: "YOUR_CHAT_ID",
  video: "YOUR_VIDEO_URL",
  caption: "วิดีโอจาก Telegram Bot",
};

5. ส่งเสียง (Audio)
Endpoint: /sendAudio
Key Parameters:

audio (URL หรือไฟล์เสียง)
caption (คำบรรยายเสียง)
javascript
Copy
Edit
const audioPayload = {
  chat_id: "YOUR_CHAT_ID",
  audio: "YOUR_AUDIO_URL",
  caption: "ไฟล์เสียงตัวอย่าง",
};

6. ส่งสติกเกอร์ (Sticker)
Endpoint: /sendSticker
Key Parameters:

sticker (URL หรือไฟล์สติกเกอร์)
javascript
Copy
Edit
const stickerPayload = {
  chat_id: "YOUR_CHAT_ID",
  sticker: "YOUR_STICKER_URL",
};
7. ส่งพิกัด (Location)
Endpoint: /sendLocation
Key Parameters:

latitude (ละติจูด)
longitude (ลองจิจูด)
javascript
Copy
Edit
const locationPayload = {
  chat_id: "YOUR_CHAT_ID",
  latitude: 13.7563, // ตัวอย่างพิกัด กรุงเทพ
  longitude: 100.5018,
};

8. ส่งโพล (Poll)
Endpoint: /sendPoll
Key Parameters:

question (คำถาม)
options (ตัวเลือกในรูปแบบ array)
javascript
Copy
Edit
const pollPayload = {
  chat_id: "YOUR_CHAT_ID",
  question: "คุณชอบผลไม้ชนิดใด?",
  options: JSON.stringify(["มะม่วง", "กล้วย", "แตงโม"]),
  is_anonymous: true, // โพลนี้ไม่ระบุตัวตน
};

9. ส่งปุ่มแบบ Inline (Inline Keyboard)
Endpoint: /sendMessage (พร้อม Inline Keyboard)
Key Parameters:

reply_markup (ปุ่มแบบ JSON)
javascript
Copy
Edit
const inlineKeyboardPayload = {
  chat_id: "YOUR_CHAT_ID",
  text: "เลือกตัวเลือกด้านล่าง",
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Google", url: "https://google.com" }],
      [{ text: "Send Callback", callback_data: "callback_1" }],
    ],
  }),
};

10. ส่งข้อความพร้อมปุ่มตอบกลับ (Reply Keyboard)
Endpoint: /sendMessage (พร้อม Reply Keyboard)
Key Parameters:

reply_markup (ปุ่มแบบ JSON)
javascript
Copy
Edit
const replyKeyboardPayload = {
  chat_id: "YOUR_CHAT_ID",
  text: "เลือกคำสั่ง:",
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: "คำสั่ง 1" }, { text: "คำสั่ง 2" }],
      [{ text: "ยกเลิก" }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  }),
};
