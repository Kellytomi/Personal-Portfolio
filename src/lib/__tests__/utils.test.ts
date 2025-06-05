import { cn } from '../utils';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('text-base', 'text-lg');
    expect(result).toBe('text-lg');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class active-class');
  });

  it('removes duplicate classes', () => {
    const result = cn('px-4 py-2', 'px-6 py-2');
    expect(result).toBe('px-6 py-2');
  });

  it('handles empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('filters out falsy values', () => {
    const result = cn('valid-class', false, null, undefined, 'another-class');
    expect(result).toBe('valid-class another-class');
  });

  it('works with arrays', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });
});
