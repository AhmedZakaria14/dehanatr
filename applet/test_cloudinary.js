const https = require('https');

https.get('https://res.cloudinary.com/dxvjqrb9l/image/upload/img20.jpeg', (res) => {
  console.log('img20.jpeg status:', res.statusCode);
});

https.get('https://res.cloudinary.com/dxvjqrb9l/image/upload/WhatsApp_Image_2024-05-18_at_12.30.00.jpeg', (res) => {
  console.log('WhatsApp status:', res.statusCode);
});
