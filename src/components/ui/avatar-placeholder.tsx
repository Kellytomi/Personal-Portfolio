import React from 'react';

interface AvatarPlaceholderProps {
  gender: 'male' | 'female';
  name: string;
  className?: string;
}

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ 
  gender, 
  name, 
  className = "" 
}) => {
  const maleAvatar = (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      {/* Background circle - white to stand out against card background */}
      <circle cx="50" cy="50" r="50" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
      
      {/* Face circle */}
      <circle cx="50" cy="35" r="15" fill="#f8f9fa" />
      
      {/* Body/shoulders */}
      <ellipse cx="50" cy="75" rx="25" ry="20" fill="#f8f9fa" />
      
      {/* Hair */}
      <path 
        d="M35 25 Q50 15 65 25 L65 35 Q50 20 35 35 Z" 
        fill="#2d3748" 
      />
      
      {/* Simple facial features */}
      <circle cx="45" cy="32" r="1.5" fill="#2d3748" />
      <circle cx="55" cy="32" r="1.5" fill="#2d3748" />
      <path d="M47 38 Q50 40 53 38" stroke="#2d3748" strokeWidth="1" fill="none" />
    </svg>
  );

  const femaleAvatar = (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      {/* Background circle - white to stand out against card background */}
      <circle cx="50" cy="50" r="50" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
      
      {/* Face circle */}
      <circle cx="50" cy="35" r="15" fill="#f8f9fa" />
      
      {/* Body/shoulders */}
      <ellipse cx="50" cy="75" rx="25" ry="20" fill="#f8f9fa" />
      
      {/* Hair - longer style */}
      <path 
        d="M30 25 Q50 10 70 25 L70 45 Q50 25 30 45 Z" 
        fill="#8b4513" 
      />
      
      {/* Simple facial features */}
      <circle cx="45" cy="32" r="1.5" fill="#2d3748" />
      <circle cx="55" cy="32" r="1.5" fill="#2d3748" />
      <path d="M47 38 Q50 40 53 38" stroke="#2d3748" strokeWidth="1" fill="none" />
      
      {/* Earrings */}
      <circle cx="38" cy="35" r="1" fill="#ffd700" />
      <circle cx="62" cy="35" r="1" fill="#ffd700" />
    </svg>
  );

  return (
    <div className="relative w-full h-full">
      {gender === 'male' ? maleAvatar : femaleAvatar}
    </div>
  );
};

// Helper function to determine gender based on name
export const getGenderFromName = (name: string): 'male' | 'female' => {
  const femaleNames = ['sarah', 'emily', 'lisa', 'jessica', 'amanda', 'jennifer', 'michelle', 'nicole', 'stephanie', 'rebecca'];
  const firstName = name.toLowerCase().split(' ')[0];
  return femaleNames.includes(firstName) ? 'female' : 'male';
}; 