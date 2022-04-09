const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

function callback1(element) {
  console.log(element);
  if (element.length > 6) return true;
  return false;
}

function callback2(element) {
  return element.length > 6;
}

const newWords = words.filter(callback2);

const newWords2 = words.filter(function (ele) {
  return ele.length > 6;
});

const newWords3 = words.filter(ele => {
  return ele.length > 6;
});

const newWords4 = words.filter(ele => ele.length > 6);

function myFilter(origin, callback) {
  let result = [];
  for (let i = 0; i < origin.length; i++) {
    let current = origin[i];
    if (callback(current)) result.push(current);
  }
  return result;
}

const newWords5 = myFilter(words, element => element.length > 6);

console.log(newWords5);
