module.exports = function check(str, bracketsConfig) {
  const bracketsPairs = bracketsConfig.map((item) => item.join(''));
  let result = str;

  while (result.length > 0) {
    const newStr = bracketsPairs.reduce((acc, brackets) => {
      return acc.replace(brackets, '');
    }, result);

    if (newStr === result) {
      return false;
    }

    result = newStr;
  }
  return true;
};
