import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
