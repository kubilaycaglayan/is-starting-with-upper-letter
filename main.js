// 3. Please write a production-ready JavaScript function that determines if a string starts with an upper-case letter A-Z.*

const isStartWithUpper = (string = '') => {
  if(string.length === 0) return false;

  const firstLetterCharCode = string.charCodeAt(0);
  if(firstLetterCharCode < 65 || firstLetterCharCode > 90) return false;

  if(firstLetterCharCode >= 65 && firstLetterCharCode <= 90) return true;
}

module.exports = isStartWithUpper;
