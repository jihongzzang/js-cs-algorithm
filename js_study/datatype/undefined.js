var a;
console.log(a); // undefined

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // undefined
console.log(b); // RefErr : b is not defined

var funC = function () {};
var c = funC(); // 반환 값이 없으면 undefined를 반환하는 것으로 간주
console.log(c); // undefined

var arr1 = [];
arr1.length = 3;
console.log(arr); //[empty x 3]

var arr2 = new Array(3);
console.log(arr2); //[empty x 3]

var arr3 = [undefined, undefined, undefined];
console.log(arr3); //[ undefined, undefined, undefined ]

var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {
  console.log(v, i);
}); //undefined 0 / 1 1

arr2.forEach(function (v, i) {
  console.log(v, i);
}); //11

arr1.map(function (v, i) {
  return v + i;
}); //[NaN , 2]

arr2.map(function (v, i) {
  return v + i;
}); //[empty , 2]

arr1.filter(function (v) {
  return !v;
}); //[undefined]

arr2.filter(function (v) {
  return !v;
}); //[]

arr1.reduce(function (p, c, i) {
  return p + c + i;
}, ''); // undefined011

arr2.reduce(function (p, c, i) {
  return p + c + i;
}, ''); // 11

var n = null;
console.log(typeof n); // object

console.log(n == undefined); //true
console.log(n == null); //true

console.log(n === undefined); //false
console.log(n === null); //false
