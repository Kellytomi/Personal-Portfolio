const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

// Icons we want to extract
const iconsToExtract = [
  'nextdotjs',   // Next.js
  'react',       // React
  'typescript',  // TypeScript
  'nodedotjs',   // Node.js
  'flutter',     // Flutter
];

// Ensure the directory exists
const outputDir = path.join(__dirname, '../public/skills');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extract each icon
iconsToExtract.forEach(iconSlug => {
  const icon = simpleIcons[`si${iconSlug.charAt(0).toUpperCase() + iconSlug.slice(1)}`];
  
  if (!icon) {
    console.error(`Icon ${iconSlug} not found`);
    return;
  }

  // Format filename based on the icon name
  let filename;
  if (iconSlug === 'nextdotjs') {
    filename = 'nextjs.svg';
  } else if (iconSlug === 'nodedotjs') {
    filename = 'nodejs.svg';
  } else {
    filename = `${iconSlug}.svg`;
  }

  // Create SVG with the proper color
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}">
  ${icon.path}
</svg>`;

  // Write to file
  fs.writeFileSync(path.join(outputDir, filename), svgContent);
  console.log(`Created ${filename} with color #${icon.hex}`);
});

console.log('All icons extracted successfully!'); 