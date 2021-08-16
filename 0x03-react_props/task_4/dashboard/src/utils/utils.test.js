import {expect, jest, test} from '@jest/globals';
import { getFooterCopy, getFullYear, getLatestNotification } from "./utils"

test('getFullYear should return 2021', () => {
  expect(getFullYear()).toBe(2021)
});

test('getFooterCopy should return correct t or f', () => {
  expect(getFooterCopy(true)).toBe('Holberton School')
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('getLatestNotification should return correct string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});