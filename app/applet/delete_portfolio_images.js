const fs = require('fs');
const path = require('path');

const dir = '/app/applet/public/images/uploaded';
const filesToDelete = [
  // Portfolio images from homepage
  'img28.jpeg', 'img29.jpeg', 'img30.jpeg', 'img31.jpeg', 'img32.jpeg', 'img33.jpeg',
  // Portfolio images from portfolio page
  'img35.jpeg', 'img36.jpeg', 'img37.jpeg', 'img38.jpeg', 'img39.jpeg', 'img40.jpeg',
  'img41.jpeg', 'img42.jpeg', 'img43.jpeg', 'img44.jpeg', 'img45.jpeg', 'img46.jpeg',
  // Gallery images from painting page
  'img61.jpeg', 'img62.jpeg', 'img63.jpeg', 'img64.jpeg'
];

filesToDelete.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
