// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// first solution
// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let charMax = "";
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       charMax = char;
//     }
//   }
//   return charMax;
// }
//Second Solution
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let character = "";
  str.split("");
  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]] = 1;
    }
    charMap[str[i]] = charMap[str[i]] + 1;
  }
  for (let elem of Object.keys(charMap)) {
    if (charMap[elem] > max) {
      max = charMap[elem];
      character = elem;
    }
  }
  return character;
}
module.exports = maxChar;
