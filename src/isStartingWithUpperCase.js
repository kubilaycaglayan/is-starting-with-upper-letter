// 3. Please write a production-ready JavaScript function that determines if a string starts with an upper-case letter A-Z.*
const inputValidation = input => {
  if(typeof input === 'undefined') return false;
  if(typeof input === 'boolean') return false;
  if(typeof input === 'number') return false;
  if(typeof input === 'bigint') return false;
  if(typeof input === 'symbol') return false;
  if(typeof input === 'object') return false;
  if(typeof input === 'function') return false;
  if(input.length === 0) return false;
  if(typeof input === 'string') return true;
}

const isStartWithUpper = (string = '') => {
  if(inputValidation(string)) {
    const firstLetterCharCode = string.charCodeAt(0);
    if(firstLetterCharCode < 65 || firstLetterCharCode > 90) return false;
    if(firstLetterCharCode >= 65 && firstLetterCharCode <= 90) return true;
  } else {
    return false;
  }
};

module.exports = isStartWithUpper;
