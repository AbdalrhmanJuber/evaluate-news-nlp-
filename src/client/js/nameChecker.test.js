import { checkForUrl } from '../src/client/js/nameChecker';

describe('Testing the URL validation functionality', () => {
  test('Testing the checkForUrl() function', () => {
    expect(checkForUrl).toBeDefined();
  });

  test('It should return true for a valid URL', () => {
    const url = 'https://www.example.com';
    expect(checkForUrl(url)).toBe(true);
  });

  test('It should return false for an invalid URL', () => {
    const url = 'invalid-url';
    expect(checkForUrl(url)).toBe(false);
  });
});