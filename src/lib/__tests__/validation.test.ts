import { validateEmail, validateText, validatePhone, RateLimiter } from '../validation';

describe('validateEmail', () => {
  it('accepts valid email addresses', () => {
    const validEmails = [
      'test@example.com',
      'user123@gmail.com',
      'firstname.lastname@company.co.uk',
      'email+tag@domain.com',
    ];

    validEmails.forEach((email) => {
      const result = validateEmail(email);
      expect(result.isValid).toBe(true);
      expect(result.sanitizedValue).toBe(email.toLowerCase());
    });
  });

  it('rejects invalid email addresses', () => {
    const invalidEmails = ['notanemail', '@domain.com', 'user@', 'user name@domain.com'];

    invalidEmails.forEach((email) => {
      const result = validateEmail(email);
      expect(result.isValid).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  it('handles empty or null inputs', () => {
    expect(validateEmail('').isValid).toBe(false);
    expect(validateEmail(null as any).isValid).toBe(false);
    expect(validateEmail(undefined as any).isValid).toBe(false);
  });

  it('rejects emails that are too long', () => {
    const longEmail = 'a'.repeat(250) + '@example.com';
    const result = validateEmail(longEmail);
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('too long');
  });
});

describe('validateText', () => {
  it('validates required text correctly', () => {
    const result = validateText('Hello World');
    expect(result.isValid).toBe(true);
    expect(result.sanitizedValue).toBe('Hello World');
  });

  it('rejects empty required text', () => {
    const result = validateText('', { required: true, fieldName: 'Name' });
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('Name is required');
  });

  it('allows empty optional text', () => {
    const result = validateText('', { required: false });
    expect(result.isValid).toBe(true);
    expect(result.sanitizedValue).toBe('');
  });

  it('enforces minimum length', () => {
    const result = validateText('Hi', { minLength: 5, fieldName: 'Message' });
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('at least 5 characters');
  });

  it('enforces maximum length', () => {
    const longText = 'a'.repeat(101);
    const result = validateText(longText, { maxLength: 100, fieldName: 'Bio' });
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('cannot exceed 100 characters');
  });

  it('sanitizes HTML content', () => {
    const htmlInput = '<script>alert("xss")</script>Hello';
    const result = validateText(htmlInput);
    expect(result.isValid).toBe(true);
    expect(result.sanitizedValue).not.toContain('<script>');
    expect(result.sanitizedValue).toContain('Hello');
  });
});

describe('validatePhone', () => {
  it('accepts valid phone numbers', () => {
    const validPhones = ['1234567890', '(123) 456-7890', '+1 (123) 456-7890', '123-456-7890'];

    validPhones.forEach((phone) => {
      const result = validatePhone(phone);
      expect(result.isValid).toBe(true);
    });
  });

  it('rejects invalid phone numbers', () => {
    const invalidPhones = ['123', '12345678901234567', 'not-a-phone'];

    invalidPhones.forEach((phone) => {
      const result = validatePhone(phone);
      expect(result.isValid).toBe(false);
    });
  });

  it('handles empty inputs', () => {
    expect(validatePhone('').isValid).toBe(false);
    expect(validatePhone(null as any).isValid).toBe(false);
  });
});

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    rateLimiter = new RateLimiter(3, 1000); // 3 attempts per 1 second for testing
  });

  it('allows requests under the limit', () => {
    expect(rateLimiter.isRateLimited('user1')).toBe(false);
    rateLimiter.recordAttempt('user1');
    expect(rateLimiter.isRateLimited('user1')).toBe(false);
  });

  it('blocks requests over the limit', () => {
    // Make 3 attempts (the limit)
    for (let i = 0; i < 3; i++) {
      rateLimiter.recordAttempt('user1');
    }

    // 4th attempt should be blocked
    expect(rateLimiter.isRateLimited('user1')).toBe(true);
  });

  it('clears attempts when requested', () => {
    // Make 3 attempts
    for (let i = 0; i < 3; i++) {
      rateLimiter.recordAttempt('user1');
    }

    expect(rateLimiter.isRateLimited('user1')).toBe(true);

    // Clear attempts
    rateLimiter.clearAttempts('user1');
    expect(rateLimiter.isRateLimited('user1')).toBe(false);
  });

  it('handles different users independently', () => {
    // User1 makes 3 attempts
    for (let i = 0; i < 3; i++) {
      rateLimiter.recordAttempt('user1');
    }

    // User1 should be blocked, but user2 should not
    expect(rateLimiter.isRateLimited('user1')).toBe(true);
    expect(rateLimiter.isRateLimited('user2')).toBe(false);
  });
});
