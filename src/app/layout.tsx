import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientOnly from "@/components/ClientOnly";
import CommandPalette from "@/components/CommandPalette";
import { CookiesProvider } from "next-client-cookies/server";
import LaunchWrapper from "@/components/LaunchWrapper";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
  adjustFontFallback: true,
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
  adjustFontFallback: true,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Etoma-etoto Kelvin Odi',
    default: 'Etoma-etoto Kelvin Odi | Fullstack Developer & Workflow Automation Specialist'
  },
  description: "Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'),
  keywords: [
    'web development', 
    'workflow automation', 
    'process optimization', 
    'fullstack developer', 
    'integration specialist',
    'etoma',
    'etoma kelvin',
    'etoma-etoto kelvin odi',
    'kelvin odi',
    'Next.js',
    'React',
    'JavaScript',
    'Zapier',
    'Make.com',
    'airtable'
  ],
  authors: [{ name: 'Etoma-etoto Kelvin Odi' }],
  creator: 'Etoma-etoto Kelvin Odi',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-48x48.png', sizes: '48x48' },
      { url: '/favicon-64x64.png', sizes: '64x64' },
      { url: '/favicon-192x192.png', sizes: '192x192' },
      { url: '/favicon-512x512.png', sizes: '512x512' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Etoma-etoto Kelvin Odi Portfolio',
    title: 'Etoma-etoto Kelvin Odi | Fullstack Developer & Workflow Automation Specialist',
    description: 'Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.',
    images: [{ 
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'}/og-image.png?v=2024`,
      width: 1200,
      height: 1200,
      alt: 'Etoma-etoto Kelvin Odi - Fullstack Developer Portfolio',
      type: 'image/png'
    }],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@etoma',
    creator: '@etoma',
    title: 'Etoma-etoto Kelvin Odi | Fullstack Developer',
    description: 'Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development and workflow automation',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'}/og-image.png?v=2024`],
  },
  other: {
    'x-font-options': 'no-substitute',
    'theme-color': '#3151B5'
  }
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" 
          as="style" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-64x64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Enhanced OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Etoma-etoto Kelvin Odi Portfolio" />
        <meta property="og:title" content="Etoma-etoto Kelvin Odi | Fullstack Developer & Workflow Automation Specialist" />
        <meta property="og:description" content="Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development, workflow automation, and business process optimization." />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'}/og-image.png?v=2024`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Etoma-etoto Kelvin Odi - Fullstack Developer Portfolio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@etoma" />
        <meta name="twitter:creator" content="@etoma" />
        <meta name="twitter:title" content="Etoma-etoto Kelvin Odi | Fullstack Developer" />
        <meta name="twitter:description" content="Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development and workflow automation" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev'}/og-image.png?v=2024`} />
        
        <meta name="theme-color" content="#3151B5" />
      </head>
      <body className={`bg-surface text-text loaded ${jakarta.className}`}>
        <CookiesProvider>
          <ClientOnly>
            <CustomCursor />
          </ClientOnly>
          <LaunchWrapper>
            <ClientOnly>
              <CommandPalette />
            </ClientOnly>
            {children}
          </LaunchWrapper>
        </CookiesProvider>
      </body>
    </html>
  );
}
