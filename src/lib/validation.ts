/**
 * Input validation utilities
 * Following cursor rule #16: Validate all user inputs
 */

import DOMPurify from 'isomorphic-dompurify';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue?: string;
}

/**
 * Validates and sanitizes email addresses
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim().toLowerCase();

  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  if (trimmedEmail.length > 254) {
    return { isValid: false, error: 'Email address is too long' };
  }

  return { isValid: true, sanitizedValue: trimmedEmail };
}

/**
 * Validates and sanitizes text input (for names, messages, etc.)
 */
export function validateText(
  text: string,
  options: {
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    fieldName?: string;
  } = {}
): ValidationResult {
  const { minLength = 0, maxLength = 1000, required = true, fieldName = 'Field' } = options;

  if (!text || typeof text !== 'string') {
    if (required) {
      return { isValid: false, error: `${fieldName} is required` };
    }
    return { isValid: true, sanitizedValue: '' };
  }

  // Sanitize HTML to prevent XSS
  const sanitized = DOMPurify.sanitize(text.trim());

  if (required && sanitized.length === 0) {
    return { isValid: false, error: `${fieldName} cannot be empty` };
  }

  if (sanitized.length < minLength) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${minLength} characters long`,
    };
  }

  if (sanitized.length > maxLength) {
    return {
      isValid: false,
      error: `${fieldName} cannot exceed ${maxLength} characters`,
    };
  }

  return { isValid: true, sanitizedValue: sanitized };
}

/**
 * Validates phone numbers (basic validation)
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  // Keep original formatting but ensure it's safe
  const sanitized = DOMPurify.sanitize(phone.trim());

  return { isValid: true, sanitizedValue: sanitized };
}

/**
 * Rate limiting helper for form submissions
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) {
    // Default: 5 attempts per 15 minutes
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  /**
   * Check if an identifier (e.g., IP address, email) is rate limited
   */
  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];

    // Remove old attempts outside the window
    const recentAttempts = attempts.filter((timestamp) => now - timestamp < this.windowMs);

    // Update the attempts array
    this.attempts.set(identifier, recentAttempts);

    return recentAttempts.length >= this.maxAttempts;
  }

  /**
   * Record an attempt for an identifier
   */
  recordAttempt(identifier: string): void {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];

    attempts.push(now);
    this.attempts.set(identifier, attempts);
  }

  /**
   * Clear attempts for an identifier (e.g., after successful submission)
   */
  clearAttempts(identifier: string): void {
    this.attempts.delete(identifier);
  }
}
