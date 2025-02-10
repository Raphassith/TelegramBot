# TelegramBot
การใช้งาน Bot Telegram

@BotFather<br />
/start<br />
/newbot<br />

# URL สำหรับเรียกดู chat_id
https://api.telegram.org/bot + {Token} /getUpdates


# URL สำหรับเรียกดูข้อมูล USER
https://api.telegram.org/bot + {Token} /getChat?chat_id= + {USER_ID}<br />

```
{
  "ok": true,
  "result": {
    "id": 123456789,
    "first_name": "John",
    "last_name": "Doe",
    "username": "johndoe",
    "type": "private"
  }
}
```

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
}
```

2. ส่งรูปภาพ (Photo)<br />
Endpoint: /sendPhoto
```
{
  chat_id: "YOUR_CHAT_ID",
  photo: "YOUR_IMAGE_URL",
  caption: "รูปภาพพร้อมคำอธิบาย",
}
```

3. ส่งไฟล์เอกสาร (Document)<br />
Endpoint: /sendDocument
```
{
  chat_id: "YOUR_CHAT_ID",
  document: "YOUR_DOCUMENT_URL",
  caption: "เอกสารตัวอย่าง",
}
```

4. ส่งวิดีโอ (Video)<br />
Endpoint: /sendVideo
```
{
  chat_id: "YOUR_CHAT_ID",
  video: "YOUR_VIDEO_URL",
  caption: "วิดีโอจาก Telegram Bot",
}
```

5. ส่งเสียง (Audio)<br />
Endpoint: /sendAudio
```
{
  chat_id: "YOUR_CHAT_ID",
  audio: "YOUR_AUDIO_URL",
  caption: "ไฟล์เสียงตัวอย่าง",
}
```

6. ส่งสติกเกอร์ (Sticker)<br />
Endpoint: /sendSticker
```
{
  chat_id: "YOUR_CHAT_ID",
  sticker: "YOUR_STICKER_URL",
}
```

7. ส่งพิกัด (Location)<br />
Endpoint: /sendLocation
```
{
  chat_id: "YOUR_CHAT_ID",
  latitude: 13.7563, // ตัวอย่างพิกัด กรุงเทพ
  longitude: 100.5018,
}
```

8. ส่งโพล (Poll)<br />
Endpoint: /sendPoll
```
{
  chat_id: "YOUR_CHAT_ID",
  question: "คุณชอบผลไม้ชนิดใด?",
  options: JSON.stringify(["มะม่วง", "กล้วย", "แตงโม"]),
  is_anonymous: true, // โพลนี้ไม่ระบุตัวตน
}
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
}
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
}
```

11. ส่งข้อความ Markdown / HTML (เหมือน Flex Text)<br />
Endpoint: /sendMessage (HTML CODE)
```
{
  chat_id: chat_id,
  text: "<b>🔥 โปรโมชั่นพิเศษ! 🔥</b>\n" + "<i>เลือกตัวเลือกด้านล่าง:</i>\n" + "✅ <b>ส่วนลด 50%</b>\n" + "✅ <b>ส่งฟรี!</b>\n" + "<a href='https://www.example.com'>🔗 ดูรายละเอียด</a>",
  parse_mode: "HTML"
}
```

# ตั้งค่า Webhook ให้ Telegram Bot
https://api.telegram.org/bot + {Token} /setWebhook?url= + {YOUR_WEBHOOK_URL}<br />

```
// google app script

function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  
  if (data.message) {
    var chat_id = data.message.chat.id;
    var user_name = data.message.from.username || "No Username";
    var text = data.message.text;
    var timestamp = new Date();
    
    sheet.appendRow([timestamp, chat_id, user_name, text]);
  }
  
  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#ส่งข้อความต้อนรับเมื่อผู้ใช้เริ่มต้น (/start)
```
// google app script

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  
  if (data.message) {
    var chat_id = data.message.chat.id;
    var text = data.message.text;

    if (text === "/start") {
      var welcomeMessage = "👋 สวัสดี! ฉันคือบอทของคุณ พิมพ์ข้อความมาได้เลย!";
      sendMessage(chat_id, welcomeMessage);
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

// ฟังก์ชันส่งข้อความกลับไปหา Telegram
function sendMessage(chat_id, text) {
  var token = "YOUR_BOT_TOKEN";
  var url = "https://api.telegram.org/bot" + token + "/sendMessage";
  
  var payload = {
    "chat_id": chat_id,
    "text": text
  };
  
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}
```

#ส่งข้อความต้อนรับเมื่อผู้ใช้เข้ากลุ่ม
เพิ่มโค้ดนี้ในฟังก์ชัน doPost(e):<br />

```
// google app script

if (data.message && data.message.new_chat_members) {
  var chat_id = data.message.chat.id;
  var new_members = data.message.new_chat_members;
  
  new_members.forEach(member => {
    var welcomeMessage = "🎉 ยินดีต้อนรับ " + member.first_name + " สู่กลุ่ม!";
    sendMessage(chat_id, welcomeMessage);
  });
}
```

#ฟังก์ชัน Broadcast

```
// google app script

function broadcastMessage() {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Users");
  var data = sheet.getDataRange().getValues();
  var token = "YOUR_BOT_TOKEN";
  var url = "https://api.telegram.org/bot" + token + "/sendMessage";
  var message = "📢 ข้อความประกาศจากบอท!";

  data.forEach(function(row) {
    var chat_id = row[0];

    var payload = {
      "chat_id": chat_id,
      "text": message
    };

    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch(url, options);
  });
}
```

#ใช้ Dialog flow โดย Fulfillment

```
// google app script

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var token = "YOUR_BOT_TOKEN";
  var dialogflowUrl = "YOUR_DIALOGFLOW_WEBHOOK_URL";
  
  if (data.message) {
    var chat_id = data.message.chat.id;
    var text = data.message.text;
    
    // ส่งข้อความไป Dialogflow
    var response = UrlFetchApp.fetch(dialogflowUrl, {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify({"queryInput": {"text": {"text": text, "languageCode": "th"}}})
    });
    
    var result = JSON.parse(response.getContentText());
    var replyText = result.fulfillmentText || "ขออภัย ฉันไม่เข้าใจ";
    
    // ส่งข้อความกลับ Telegram
    var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage";
    var payload = {
      "chat_id": chat_id,
      "text": replyText
    };
    
    UrlFetchApp.fetch(telegramUrl, {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    });
  }
  
  return ContentService.createTextOutput("OK");
}
```

กรณีมีการแนบ Parameters<br />

```
// google app script

function doPost(e) {
  var request = JSON.parse(e.postData.contents);

  if (request.queryResult) {
    var intent = request.queryResult.intent.displayName;
    var parameters = request.queryResult.parameters;
    
    // ดึงค่าพารามิเตอร์ที่ส่งมา
    var date = parameters.date || "ไม่ระบุ";
    var time = parameters.time || "ไม่ระบุ";
    var name = parameters.person ? parameters.person.name : "ไม่ระบุ";
    
    // กำหนดข้อความตอบกลับ
    var replyText = "📌 การจองของคุณ: \n👤 ชื่อ: " + name + "\n📅 วันที่: " + date + "\n⏰ เวลา: " + time;
    
    return ContentService.createTextOutput(JSON.stringify({
      "fulfillmentText": replyText
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
}
```

**Dialogflow Fulfillment** รองรับการส่งข้อมูลกลับในรูปแบบอื่นๆ นอกเหนือจาก **`fulfillmentText`** เช่น **Rich Responses (JSON), Quick Replies, Cards, Images, Inline Keyboard (Telegram), และ Custom Payloads**  

---

# **📌 วิธีส่งรูปแบบต่างๆ ผ่าน Fulfillment (Webhook)**
ใน **Google Apps Script** หรือ **Webhook Server**, คุณสามารถใช้ `fulfillmentMessages` แทน `fulfillmentText` เพื่อส่งข้อความที่ซับซ้อนขึ้น  

---

## **🔹 1. ส่งข้อความ + ปุ่มกด (Inline Keyboard)**
🔹 ส่งปุ่มให้คล้าย **Flex Message** บน Telegram  

```google app script
function doPost(e) {
  var request = JSON.parse(e.postData.contents);
  
  if (request.queryResult) {
    var chat_id = request.originalDetectIntentRequest.payload.data.chat.id;  
    var message = "✨ โปรโมชั่นพิเศษ! ✨\nกดปุ่มด้านล่างเพื่อดูรายละเอียดเพิ่มเติม";

    var response = {
      "payload": {
        "telegram": {
          "text": message,
          "reply_markup": {
            "inline_keyboard": [
              [{ "text": "📌 ดูรายละเอียด", "url": "https://www.example.com" }],
              [{ "text": "📞 ติดต่อเรา", "callback_data": "contact_us" }]
            ]
          }
        }
      }
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("OK");
}
```
✅ **เมื่อบอทตอบกลับ ผู้ใช้จะเห็นปุ่มที่สามารถกดได้**  

---

## **🔹 2. ส่งรูปภาพ (Image Response)**
🔹 หากต้องการให้บอทตอบกลับเป็นรูปภาพ สามารถใช้ **custom payload**  

```google app script
function doPost(e) {
  var request = JSON.parse(e.postData.contents);

  if (request.queryResult) {
    var response = {
      "payload": {
        "telegram": {
          "photo": "https://example.com/promotion.jpg",
          "caption": "🔥 โปรโมชั่นสุดพิเศษ! 🔥"
        }
      }
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("OK");
}
```
✅ **เหมาะสำหรับ:** ส่งรูปโปรโมชัน หรือข้อมูลภาพ  

---

## **🔹 3. ส่งข้อความแบบ Markdown / HTML**
🔹 ทำให้ข้อความดูสวยงามขึ้น  

```google app script
function doPost(e) {
  var request = JSON.parse(e.postData.contents);

  if (request.queryResult) {
    var response = {
      "payload": {
        "telegram": {
          "text": "<b>🔥 โปรโมชั่น! 🔥</b>\n<i>วันนี้ลด 50%</i>\n<a href='https://www.example.com'>คลิกดูรายละเอียด</a>",
          "parse_mode": "HTML"
        }
      }
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("OK");
}
```
✅ **เหมาะสำหรับ:** ข้อความที่ต้องการการจัดรูปแบบ เช่น **ตัวหนา, ตัวเอียง, ลิงก์**  

---

# **✅ สรุป**
| **รูปแบบที่ใช้** | **Telegram รองรับ?** | **ตัวอย่าง** |
|------------------|-----------------|-------------|
| `fulfillmentText` (ข้อความธรรมดา) | ✅ | `"fulfillmentText": "Hello!"` |
| **Inline Keyboard (ปุ่มกด)** | ✅ | ใช้ `"reply_markup"` |
| **Image Response (ส่งรูป)** | ✅ | ใช้ `"photo"` |
| **Markdown / HTML (จัดรูปแบบข้อความ)** | ✅ | ใช้ `"parse_mode": "HTML"` |
| **Custom Payload (JSON)** | ✅ | ใช้ `"payload": { "telegram": {...} }` |
