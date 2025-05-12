export const siteConfig = {
  // Set to true to enable coming soon mode, false to disable it
  comingSoonMode: process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true' || false,
  
  // Launch date from environment variable or fallback to default
  launchDate: (() => {
    // Try to get the date from environment variable
    const envDate = process.env.NEXT_PUBLIC_LAUNCH_DATE;
    if (envDate) {
      return new Date(envDate).getTime();
    }
    // Fallback to default date
    return new Date('2025-05-31T00:00:00').getTime();
  })(),
  
  // Site metadata
  name: 'My Portfolio',
  description: 'My professional portfolio showcasing my skills and projects',
  
  // Social links - update these with your actual social URLs
  socialLinks: {
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  }
}; 