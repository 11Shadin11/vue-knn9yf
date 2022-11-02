/**
 * Реализовать функцию для проверки на то является ли строка палиндромом
 */

const isPalindrome = (str) => {
  let letters = str.replace(/\s+/g, '').toLowerCase().split('');
  return letters.join('') == letters.reverse().join('');

  // let direct = str.replace(/\s+/g, '').toLowerCase();
  // let reverse = [...direct].reverse().join('');
  // console.log(`Base: ${str} -> '${direct}' == '${reverse}'`);
  // return direct == reverse;
};

console.log('isPalindrome:', isPalindrome('Я ем змея'));
console.log('isPalindrome:', isPalindrome('А роза упала на лапу азора'));
console.log('isPalindrome:', isPalindrome('я не ем змея'));
