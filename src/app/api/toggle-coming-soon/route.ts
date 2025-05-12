import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { enabled } = body;
    
    if (typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    // Read the site config file
    const configPath = path.join(process.cwd(), 'src', 'config', 'site.ts');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Replace the comingSoonMode value
    const modeRegex = /(comingSoonMode:\s*)(true|false)/;
    configContent = configContent.replace(modeRegex, `$1${enabled}`);
    
    // Write the updated config back to the file
    fs.writeFileSync(configPath, configContent, 'utf8');
    
    return NextResponse.json({ success: true, enabled });
  } catch (error) {
    console.error('Error updating coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 