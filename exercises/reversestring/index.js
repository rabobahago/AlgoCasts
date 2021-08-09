// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// first solution
function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

// second solution
// function reverse(str) {
//   let reversed = "";
//   for (const element of str) {
//     reversed = element + reversed;
//   }
//   return reversed;
// }

// third solution
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Four solution
// function reverse(str) {
//   let newArr = [];
//   const array = str.split("");
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i]);
//   }
//   return newArr.join("");
// }

module.exports = reverse;
