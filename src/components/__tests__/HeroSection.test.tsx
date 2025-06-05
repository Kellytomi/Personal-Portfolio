import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock the FlipWords component since it's a complex animation component
jest.mock('../ui/flip-words', () => ({
  FlipWords: ({ words }: { words: string[] }) => <span data-testid="flip-words">{words[0]}</span>,
}));

// Mock AnimatedTooltipDemo component
jest.mock('../AnimatedTooltipDemo', () => ({
  __esModule: true,
  default: () => <div data-testid="animated-tooltip">Trusted by amazing people</div>,
}));

describe('HeroSection', () => {
  it('renders hero content correctly', () => {
    render(<HeroSection isLoading={false} />);

    // Check for main heading text
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText((content, node) => {
        return node?.textContent === 'I build awesome digital stuff that people love';
      })
    ).toBeInTheDocument();
    expect(screen.getByText('awesome digital stuff')).toBeInTheDocument();

    // Check for status indicator
    expect(screen.getByText('Open to new projects')).toBeInTheDocument();

    // Check for call-to-action buttons
    expect(screen.getByRole('link', { name: /get to know me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see my work/i })).toBeInTheDocument();
  });

  it('shows loading state correctly', () => {
    render(<HeroSection isLoading={true} />);

    // The component should still render but with loading styles
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<HeroSection isLoading={false} />);

    const aboutLink = screen.getByRole('link', { name: /get to know me/i });
    const projectsLink = screen.getByRole('link', { name: /see my work/i });

    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });

  it('displays personal introduction', () => {
    render(<HeroSection isLoading={false} />);

    expect(screen.getByText(/Hey there, I'm Etoma-etoto \(Kelvin\) Odi/)).toBeInTheDocument();
    expect(screen.getByText(/When I'm not coding/)).toBeInTheDocument();
  });

  it('includes fun fact section', () => {
    render(<HeroSection isLoading={false} />);

    expect(screen.getByText('Fun fact')).toBeInTheDocument();
    expect(screen.getByText(/48 hours straight/)).toBeInTheDocument();
  });
});
