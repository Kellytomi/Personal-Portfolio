import { render, screen } from '@testing-library/react';
import PersonalStorySection from '../PersonalStorySection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock next/dynamic to avoid lazy loading complexity in tests
jest.mock('next/dynamic', () => {
  return () => {
    const MockComponent = () => <div data-testid="background-gradient" />;
    return MockComponent;
  };
});

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('PersonalStorySection', () => {
  it('renders the section heading', () => {
    render(<PersonalStorySection />);
    expect(screen.getByText('A bit about me')).toBeInTheDocument();
  });

  it('renders the My Story badge', () => {
    render(<PersonalStorySection />);
    expect(screen.getByText('My Story')).toBeInTheDocument();
  });

  it('renders the More about me link', () => {
    render(<PersonalStorySection />);
    const link = screen.getByRole('link', { name: 'More about me' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders the profile image', () => {
    render(<PersonalStorySection />);
    const image = screen.getByAltText('Kelvin coding');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile-casual-2.jpg');
  });

  it('has proper section structure', () => {
    const { container } = render(<PersonalStorySection />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-20', 'relative', 'bg-white');
  });
}); 