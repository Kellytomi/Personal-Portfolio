import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Expertise',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
