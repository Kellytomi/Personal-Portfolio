'use client';
import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 text-center font-bold mb-6">
          Something Amazing is Coming
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto my-6 text-lg text-center relative z-10 leading-relaxed">
          We're crafting an incredible digital experience just for you. Join our waitlist to be the
          first to know when we launch and get exclusive early access.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full relative z-10 px-4 py-3 bg-white/80 backdrop-blur-sm placeholder:text-gray-500 text-gray-900"
          />
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors relative z-10 whitespace-nowrap">
            Join Waitlist
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
