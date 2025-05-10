const fs = require('fs');
const path = require('path');
const https = require('https');

// Define logos with their official URLs
const logos = [
  // Development logos
  {
    name: 'nextjs.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'react.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'typescript.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'nodejs.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'flutter.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
  },
  
  // Automation & Integration logos - using placeholders
  // These will need to be replaced manually with proper PNG files
  {
    name: 'zapier.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'make.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'airtable.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'notion.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'api.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  
  // Document Solutions logos - using placeholders
  {
    name: 'pandadoc.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'docusign.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'documentai.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'pdf.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  
  // Design & Branding logos - using placeholders
  {
    name: 'figma.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'uiux.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'brand.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
  },
  {
    name: 'designsystem.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' // Placeholder
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
    
    console.log(`Downloading ${logo.name} from official source...`);
    try {
      await downloadFile(logo.url, outputPath);
      console.log(`Successfully downloaded ${logo.name}`);
    } catch (error) {
      console.error(`Error downloading ${logo.name}:`, error.message);
    }
  }
}

downloadLogos().then(() => {
  console.log('All official logos downloaded! Note: Placeholder logos have been used for Automation & Integration, Document Solutions, and Design & Branding sections. Replace these manually with PNG files as needed.');
}); 