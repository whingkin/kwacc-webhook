// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/new-license', async (req, res) => {
  const { contact, plan_title, plan_valid_until, contact_id, plan_id } = req.body;
  const email = contact?.email?.trim().toLowerCase();
  const firstName = contact?.name?.first || '客戶';
  const licenseKey = 'LIC-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  const maxDevices = 5;
  const downloadLink = 'https://kinsonwong.com/download';

  // 模擬寄信、記錄等
  console.log('📨 授權建立：', { licenseKey, email, firstName });

  res.json({ licenseKey, planTitle: plan_title, planValidUntil: plan_valid_until, firstName, maxDevices, downloadLink });
});

app.listen(3000, () => console.log('KWACC webhook running on port 3000'));