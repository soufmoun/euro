const fs = require("fs");
const path = require("path");

console.log("🔍 Checking image paths in destination files:\n");

const postsDir = path.join(process.cwd(), "content/destinations");
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

files.slice(0, 3).forEach(file => {
  const content = fs.readFileSync(path.join(postsDir, file), "utf8");
  const slug = file.replace(".md", "");
  
  // Extract image and cover
  const imageMatch = content.match(/image:\s*["']([^"']+)["']/);
  const coverMatch = content.match(/cover:\s*["']([^"']+)["']/);
  
  console.log(`📄 ${slug}:`);
  console.log(`   Image: ${imageMatch ? imageMatch[1] : "NOT FOUND"}`);
  console.log(`   Cover: ${coverMatch ? coverMatch[1] : "NOT FOUND"}`);
  console.log("");
});
