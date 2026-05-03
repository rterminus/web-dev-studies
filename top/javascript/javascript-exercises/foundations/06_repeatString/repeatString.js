const repeatString = function(str, rep) {
  if (rep <= 0) return 'ERROR';

  let strOutput = "";
  for (let i = 0; i < rep; i++) {
    strOutput = strOutput + str;
  }

  return strOutput;
};

// Do not edit below this line
module.exports = repeatString;
