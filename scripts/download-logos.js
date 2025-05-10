const fs = require('fs');
const path = require('path');
const https = require('https');

// Define logos with their URLs
const logos = [
  {
    name: 'nextjs.svg',
    url: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
  },
  {
    name: 'react.svg',
    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
  },
  {
    name: 'typescript.svg',
    url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
  },
  {
    name: 'nodejs.svg',
    url: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
  },
  {
    name: 'flutter.svg',
    url: 'https://cdn.worldvectorlogo.com/logos/flutter.svg'
  }
];

// Create the output directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/skills');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download a file
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', err => {
      fs.unlink(outputPath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Download all logos
async function downloadLogos() {
  for (const logo of logos) {
    const outputPath = path.join(outputDir, logo.name);
    
    console.log(`Downloading ${logo.name}...`);
    try {
      await downloadFile(logo.url, outputPath);
      console.log(`Successfully downloaded ${logo.name}`);
    } catch (error) {
      console.error(`Error downloading ${logo.name}:`, error.message);
    }
  }
}

downloadLogos().then(() => {
  console.log('All downloads completed!');
}); 