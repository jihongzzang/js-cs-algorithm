// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript (괄호 회전하기)

function isValidation(arr) {
  let string = arr.join('');
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (stack[stack.length - 1] === '[' && string[i] === ']') {
      stack.pop();
    } else if (stack[stack.length - 1] === '{' && string[i] === '}') {
      stack.pop();
    } else if (stack[stack.length - 1] === '(' && string[i] === ')') {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return stack.length ? false : true;
}

function solution(s) {
  if (s.length % 2 === 1) return 0;

  var answer = 0;

  let arr = s.split('');

  arr.forEach((_, idx) => {
    if (idx !== 0) {
      const shift = arr.shift();
      arr.push(shift);
    }

    if (isValidation(arr)) {
      answer++;
    }
  });

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/87390 (n^2 배열 자르기)

function solution(n, left, right) {
  var answer = [];

  if (n === 1) {
    if (left >= 1) {
      return [];
    }
    return [1];
  }

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(parseInt(i / n), i % n) + 1);
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/131127 (할인 행사)

function solution(want, number, discount) {
  var answer = 0;
  console.log(discount.length);

  for (let i = 0; i < discount.length; i++) {
    let hashmap = new Map();

    want.forEach((ele, idx) => {
      hashmap.set(ele, number[idx]);
    });

    for (let j = i; j < Math.min(i + 10, discount.length); j++) {
      if (hashmap.has(discount[j]) && hashmap.get(discount[j]) !== 0) {
        hashmap.set(discount[j], hashmap.get(discount[j]) - 1);
      }
    }

    let isTarget = true;

    for (let [_, value] of hashmap) {
      if (value) {
        isTarget = false;
      }
    }

    if (isTarget) {
      answer++;
    }
  }
  return answer;
}
