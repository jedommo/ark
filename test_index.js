const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');

const regex = /on[a-z]+\s*=\s*"([^"]+)"/gi;
let match;
const found = new Set();
const missing = new Set();

while ((match = regex.exec(html)) !== null) {
  const code = match[1];
  const fnMatches = code.matchAll(/([a-zA-Z0-9_$]+)\s*\(/g);
  for (const fnMatch of fnMatches) {
    const fnName = fnMatch[1];
    if (['setTimeout', 'clearTimeout', 'alert', 'confirm', 'console', 'preventDefault', 'stopPropagation'].includes(fnName)) continue;
    found.add(fnName);
    if (!js.includes('function ' + fnName) && !js.includes(fnName + ' =')) {
      missing.add(fnName);
    }
  }
}

console.log('Checked functions in HTML:', Array.from(found));
console.log('Missing functions in app.js:', Array.from(missing));
