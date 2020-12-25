const isStartWithUpper = require('../src/isStartingWithUpperCase');

describe('isStartWithUpper', () => {
  describe('returns true if the first letter of the string is uppercase', () => {
    test('single length', () => {
      for(let i = 65; i < 91; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).toBe(true);
      }
    })

    test('single length - falsy', () => {
      for(let i = 65; i < 91; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).not.toBe(false);
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

    test('various lengths - falsy', () => {
      for(let i = 65; i < 91; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        const charCode = 65 + Math.floor(Math.random() * 58);
        const continuations = `${String.fromCharCode(charCode).repeat(Math.ceil(Math.random() * 100))}`;
        const string = `${upperCaseLetter}${continuations}`
        expect(isStartWithUpper(string)).not.toBe(false);
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

    test('single length - before 65 - falsy', () => {
      for(let i = 0; i < 65; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).not.toBe(true);
      }
    })

    test('single length - after 91', () => {
      for(let i = 91; i < 65535; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).toBe(false);
      }
    })

    test('single length - after 91 - falsy', () => {
      for(let i = 91; i < 65535; i += 1) {
        const upperCaseLetter = String.fromCharCode(i);
        expect(isStartWithUpper(upperCaseLetter)).not.toBe(true);
      }
    })
  })

  describe('edge cases', () => {
    test('empty string argument returns false', () => {
      expect(isStartWithUpper('')).toBe(false);
    })

    test('empty string argument returns false - falsy', () => {
      expect(isStartWithUpper('')).not.toBe(true);
    })

    test('no argument returns false', () => {
      expect(isStartWithUpper()).toBe(false);
    })

    test('no argument returns false - falsy', () => {
      expect(isStartWithUpper()).not.toBe(true);
    })

    describe('input validation', () => {
      test('pass an object returns false', () => {
        expect(isStartWithUpper({})).toBe(false);
      })

      test('pass an object returns false - falsy', () => {
        expect(isStartWithUpper({})).not.toBe(true);
      })

      test('pass an array returns false', () => {
        expect(isStartWithUpper([])).toBe(false);
      })

      test('pass an array returns false - falsy', () => {
        expect(isStartWithUpper([])).not.toBe(true);
      })

      test('pass undefined returns false', () => {
        expect(isStartWithUpper(undefined)).toBe(false);
      })

      test('pass undefined returns false - falsy', () => {
        expect(isStartWithUpper(undefined)).not.toBe(true);
      })

      test('pass null returns false', () => {
        expect(isStartWithUpper(null)).toBe(false);
      })

      test('pass null returns false - falsy', () => {
        expect(isStartWithUpper(null)).not.toBe(true);
      })

      test('pass boolean returns false', () => {
        expect(isStartWithUpper(false)).toBe(false);
      })

      test('pass boolean returns false - falsy', () => {
        expect(isStartWithUpper(false)).not.toBe(true);
      })

      test('pass number returns false', () => {
        expect(isStartWithUpper(123)).toBe(false);
      })

      test('pass number returns false - falsy', () => {
        expect(isStartWithUpper(123)).not.toBe(true);
      })

      test('pass function returns false', () => {
        expect(isStartWithUpper(function fName() {})).toBe(false);
      })

      test('pass function returns false - falsy', () => {
        expect(isStartWithUpper(function fName() {})).not.toBe(true);
      })

      test('pass symbol returns false', () => {
        expect(isStartWithUpper(Symbol('sym'))).toBe(false);
      })

      test('pass symbol returns false - falsy', () => {
        expect(isStartWithUpper(Symbol('sym'))).not.toBe(true);
      })

    })
  })

  describe('real world examples', () => {
    test('Help Scout', () => {
      expect(isStartWithUpper('Help Scout')).toBe(true)
    })

    test('Help Scout - falsy', () => {
      expect(isStartWithUpper('Help Scout')).not.toBe(false)
    })

    test('HelpScout', () => {
      expect(isStartWithUpper('HelpScout')).toBe(true)
    })

    test('HelpScout - falsy', () => {
      expect(isStartWithUpper('HelpScout')).not.toBe(false)
    })

    test('Scout', () => {
      expect(isStartWithUpper('Scout')).toBe(true)
    })

    test('Scout - falsy', () => {
      expect(isStartWithUpper('Scout')).not.toBe(false)
    })

    test('help scout', () => {
      expect(isStartWithUpper('help scout')).toBe(false)
    })

    test('help scout - falsy', () => {
      expect(isStartWithUpper('help scout')).not.toBe(true)
    })

    test('scout', () => {
      expect(isStartWithUpper('scout')).toBe(false)
    })

    test('scout - falsy', () => {
      expect(isStartWithUpper('scout')).not.toBe(true)
    })

  })
});