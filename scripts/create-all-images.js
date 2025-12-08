// scripts/create-all-images.js
const fs = require('fs');
const path = require('path');

console.log('🖼️ Creating placeholder images for EuroBudget...\n');

// List of all cities
const cities = [
  'paris', 'budapest', 'vienna', 'rome', 'amsterdam',
  'madrid', 'barcelona', 'prague', 'berlin', 'lisbon'
];

// Create public/images/destinations directory
const imagesDir = path.join(process.cwd(), 'public', 'images', 'destinations');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`📁 Created directory: ${imagesDir}`);
}

// Create images for each city
let createdCount = 0;
cities.forEach(city => {
  // Square image for cards
  const squarePath = path.join(imagesDir, `${city}.jpg`);
  if (!fs.existsSync(squarePath)) {
    const squareSvg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="800" fill="#05203c"/>
      <rect width="780" height="780" x="10" y="10" fill="#2c5aa0" rx="20"/>
      <text x="400" y="350" font-family="Arial" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${city.charAt(0).toUpperCase() + city.slice(1)}</text>
      <text x="400" y="420" font-family="Arial" font-size="28" fill="white" text-anchor="middle">Budget Travel Guide</text>
      <text x="400" y="500" font-family="Arial" font-size="20" fill="#f8f9fa" text-anchor="middle">🌍 EuroBudget</text>
    </svg>`;
    fs.writeFileSync(squarePath, squareSvg);
    createdCount++;
    console.log(`✅ Created: ${city}.jpg`);
  }
  
  // Cover image for headers
  const coverPath = path.join(imagesDir, `${city}-cover.jpg`);
  if (!fs.existsSync(coverPath)) {
    const coverSvg = `<svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="400" fill="#05203c"/>
      <rect width="1180" height="380" x="10" y="10" fill="#2c5aa0" rx="15"/>
      <text x="600" y="180" font-family="Arial" font-size="64" fill="white" text-anchor="middle" font-weight="bold">${city.charAt(0).toUpperCase() + city.slice(1)}</text>
      <text x="600" y="250" font-family="Arial" font-size="36" fill="white" text-anchor="middle">Budget Travel Guide</text>
      <text x="600" y="320" font-family="Arial" font-size="24" fill="#f8f9fa" text-anchor="middle">🌍 EuroBudget - Travel Europe for Less</text>
    </svg>`;
    fs.writeFileSync(coverPath, coverSvg);
    createdCount++;
    console.log(`✅ Created: ${city}-cover.jpg`);
  }
});

// Create default images
console.log('\n📄 Creating default images...');
const defaultDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(defaultDir)) {
  fs.mkdirSync(defaultDir, { recursive: true });
}

// Create default.jpg
const defaultPath = path.join(defaultDir, 'default.jpg');
if (!fs.existsSync(defaultPath)) {
  const defaultSvg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="800" fill="#05203c"/>
    <circle cx="400" cy="300" r="150" fill="#2c5aa0"/>
    <text x="400" y="300" font-family="Arial" font-size="80" fill="white" text-anchor="middle" dy=".3em">🌍</text>
    <text x="400" y="450" font-family="Arial" font-size="48" fill="white" text-anchor="middle" font-weight="bold">EuroBudget</text>
    <text x="400" y="520" font-family="Arial" font-size="28" fill="#f8f9fa" text-anchor="middle">Travel Europe for Less</text>
  </svg>`;
  fs.writeFileSync(defaultPath, defaultSvg);
  createdCount++;
  console.log(`✅ Created: /images/default.jpg`);
}

// Create default-cover.jpg
const defaultCoverPath = path.join(defaultDir, 'default-cover.jpg');
if (!fs.existsSync(defaultCoverPath)) {
  const defaultCoverSvg = `<svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="400" fill="#05203c"/>
    <circle cx="300" cy="200" r="100" fill="#2c5aa0"/>
    <text x="300" y="200" font-family="Arial" font-size="60" fill="white" text-anchor="middle" dy=".3em">🌍</text>
    <text x="650" y="180" font-family="Arial" font-size="64" fill="white" text-anchor="middle" font-weight="bold">EuroBudget</text>
    <text x="650" y="250" font-family="Arial" font-size="36" fill="white" text-anchor="middle">Travel Europe for Less</text>
    <text x="650" y="320" font-family="Arial" font-size="24" fill="#f8f9fa" text-anchor="middle">Verified Budget Guides & Real Prices</text>
  </svg>`;
  fs.writeFileSync(defaultCoverPath, defaultCoverSvg);
  createdCount++;
  console.log(`✅ Created: /images/default-cover.jpg`);
}

console.log('\n' + '='.repeat(50));
console.log(`🎉 Created ${createdCount} image files!`);
console.log('='.repeat(50));
console.log('\n📁 Your image structure:');
console.log('   public/images/destinations/');
console.log('   ├── paris.jpg');
console.log('   ├── paris-cover.jpg');
console.log('   ├── budapest.jpg');
console.log('   └── ... (10 cities total)');
console.log('\n🚀 Next steps:');
console.log('   1. Run: npm run dev');
console.log('   2. Visit: http://localhost:3000');
console.log('   3. Check if destination cards show images');