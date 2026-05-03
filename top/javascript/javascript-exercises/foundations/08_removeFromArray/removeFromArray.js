const removeFromArray = function(arr, ...rem) {
  return arr.filter(item => !arr.includes(rem));
};

// Do not edit below this line
module.exports = removeFromArray;
