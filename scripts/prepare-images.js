const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const sourceDir = path.join(root, 'assets', 'site-images');
const targetDir = path.join(root, 'public', 'images', 'site');

fs.mkdirSync(targetDir, { recursive: true });

for (const file of fs.readdirSync(sourceDir)) {
  if (!file.endsWith('.tar.gz')) continue;
  execFileSync('tar', ['-xzf', path.join(sourceDir, file), '-C', targetDir]);
}

console.log('Prepared local site images in public/images/site');
