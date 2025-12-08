// scripts/fix-image-paths.js
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing image paths in destination files...\n');

const postsDir = path.join(process.cwd(), 'content/destinations');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const slug = file.replace('.md', '');
  
  let changed = false;
  
  // Fix image paths
  content = content.replace(
    /image:\s*["']\/images\/([^"']+)\.jpg["']/g,
    (match, city) => {
      if (!city.includes('/')) { // If it's just "paris.jpg" not "destinations/paris.jpg"
        changed = true;
        return `image: "/images/destinations/${city}.jpg"`;
      }
      return match;
    }
  );
  
  // Fix cover paths
  content = content.replace(
    /cover:\s*["']\/images\/([^"']+)-cover\.jpg["']/g,
    (match, city) => {
      if (!city.includes('/')) { // If it's just "paris-cover.jpg"
        changed = true;
        return `cover: "/images/destinations/${city}-cover.jpg"`;
      }
      return match;
    }
  );
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed paths in ${file}`);
  } else {
    console.log(`⏭️  ${file} already has correct paths`);
  }
});

console.log('\n🎉 All image paths fixed!');