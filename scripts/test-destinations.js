// scripts/test-destinations.js
console.log('🧪 Testing EuroBudget Setup...\n');

try {
  // Test 1: Check destination files
  const fs = require('fs');
  const path = require('path');
  
  const postsDir = path.join(process.cwd(), 'content/destinations');
  console.log('1. Checking destination files:');
  
  if (!fs.existsSync(postsDir)) {
    console.log('   ❌ content/destinations/ not found');
    console.log('   💡 Create it: mkdir -p content/destinations');
  } else {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    console.log(`   ✅ Found ${files.length} destination files`);
    
    if (files.length > 0) {
      console.log('   📄 Files found:');
      files.slice(0, 5).forEach(f => console.log(`      - ${f}`));
      if (files.length > 5) console.log(`      ... and ${files.length - 5} more`);
    }
  }
  
  // Test 2: Check images
  console.log('\n2. Checking images:');
  const imagesDir = path.join(process.cwd(), 'public/images/destinations');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('   ❌ public/images/destinations/ not found');
    console.log('   💡 Run: npm run create-images');
  } else {
    const images = fs.readdirSync(imagesDir);
    console.log(`   ✅ Found ${images.length} image files`);
    
    // Check for required cities
    const requiredCities = ['paris', 'budapest', 'vienna', 'rome', 'amsterdam'];
    console.log('   🔍 Checking required images:');
    requiredCities.forEach(city => {
      const hasSquare = images.includes(`${city}.jpg`);
      const hasCover = images.includes(`${city}-cover.jpg`);
      console.log(`      ${city}: ${hasSquare ? '✅' : '❌'} square, ${hasCover ? '✅' : '❌'} cover`);
    });
  }
  
  // Test 3: Check if lib/posts.ts exists
  console.log('\n3. Checking lib/posts.ts:');
  const postsFile = path.join(process.cwd(), 'lib/posts.ts');
  if (fs.existsSync(postsFile)) {
    console.log('   ✅ lib/posts.ts exists');
  } else {
    console.log('   ❌ lib/posts.ts not found');
    console.log('   💡 Make sure your posts.ts file is in the right place');
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Setup check complete!');
  console.log('='.repeat(50));
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.log('\n💡 Troubleshooting:');
  console.log('   1. Make sure you\'re in the project root');
  console.log('   2. Run: npm install (if not done already)');
  console.log('   3. Check that all files are in correct locations');
}