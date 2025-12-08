const fs = require("fs");
const path = require("path");

console.log("🔍 Checking component structure...\n");

// Check layout.tsx
const layoutPath = path.join(process.cwd(), "app", "layout.tsx");
if (fs.existsSync(layoutPath)) {
  const layout = fs.readFileSync(layoutPath, "utf8");
  const hasStrictMode = layout.includes("StrictMode");
  console.log("Layout.tsx:");
  console.log("  Has StrictMode:", hasStrictMode ? "✅ Yes - THIS CAUSES DOUBLE RENDERS" : "❌ No");
}

// Check for duplicate providers
console.log("\nChecking for duplicate providers:");
const files = ["app/layout.tsx", "app/page.tsx", "app/providers.tsx"];
files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    if (content.includes("ErrorBoundary")) {
      console.log(`  ${file}: Has ErrorBoundary`);
    }
  }
});
