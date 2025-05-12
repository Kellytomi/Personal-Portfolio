import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the site config file
    const configPath = path.join(process.cwd(), 'src', 'config', 'site.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Extract the comingSoonMode value using regex
    const modeRegex = /comingSoonMode:\s*(true|false)/;
    const match = configContent.match(modeRegex);
    
    if (match) {
      const enabled = match[1] === 'true';
      return NextResponse.json({ enabled, success: true });
    } else {
      return NextResponse.json({ error: 'Failed to parse config' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error reading coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 