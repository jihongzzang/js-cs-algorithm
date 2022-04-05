console.log(sum(1, 2)); //3
console.log(multiply(3, 4)); //multiply is not a function

function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
};

console.log('==================================================');

var sum = function sum(a, b) {
  return a + b;
};

var multiply;

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) {
  return a * b;
};
