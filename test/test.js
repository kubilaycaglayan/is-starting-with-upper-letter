const isStartWithUpper = require('../src/isStartingWithUpperCase');

describe('isStartWithUpper', () => {
  describe('returns true if the first letter of the string is uppercase', () => {
    test('single length', () => {
      for(let i = 65; i < 91; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).toBe(true);
      }
    })

    test('various lengths', () => {
      for(let i = 65; i < 91; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        const charCode = 65 + Math.floor(Math.random() * 58);
        const continuations = `${String.fromCharCode(charCode).repeat(Math.ceil(Math.random() * 100))}`;
        const string = `${upperCaseLetter}${continuations}`
        expect(isStartWithUpper(string)).toBe(true);
      }
    })
  })

  describe('returns false if the first letter of the string is downcase', () => {
    test('single length - before 65', () => {
      for(let i = 0; i < 65; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).toBe(false);
      }
    })

    test('single length - after 91', () => {
      for(let i = 91; i < 65535; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).toBe(false);
      }
    })
  })

  describe('edge cases', () => {
    test('empty string argument returns false', () => {
      expect(isStartWithUpper('')).toBe(false);
    })

    test('no argument returns false', () => {
      expect(isStartWithUpper()).toBe(false);
    })
  })
});