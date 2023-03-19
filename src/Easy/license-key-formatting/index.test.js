import { licenseKeyFormatting } from '.';

it('Example case 1', () => {
  const s = '5F3Z-2e-9-w',
    k = 4;
  const output = '5F3Z-2E9W';
  expect(licenseKeyFormatting(s, k)).toBe(output);
});

it('Example case 2', () => {
  const s = '2-5g-3-J',
    k = 2;
  const output = '2-5G-3J';
  expect(licenseKeyFormatting(s, k)).toBe(output);
});

it('Test case 13', () => {
  const s = '2-4A0r7-4k',
    k = 4;
  const output = '24A0-R74K';
  expect(licenseKeyFormatting(s, k)).toBe(output);
});
