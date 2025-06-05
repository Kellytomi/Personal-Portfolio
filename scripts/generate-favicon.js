const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    console.log('Generating optimized favicon...');

    // Source file path
    const sourcePath = path.join(__dirname, '../public/images/Etomafavicon.png');

    // Generate favicon.ico (32x32 pixels)
    await sharp(sourcePath)
      .resize(32, 32)
      .toFormat('png')
      .toBuffer()
      .then((data) => {
        fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), data);
        console.log('favicon.ico generated successfully');
      });

    // Generate additional favicon sizes for different devices
    const sizes = [16, 32, 48, 64, 192, 512];

    for (const size of sizes) {
      await sharp(sourcePath)
        .resize(size, size)
        .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
      console.log(`favicon-${size}x${size}.png generated successfully`);
    }

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicon();
