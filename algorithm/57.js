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
