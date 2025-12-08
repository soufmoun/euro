const fs = require("fs");
const path = require("path");

console.log("🔍 Checking ACTUAL image paths in markdown files:\n");

const postsDir = path.join(process.cwd(), "content/destinations");
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

files.forEach(file => {
  const content = fs.readFileSync(path.join(postsDir, file), "utf8");
  const slug = file.replace(".md", "");
  
  // Simple YAML parsing
  const lines = content.split("\n");
  let image = "";
  let cover = "";
  
  for (let line of lines) {
    if (line.startsWith("image:")) {
      image = line.replace("image:", "").trim().replace(/['"]/g, "");
    }
    if (line.startsWith("cover:")) {
      cover = line.replace("cover:", "").trim().replace(/['"]/g, "");
    }
  }
  
  console.log(`${slug}:`);
  console.log(`  Image: ${image || "NOT FOUND"}`);
  console.log(`  Cover: ${cover || "NOT FOUND"}`);
  console.log("");
});
