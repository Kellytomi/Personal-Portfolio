import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | My Portfolio',
  description: 'My portfolio is under construction and will be launched soon.',
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
} 