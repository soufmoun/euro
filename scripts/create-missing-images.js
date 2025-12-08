// scripts/create-missing-images.js
const fs = require('fs');
const path = require('path');

console.log('🖼️ Creating missing destination images...\n');

const cities = ['paris', 'budapest', 'vienna', 'rome', 'amsterdam', 'madrid', 'barcelona', 'prague', 'berlin', 'lisbon'];
const imagesDir = path.join(process.cwd(), 'public/images/destinations');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

cities.forEach(city => {
  const squarePath = path.join(imagesDir, `${city}.jpg`);
  const coverPath = path.join(imagesDir, `${city}-cover.jpg`);
  
  // Only create if doesn't exist
  if (!fs.existsSync(squarePath)) {
    const svg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="800" fill="#05203c"/>
      <text x="400" y="350" font-family="Arial" font-size="50" fill="white" text-anchor="middle">${city.charAt(0).toUpperCase() + city.slice(1)}</text>
      <text x="400" y="420" font-family="Arial" font-size="30" fill="#2c5aa0" text-anchor="middle">Budget Guide</text>
    </svg>`;
    fs.writeFileSync(squarePath, svg);
    console.log(`✅ Created ${city}.jpg`);
  }
  
  if (!fs.existsSync(coverPath)) {
    const svg = `<svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="400" fill="#2c5aa0"/>
      <text x="600" y="200" font-family="Arial" font-size="70" fill="white" text-anchor="middle">${city.charAt(0).toUpperCase() + city.slice(1)}</text>
      <text x="600" y="270" font-family="Arial" font-size="40" fill="#05203c" text-anchor="middle">Budget Travel Guide</text>
    </svg>`;
    fs.writeFileSync(coverPath, svg);
    console.log(`✅ Created ${city}-cover.jpg`);
  }
});

console.log('\n✅ All images ready!');