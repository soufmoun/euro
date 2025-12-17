const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage(inputPath, outputPath, width = 1200) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));
    
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Failed: ${path.basename(inputPath)}`, error.message);
  }
}

async function optimizeDirectory(dir) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await optimizeDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(filePath, filePath);
    }
  }
}

// Run optimization
optimizeDirectory('./public/images').then(() => {
  console.log('✅ All images optimized!');
});