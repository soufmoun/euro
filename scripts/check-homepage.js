const fs = require("fs");
const path = require("path");

const pagePath = path.join(process.cwd(), "app", "page.tsx");
const content = fs.readFileSync(pagePath, "utf8");

console.log("🔍 Checking homepage for duplicate mappings...\n");

// Count how many times .map is called
const mapCount = (content.match(/\.map\(/g) || []).length;
console.log(`Found ${mapCount} .map() calls in homepage`);

// Show lines with .map
console.log("\n.map() calls found:");
const lines = content.split("\n");
lines.forEach((line, index) => {
  if (line.includes(".map(")) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});

// Check for featuredDestinations vs allDestinations
console.log("\n🔍 Checking destination variables:");
if (content.includes("featuredDestinations")) {
  console.log("✅ featuredDestinations exists");
  // Count how many times it's used
  const featuredCount = (content.match(/featuredDestinations/g) || []).length;
  console.log(`   Used ${featuredCount} times`);
}

if (content.includes("allDestinations")) {
  console.log("✅ allDestinations exists");
  const allCount = (content.match(/allDestinations/g) || []).length;
  console.log(`   Used ${allCount} times`);
}
