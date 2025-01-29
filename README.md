# TelegramBot
การใช้งาน Bot Telegram

@BotFather

/start

/newbot

# URL สำหรับเรียกดู chat_id
https://api.telegram.org/bot + {Token} /getUpdates


# ตัวอย่าง การส่งข้อความธรรมดา
https://api.telegram.org/bot + {Token} /sendMessage<br />
headers: {"contentType":"application/json"}<br />
method: post<br />

```
  {
    chat_id: "YOUR_CHAT_ID",
    text: "ข้อความพร้อมฟอร์แมต *ตัวหนา* และ _ตัวเอียง_",
    parse_mode: "Markdown",
  }
```

# การส่งข้อมูลในรูปแบบต่างๆ
1. ส่งข้อความธรรมดา (Text)<br />
Endpoint: /sendMessage
```
{
  chat_id: "YOUR_CHAT_ID",
  text: "ข้อความพร้อมฟอร์แมต *ตัวหนา* และ _ตัวเอียง_",
  parse_mode: "Markdown",
};
```

2. ส่งรูปภาพ (Photo)<br />
Endpoint: /sendPhoto
```
{
  chat_id: "YOUR_CHAT_ID",
  photo: "YOUR_IMAGE_URL",
  caption: "รูปภาพพร้อมคำอธิบาย",
};
```

3. ส่งไฟล์เอกสาร (Document)<br />
Endpoint: /sendDocument
```
{
  chat_id: "YOUR_CHAT_ID",
  document: "YOUR_DOCUMENT_URL",
  caption: "เอกสารตัวอย่าง",
};
```

4. ส่งวิดีโอ (Video)<br />
Endpoint: /sendVideo
```
{
  chat_id: "YOUR_CHAT_ID",
  video: "YOUR_VIDEO_URL",
  caption: "วิดีโอจาก Telegram Bot",
};
```

5. ส่งเสียง (Audio)<br />
Endpoint: /sendAudio
```
{
  chat_id: "YOUR_CHAT_ID",
  audio: "YOUR_AUDIO_URL",
  caption: "ไฟล์เสียงตัวอย่าง",
};
```

6. ส่งสติกเกอร์ (Sticker)<br />
Endpoint: /sendSticker
```
{
  chat_id: "YOUR_CHAT_ID",
  sticker: "YOUR_STICKER_URL",
};
```

7. ส่งพิกัด (Location)<br />
Endpoint: /sendLocation
```
{
  chat_id: "YOUR_CHAT_ID",
  latitude: 13.7563, // ตัวอย่างพิกัด กรุงเทพ
  longitude: 100.5018,
};
```

8. ส่งโพล (Poll)<br />
Endpoint: /sendPoll
```
{
  chat_id: "YOUR_CHAT_ID",
  question: "คุณชอบผลไม้ชนิดใด?",
  options: JSON.stringify(["มะม่วง", "กล้วย", "แตงโม"]),
  is_anonymous: true, // โพลนี้ไม่ระบุตัวตน
};
```

9. ส่งปุ่มแบบ Inline (Inline Keyboard)<br />
Endpoint: /sendMessage (พร้อม Inline Keyboard)
```
{
  chat_id: "YOUR_CHAT_ID",
  text: "เลือกตัวเลือกด้านล่าง",
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Google", url: "https://google.com" }],
      [{ text: "Send Callback", callback_data: "callback_1" }],
    ],
  }),
};
```

10. ส่งข้อความพร้อมปุ่มตอบกลับ (Reply Keyboard)<br />
Endpoint: /sendMessage (พร้อม Reply Keyboard)
```
{
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
```
