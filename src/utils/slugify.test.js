// src/utils/slugify.test.js
import slugify from './slugify';

test('slugify converts spaces to hyphens and lowercases', () => {
  expect(slugify('Redbank Plains')).toBe('redbank-plains');
});

test('slugify removes special characters', () => {
  expect(slugify('Springfield Lakes!')).toBe('springfield-lakes');
});