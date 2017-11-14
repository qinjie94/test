//递归的思想

const digitToLetter = {
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

const letterCombinations = function(digits) {
  const letters = digits.split('').map(num => {
    return digitToLetter[num].split('');
  });

  function permute(arr) {
    if (!arr.length) return [];

    let result = [];
    const [prefix, ...children] = arr;
    const suffix = permute(children);

    if (!suffix.length) {
      result = prefix;
    }
    else {
      for (let i = 0; i < prefix.length; i++) {
        for (let j = 0; j < suffix.length; j++) {
          result.push(
            prefix[i] + suffix[j]
          );
        }
      }
    }

    return result;
  }

  return permute(letters);
};