// scripts/check-css.js
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking CSS for issues...\n');

const cssPath = path.join(process.cwd(), 'app', 'globals.css');

if (!fs.existsSync(cssPath)) {
  console.log('❌ globals.css not found at:', cssPath);
  process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, 'utf8');

// Check 1: Duplicate classes
console.log('1. Checking for duplicate class definitions:');
const classRegex = /\.([a-zA-Z0-9_-]+)\s*\{/g;
const classes = {};
let match;
while ((match = classRegex.exec(cssContent)) !== null) {
  const className = match[1];
  classes[className] = (classes[className] || 0) + 1;
}

const duplicates = Object.entries(classes).filter(([_, count]) => count > 1);
if (duplicates.length > 0) {
  console.log('   ❌ Found duplicates:');
  duplicates.forEach(([className, count]) => {
    console.log(`      - .${className} (${count} times)`);
  });
} else {
  console.log('   ✅ No duplicate classes found');
}

// Check 2: Missing closing braces
console.log('\n2. Checking for missing closing braces:');
const openBraces = (cssContent.match(/{/g) || []).length;
const closeBraces = (cssContent.match(/}/g) || []).length;

if (openBraces === closeBraces) {
  console.log(`   ✅ Braces balanced: ${openBraces} open, ${closeBraces} close`);
} else {
  console.log(`   ❌ Braces unbalanced: ${openBraces} open, ${closeBraces} close`);
}

// Check 3: Line clamp utilities exist
console.log('\n3. Checking required utilities:');
const requiredClasses = ['line-clamp-1', 'line-clamp-2', 'line-clamp-3', 'hover-lift'];
requiredClasses.forEach(className => {
  const exists = cssContent.includes(`.${className}`);
  console.log(`   ${exists ? '✅' : '❌'} .${className}`);
});

// Check 4: Common errors
console.log('\n4. Checking for common errors:');
const lines = cssContent.split('\n');
let lineNumber = 1;
lines.forEach(line => {
  // Check for lines ending with { but not starting a new block properly
  if (line.includes('{') && !line.trim().endsWith('{') && line.trim() !== '{') {
    console.log(`   ⚠️  Line ${lineNumber}: Suspicious line: "${line.trim()}"`);
  }
  lineNumber++;
});

console.log('\n' + '='.repeat(50));
console.log('CSS Check Complete');
console.log('='.repeat(50));