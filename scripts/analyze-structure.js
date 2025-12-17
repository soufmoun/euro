const fs = require('fs');
const path = require('path');

function getProjectStructure(dir, prefix = '', depth = 0, maxDepth = 4) {
  if (depth > maxDepth) return '';
  
  const files = fs.readdirSync(dir);
  let output = '';
  
  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const isLast = index === files.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    
    output += prefix + connector + file + '\n';
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.includes('node_modules')) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      output += getProjectStructure(filePath, newPrefix, depth + 1, maxDepth);
    }
  });
  
  return output;
}

// Analyze your project
const structure = getProjectStructure(process.cwd());
console.log('PROJECT STRUCTURE:');
console.log(structure);

// Save to file
fs.writeFileSync('PROJECT_STRUCTURE.txt', structure);

// Also show important stats
console.log('\n📊 PROJECT STATISTICS:');
console.log('====================');

const fileExtensions = {};
const countFiles = (dir) => {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.includes('node_modules')) {
      count += countFiles(filePath);
    } else if (stat.isFile()) {
      count++;
      const ext = path.extname(file) || 'no-extension';
      fileExtensions[ext] = (fileExtensions[ext] || 0) + 1;
    }
  });
  
  return count;
};

const totalFiles = countFiles(process.cwd());
console.log(`Total Files: ${totalFiles}`);
console.log('File Types:', fileExtensions);