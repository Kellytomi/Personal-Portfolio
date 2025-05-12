import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientOnly from "@/components/ClientOnly";
import CommandPalette from "@/components/CommandPalette";
import { CookiesProvider } from "next-client-cookies/server";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Kelvin Odi | Fullstack Developer & Workflow Automation Specialist",
  description: "Professional portfolio of Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.",
  keywords: [
    'web development', 
    'workflow automation', 
    'process optimization', 
    'fullstack developer', 
    'integration specialist',
    'Next.js',
    'React',
    'JavaScript',
    'Zapier',
    'Make.com',
    'airtable'
  ],
  authors: [{ name: 'Kelvin Odi' }],
  creator: 'Kelvin Odi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kelvin Odi | Fullstack Developer & Workflow Automation Specialist',
    description: 'Professional portfolio of Kelvin Odi, a specialist in web development, workflow automation, and business process optimization.',
    images: [{ url: '/og-image.jpg' }],
  },
  other: {
    'x-font-options': 'no-substitute'
  }
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`} style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
      <head>
        <meta name="x-font-options" content="no-substitute" />
      </head>
      <body className="bg-surface text-text loaded" style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
        <CookiesProvider>
          <ClientOnly>
            <CustomCursor />
            <CommandPalette />
          </ClientOnly>
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
}
