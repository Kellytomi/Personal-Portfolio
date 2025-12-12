'use client';

import { useState, useEffect } from 'react';
import ComingSoon from '@/app/coming-soon/page';
import WelcomeScreen from '@/components/WelcomeScreen';
import { siteConfig } from '@/config/site';

// Change this version number whenever you update the launch date
// This will force the component to use the new date
const CONFIG_VERSION = '1.2';

interface LaunchWrapperProps {
  children: React.ReactNode;
}

export default function LaunchWrapper({ children }: LaunchWrapperProps) {
  const [showDevTools, setShowDevTools] = useState(false);
  const [showWelcome, setShowWelcome] = useState(!siteConfig.comingSoonMode);
  const [hasHydrated, setHasHydrated] = useState(false);

  // For development testing only - press Shift+D to show dev tools
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shift+D to show/hide dev tools
      if (e.shiftKey && e.key === 'D') {
        setShowDevTools((prev) => !prev);
      }

      // Shift+W to show welcome screen again (for testing)
      if (e.shiftKey && e.key === 'W') {
        setShowWelcome(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Toggle coming soon mode for development purposes
  const toggleComingSoonMode = () => {
    console.log(
      'Coming soon mode toggled! Refresh the page to see changes. Update siteConfig.comingSoonMode to change permanently.'
    );
    // In a real implementation, you could update localStorage or a context
    // to temporarily override the setting without a page refresh
  };

  const resetWelcomeScreen = () => {
    localStorage.removeItem('portfolio-welcome-shown');
    setShowWelcome(true);
  };

  useEffect(() => {
    // Check if this is the first visit
    const hasSeenWelcome = localStorage.getItem('portfolio-welcome-shown');

    if (!hasSeenWelcome && !siteConfig.comingSoonMode) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }

    // Mark hydration so we can avoid UI mismatches when toggling the welcome screen
    setHasHydrated(true);
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem('portfolio-welcome-shown', 'true');
    setShowWelcome(false);
  };

  // Check if coming soon mode is enabled from config
  const showComingSoon = siteConfig.comingSoonMode;

  // Show either the countdown or the actual site
  return (
    <>
      {!showComingSoon && showWelcome && hasHydrated && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      {showDevTools && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            background: '#333',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            maxWidth: '300px',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0' }}>Development Tools</h4>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            Coming Soon Mode: {siteConfig.comingSoonMode ? 'Enabled' : 'Disabled'}
          </p>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            Launch date: {new Date(siteConfig.launchDate).toLocaleString()}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <button
              onClick={toggleComingSoonMode}
              style={{
                background: '#f44336',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              Toggle Coming Soon
            </button>
            <button
              onClick={resetWelcomeScreen}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              Show Welcome Screen
            </button>
          </div>
          <p style={{ fontSize: '10px', margin: '5px 0', opacity: '0.7' }}>
            Shift+D: Toggle this panel
            <br />
            Shift+W: Show welcome screen
          </p>
        </div>
      )}
      {showComingSoon ? <ComingSoon /> : children}
    </>
  );
}
