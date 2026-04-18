const fs = require('fs');
const path = require('path');

const dir = '/app/applet';
const destDir = '/app/applet/public/images/uploaded';

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(dir);
const whatsappFiles = files.filter(f => f.startsWith('WhatsApp Image'));

whatsappFiles.forEach((file, index) => {
    const oldPath = path.join(dir, file);
    const newPath = path.join(destDir, `img${index + 1}.jpeg`);
    fs.renameSync(oldPath, newPath);
});

console.log('Moved ' + whatsappFiles.length + ' files.');
