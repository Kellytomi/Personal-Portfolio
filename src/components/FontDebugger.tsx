"use client";

import { useEffect, useState } from 'react';

const FontDebugger = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontStatus, setFontStatus] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if document fonts API is available
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          setFontsLoaded(true);
          
          // Check specific font loading status
          const fonts = ['Plus Jakarta Sans', 'Syne'];
          const status: Record<string, string> = {};
          
          fonts.forEach(font => {
            const isLoaded = document.fonts.check(`16px "${font}"`);
            status[font] = isLoaded ? 'Loaded' : 'Not Loaded';
          });
          
          setFontStatus(status);
        });
      }
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
      <div>Fonts Ready: {fontsLoaded ? '✅' : '❌'}</div>
      {Object.entries(fontStatus).map(([font, status]) => (
        <div key={font}>
          {font}: {status === 'Loaded' ? '✅' : '❌'}
        </div>
      ))}
    </div>
  );
};

export default FontDebugger; 