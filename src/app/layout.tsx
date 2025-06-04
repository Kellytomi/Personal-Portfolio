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
    apple: '/favicon-192x192.png',
    shortcut: '/favicon-32x32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Etoma-etoto Kelvin Odi | Fullstack Developer & Workflow Automation Specialist',
    description: 'Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.',
    images: [{ 
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Etoma-etoto Kelvin Odi - Fullstack Developer Portfolio'
    }],
    url: 'https://etoma.dev'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etoma-etoto Kelvin Odi | Fullstack Developer',
    description: 'Professional portfolio of Etoma-etoto Kelvin Odi, a specialist in web development and workflow automation',
    images: ['/og-image.png'],
  },
  other: {
    'x-font-options': 'no-substitute'
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
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
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
