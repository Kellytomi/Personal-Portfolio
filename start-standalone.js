#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const STANDALONE_DIR = path.join('.next', 'standalone');
const STANDALONE_PUBLIC_DIR = path.join(STANDALONE_DIR, 'public');
const STANDALONE_NEXT_DIR = path.join(STANDALONE_DIR, '.next');
const STANDALONE_STATIC_DIR = path.join(STANDALONE_NEXT_DIR, 'static');
const PUBLIC_DIR = 'public';
const STATIC_DIR = path.join('.next', 'static');
const SERVER_JS = path.join(STANDALONE_DIR, 'server.js');

// Check if standalone build exists
if (!fs.existsSync(SERVER_JS)) {
  console.log('Standalone server not found. Running legacy start...');
  execSync('next start', { stdio: 'inherit' });
  process.exit(0);
}

// Create public directory in standalone if it doesn't exist
if (!fs.existsSync(STANDALONE_PUBLIC_DIR)) {
  console.log('Creating public directory in standalone output...');
  fs.mkdirSync(STANDALONE_PUBLIC_DIR, { recursive: true });

  // Copy public files if they exist
  if (fs.existsSync(PUBLIC_DIR)) {
    console.log('Copying public files to standalone output...');
    const publicFiles = fs.readdirSync(PUBLIC_DIR);

    publicFiles.forEach((file) => {
      const sourcePath = path.join(PUBLIC_DIR, file);
      const destPath = path.join(STANDALONE_PUBLIC_DIR, file);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        // Copy directory recursively
        execSync(`cp -R "${sourcePath}" "${destPath}"`, { stdio: 'inherit' });
      } else {
        // Copy file
        fs.copyFileSync(sourcePath, destPath);
      }
    });
  }
}

// Create .next/static directory in standalone if it doesn't exist
if (!fs.existsSync(STANDALONE_STATIC_DIR)) {
  console.log('Creating .next/static directory in standalone output...');
  fs.mkdirSync(STANDALONE_STATIC_DIR, { recursive: true });

  // Copy static files
  if (fs.existsSync(STATIC_DIR)) {
    console.log('Copying static files to standalone output...');
    execSync(`cp -R "${STATIC_DIR}/." "${STANDALONE_STATIC_DIR}/"`, { stdio: 'inherit' });
  }
}

// Start the standalone server
console.log('Starting standalone server...');
require(SERVER_JS);
