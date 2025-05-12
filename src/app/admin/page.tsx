'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [comingSoonEnabled, setComingSoonEnabled] = useState(true);
  const [message, setMessage] = useState('');
  
  const router = useRouter();
  const cookies = useCookies();
  
  // Check if user is authenticated
  useEffect(() => {
    const isAuth = cookies.get('portfolio_admin_auth') === 'true';
    setAuthenticated(isAuth);
    
    // Get current mode status
    const fetchStatus = async () => {
      const res = await fetch('/api/coming-soon-status');
      const data = await res.json();
      setComingSoonEnabled(data.enabled);
    };
    
    if (isAuth) {
      fetchStatus();
    }
  }, [cookies]);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you should replace this with a more secure method
    if (password === 'admin123') {
      // Set cookie with simpler approach
      cookies.set('portfolio_admin_auth', 'true');
      setAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Invalid password');
    }
  };
  
  const handleLogout = () => {
    cookies.remove('portfolio_admin_auth');
    setAuthenticated(false);
  };
  
  const toggleComingSoonMode = async () => {
    try {
      console.log('Toggling coming soon mode to:', !comingSoonEnabled);
      
      const res = await fetch('/api/toggle-coming-soon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled: !comingSoonEnabled }),
      });
      
      const data = await res.json();
      console.log('Toggle response:', data);
      
      if (data.success) {
        setComingSoonEnabled(!comingSoonEnabled);
        setMessage(`Coming soon mode ${!comingSoonEnabled ? 'enabled' : 'disabled'}`);
        
        // Force refresh to apply changes - more aggressive refresh
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setMessage('Failed to update status');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error('Toggle error:', error);
    }
  };
  
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          
          {message && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {message}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Logout
          </button>
        </div>
        
        {message && (
          <div className={`mb-6 p-3 rounded ${message.includes('error') || message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Coming Soon Mode</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700">Status: <span className={comingSoonEnabled ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                {comingSoonEnabled ? 'Enabled' : 'Disabled'}
              </span></p>
              <p className="text-sm text-gray-500 mt-1">
                {comingSoonEnabled 
                  ? 'Visitors will see the coming soon page.' 
                  : 'Visitors will see the normal portfolio.'}
              </p>
            </div>
            <button
              onClick={toggleComingSoonMode}
              className={`px-4 py-2 rounded ${
                comingSoonEnabled 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {comingSoonEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
        
        <div className="flex justify-between">
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Portfolio
          </a>
          <a
            href="/coming-soon"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            View Coming Soon Page
          </a>
        </div>
      </div>
    </div>
  );
} 