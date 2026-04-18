const fs = require('fs');
const path = require('path');

const dir = '/app/applet/app';
let imgIndex = 1;
const maxImages = 35;

function getNextImage() {
    const img = `/images/uploaded/img${imgIndex}.jpeg`;
    imgIndex = imgIndex >= maxImages ? 1 : imgIndex + 1;
    return img;
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Replace all picsum.photos URLs
            content = content.replace(/https:\/\/picsum\.photos\/seed\/[a-zA-Z0-9-]+\/\d+\/\d+/g, () => {
                modified = true;
                return getNextImage();
            });
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(dir);
console.log('Done replacing images.');
