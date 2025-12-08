const fs = require("fs");
const path = require("path");

console.log("🔧 Fixing ALL image paths...\n");

const postsDir = path.join(process.cwd(), "content/destinations");
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const slug = file.replace(".md", "");
  
  let changed = false;
  
  // Fix: "/images/paris.jpg" -> "/images/destinations/paris.jpg"
  if (content.includes('image: "/images/')) {
    if (!content.includes('image: "/images/destinations/')) {
      content = content.replace(
        /image:\s*"\/images\/([^"]+)\.jpg"/g,
        'image: "/images/destinations/$1.jpg"'
      );
      changed = true;
    }
  }
  
  // Fix cover paths
  if (content.includes('cover: "/images/')) {
    if (!content.includes('cover: "/images/destinations/')) {
      content = content.replace(
        /cover:\s*"\/images\/([^"]+)-cover\.jpg"/g,
        'cover: "/images/destinations/$1-cover.jpg"'
      );
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log("\n🎉 All paths fixed!");
