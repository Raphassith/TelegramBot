const sendTelegramData = async (endpoint, payload) => {
  const token = "YOUR_BOT_TOKEN";
  const url = `https://api.telegram.org/bot${token}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

// ตัวอย่างการเรียกใช้
sendTelegramData("/sendMessage", messagePayload);
