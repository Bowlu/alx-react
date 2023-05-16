import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns correct year', () => {
  expect(getFullYear()).toBe(2023);
});

test('returns correct footer', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('checks returned string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});