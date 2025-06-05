import { render, screen } from '@testing-library/react';
import ServicesSection from '../ServicesSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />);
    expect(screen.getByText('What I Love Building')).toBeInTheDocument();
  });

  it('renders the My Skills badge', () => {
    render(<ServicesSection />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Websites & Apps')).toBeInTheDocument();
    expect(screen.getByText('Mobile Experiences')).toBeInTheDocument();
    expect(screen.getByText('Smart Automation')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesSection />);
    expect(
      screen.getByText(/I create engaging websites and web apps that are not only beautiful/)
    ).toBeInTheDocument();
    expect(screen.getByText(/I build mobile apps that people actually want to use/)).toBeInTheDocument();
    expect(
      screen.getByText(/I love making computers do boring stuff so humans don't have to/)
    ).toBeInTheDocument();
  });

  it('renders service links', () => {
    render(<ServicesSection />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', '/skills#web-development');
    expect(links[1]).toHaveAttribute('href', '/skills#mobile-development');
    expect(links[2]).toHaveAttribute('href', '/skills#automation-and-integration');
  });

  it('renders service icons', () => {
    render(<ServicesSection />);
    expect(screen.getByText('🌐')).toBeInTheDocument();
    expect(screen.getByText('📱')).toBeInTheDocument();
    expect(screen.getByText('⚡')).toBeInTheDocument();
  });

  it('renders check it out text for each service', () => {
    render(<ServicesSection />);
    const checkItOutTexts = screen.getAllByText('Check it out');
    expect(checkItOutTexts).toHaveLength(3);
  });
}); 