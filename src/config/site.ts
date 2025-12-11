export const siteConfig = {
  // Set to true to enable coming soon mode, false to disable it
  // Can be overridden by NEXT_PUBLIC_COMING_SOON_MODE environment variable
  comingSoonMode: process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true',

  // Specific launch date (for display purposes only)
  launchDate: new Date('2025-06-15T00:00:00').getTime(),

  // Site metadata
  name: 'Etoma-etoto Kelvin Odi',
  description:
    'Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.',
  url: 'https://etoma.dev',

  // Social links - update these with your actual social URLs
  socialLinks: {
    twitter: 'https://x.com/kelvin_dart',
    linkedin: 'https://www.linkedin.com/in/etoma-etoto-odi-9ba176251/',
    github: 'https://github.com/Kellytomi',
  },
};
