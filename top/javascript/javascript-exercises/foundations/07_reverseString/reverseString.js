const reverseString = function(str) {
  let strOutput = "";
  for (let i = str.length - 1; i > 0; ++i) {
    strOutput = strOutput + str[i];
  }

  return strOutput;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
