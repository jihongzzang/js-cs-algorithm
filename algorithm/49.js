// https://school.programmers.co.kr/learn/courses/30/lessons/12949 (행렬의 곱셈)

function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    let arr = a[i];

    answer.push([]);

    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < b.length; k++) {
        sum += arr[k] * b[k][j];
      }

      answer[i].push(sum);
    }
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12953 (n개의 최소공배수)

function gcd(a, b) {
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let c;

  while (x % y !== 0) {
    c = x % y;
    x = y;
    y = c;
  }

  return y;
}

function solution(arr) {
  var answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let gcdVal = gcd(answer, arr[i]);
    answer = (answer * arr[i]) / gcdVal;
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12951 (JadenCase 문자열 만들기)

function solution(s) {
  var answer = '';
  const arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
  }

  answer = arr.join(' ');

  return answer;
}
