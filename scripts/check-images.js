// scripts/check-images.js
const fs = require('fs');
const path = require('path');

console.log('🖼️ Checking destination image paths...\n');

const postsDir = path.join(process.cwd(), 'content/destinations');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const slug = file.replace('.md', '');
  
  // Extract image paths
  const imageMatch = content.match(/image:\s*["']([^"']+)["']/);
  const coverMatch = content.match(/cover:\s*["']([^"']+)["']/);
  
  const image = imageMatch ? imageMatch[1] : 'NOT FOUND';
  const cover = coverMatch ? coverMatch[1] : 'NOT FOUND';
  
  console.log(`📁 ${slug}:`);
  console.log(`   image: ${image}`);
  console.log(`   cover: ${cover}`);
  
  // Check if files exist
  if (image.startsWith('/')) {
    const imagePath = path.join(process.cwd(), 'public', image.replace(/^\//, ''));
    console.log(`   ${fs.existsSync(imagePath) ? '✅' : '❌'} Image exists: ${imagePath}`);
  }
  
  if (cover.startsWith('/')) {
    const coverPath = path.join(process.cwd(), 'public', cover.replace(/^\//, ''));
    console.log(`   ${fs.existsSync(coverPath) ? '✅' : '❌'} Cover exists: ${coverPath}`);
  }
  
  console.log('');
});