function makeStr(arr) {
  const regExp = /^[a-zA-Z]*$/gi;
  let a = [];
  let c = [];
  for (let i = 0; i < arr.length - 1; i++) {
    a.push(arr.substring(i, i + 2));
  }
  for (let v of a) {
    if (v.match(regExp)) {
      c.push(v.toLowerCase());
    }
  }
  return c;
}

function solution(str1, str2) {
  let strC = makeStr(str1);
  let strD = makeStr(str2);

  if (strD.length === 0 && strC.length === 0) {
    return 65536;
  }

  let result = strC
    .map(ele => {
      if (strD.includes(ele)) {
        delete strD[strD.indexOf(ele)];
        return ele;
      } else {
        return null;
      }
    })
    .filter(ele => ele !== null);

  return Math.floor(
    (result.length / (strC.length + strD.length - result.length)) * 65536
  );
}
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/17677

function isPrimeNum(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPermutation(arr, fixed, answer) {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i];
      const copyArr = arr.slice();
      copyArr.splice(i, 1);

      if (!answer.has(parseInt(newFixed)) && isPrimeNum(parseInt(newFixed))) {
        answer.add(parseInt(newFixed));
      }
      getPermutation(copyArr, newFixed, answer);
    }
  }
}

function solution(numbers) {
  const arr = numbers.split('');
  const mySet = new Set();
  getPermutation(arr, '', mySet);
  return mySet.size;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(s) {
  let a = s.replace(/\{/g, '[');
  let b = a.replace(/\}/g, ']');
  let c = b.split(/\[|\]/);

  let d = c.filter(ele => {
    return ele !== '' && ele !== ',';
  });

  let e = [];
  let answer = [];

  for (let i = 0; i < d.length; i++) {
    e.push(d[i].split(','));
  }

  e.sort((a, b) => a.length - b.length);

  answer.push(Number(e[0][0]));

  for (let i = 1; i < e.length; i++) {
    for (let j = 0; j < e[i].length; j++) {
      if (!answer.includes(Number(e[i][j]))) {
        answer.push(Number(e[i][j]));
      }
    }
  }

  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/64065
