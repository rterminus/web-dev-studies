const sumAll = function(init, end) {
  if (end < init) {
    let aux = end;
    end = init;
    init = aux;
  }

  let sum = 0;
  for (let i = init; i <= end; ++i) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
