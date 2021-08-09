// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//first solution
// function palindrome(str) {
//   reversed = "";
//   for (let item of str) {
//     reversed = item + reversed;
//   }
//   if (str !== reversed) return false;
//   return true;
// }

//second solution
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }
function palindrome(str) {
  return str
    .split("")
    .every((item, index) => item === str[str.length - 1 - index]);
}
module.exports = palindrome;
