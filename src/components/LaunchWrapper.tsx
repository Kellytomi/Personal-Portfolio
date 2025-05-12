"use client";

import { useState, useEffect } from 'react';
import ComingSoon from '@/app/coming-soon/page';
import { siteConfig } from '@/config/site';

// Change this version number whenever you update the launch date
// This will force the component to use the new date
const CONFIG_VERSION = "1.1";

interface LaunchWrapperProps {
  children: React.ReactNode;
}

export default function LaunchWrapper({ children }: LaunchWrapperProps) {
  const [isLaunched, setIsLaunched] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showDevTools, setShowDevTools] = useState(false);
  
  // For development testing only - press Shift+D to show dev tools
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shift+D to show/hide dev tools
      if (e.shiftKey && e.key === 'D') {
        setShowDevTools(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Reset countdown function
  const resetCountdown = () => {
    localStorage.removeItem('launchDate');
    localStorage.removeItem('siteHasLaunched');
    localStorage.removeItem('configVersion');
    console.log('Countdown reset! Refreshing the page...');
    window.location.reload();
  };
  
  useEffect(() => {
    // ------ COUNTDOWN CONTROL CENTER ------
    
    // 1. MASTER SWITCH: Set to 'true' to enable countdown, 'false' to disable it completely
    const enableCountdown = true;
    
    // 2. LAUNCH DATE SETTINGS:
    // Always use the date directly from site config
    const getLaunchDate = () => {
      // Check if we have the current config version
      const storedVersion = localStorage.getItem('configVersion');
      
      // If version doesn't match or doesn't exist, use the current config date
      if (storedVersion !== CONFIG_VERSION) {
        // Store the new version and date
        localStorage.setItem('configVersion', CONFIG_VERSION);
        localStorage.setItem('launchDate', siteConfig.launchDate.toString());
        
        // Clear the launched flag if we're updating the config
        localStorage.removeItem('siteHasLaunched');
        
        return new Date(siteConfig.launchDate);
      }
      
      // Otherwise use stored date
      const storedLaunchDate = localStorage.getItem('launchDate');
      if (storedLaunchDate) {
        return new Date(parseInt(storedLaunchDate));
      }
      
      // Fallback to config date
      return new Date(siteConfig.launchDate);
    };
    
    // 3. MANUAL OVERRIDE: Force specific behavior regardless of date
    //    - Set to null for date-based behavior (countdown shows before launch date)
    //    - Set to true to always show main site (bypass countdown)
    //    - Set to false to always show countdown
    const manualOverride = null;
    
    // Check if the site has already been launched (stored in localStorage)
    const hasLaunched = localStorage.getItem('siteHasLaunched') === 'true';
    if (hasLaunched) {
      setIsLaunched(true);
      setIsLoading(false);
      return;
    }
    
    // ------- END CONTROL CENTER -------
    
    // Logic for determining whether to show the countdown
    const launchDate = getLaunchDate();
    const currentDate = new Date();
    
    console.log("Launch date:", launchDate);
    console.log("Current date:", currentDate);
    
    if (!enableCountdown) {
      // Master switch is off - always show the main site
      setIsLaunched(true);
    } else if (manualOverride !== null) {
      // Manual override is active - follow its setting
      setIsLaunched(manualOverride);
    } else {
      // Date-based logic - show countdown only before launch date
      const shouldLaunch = currentDate >= launchDate;
      setIsLaunched(shouldLaunch);
      
      // If we've reached the launch date, store that info
      if (shouldLaunch) {
        localStorage.setItem('siteHasLaunched', 'true');
      }
    }
    
    setIsLoading(false);
  }, []);
  
  // Show nothing during initial load to prevent flash
  if (isLoading) {
    return null;
  }
  
  // Show either the countdown or the actual site
  return (
    <>
      {showDevTools && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          background: '#333',
          padding: '10px',
          borderRadius: '5px',
          color: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Development Tools</h4>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            Config version: {CONFIG_VERSION}
          </p>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            Launch date: {new Date(siteConfig.launchDate).toLocaleString()}
          </p>
          <button 
            onClick={resetCountdown}
            style={{
              background: '#f44336',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Reset Countdown
          </button>
        </div>
      )}
      {isLaunched ? children : <ComingSoon />}
    </>
  );
} 