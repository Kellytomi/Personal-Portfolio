import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientOnly from "@/components/ClientOnly";
import CommandPalette from "@/components/CommandPalette";

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

export const metadata: Metadata = {
  title: "Etoma-Etoto Kelvin Odi | Full-Stack Developer & Workflow Automation Specialist",
  description: "Professional portfolio of Etoma-Etoto Kelvin Odi, specializing in full-stack development, workflow automation, and digital solutions.",
  other: {
    'x-font-options': 'no-substitute'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`} style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
      <head>
        <meta name="x-font-options" content="no-substitute" />
      </head>
      <body className="bg-surface text-text" style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
        <ClientOnly>
          <CustomCursor />
          <CommandPalette />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
