console.log("=== EUROBUDGET DIAGNOSTIC ===\n");

const fs = require("fs");
const path = require("path");

// 1. Check CSS
console.log("1. Checking CSS...");
const cssPath = path.join(process.cwd(), "app", "globals.css");
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, "utf8");
  const hasLineClamp = css.includes(".line-clamp-2");
  console.log("   CSS exists:", cssPath);
  console.log("   Has .line-clamp-2:", hasLineClamp ? "✅" : "❌");
} else {
  console.log("   ❌ CSS not found!");
}

// 2. Check images
console.log("\n2. Checking images...");
const imagesDir = path.join(process.cwd(), "public", "images", "destinations");
if (fs.existsSync(imagesDir)) {
  const images = fs.readdirSync(imagesDir);
  console.log("   Found", images.length, "images");
  console.log("   Sample:", images.slice(0, 3));
} else {
  console.log("   ❌ Images directory not found!");
}

// 3. Check destination files
console.log("\n3. Checking destination files...");
const postsDir = path.join(process.cwd(), "content", "destinations");
if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  console.log("   Found", files.length, "destination files");
  
  // Check one file
  if (files.length > 0) {
    const sample = fs.readFileSync(path.join(postsDir, files[0]), "utf8");
    const hasImage = sample.includes("image:");
    console.log("   First file has image path:", hasImage ? "✅" : "❌");
  }
} else {
  console.log("   ❌ Destination directory not found!");
}

console.log("\n=== DIAGNOSTIC COMPLETE ===");
