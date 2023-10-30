// https://school.programmers.co.kr/learn/courses/30/lessons/12981 (영어 끝말잇기)

function solution(n, words) {
  var answer = [0, 0];

  const arr = new Array(words.length).fill(0).map((_, idx) => {
    const people = (idx + 1) % n === 0 ? n : (idx + 1) % n;

    return [people, 0];
  });

  let set = new Set();

  let count = 0;
  let excutedOrder = 1;

  for (let i = 0; i < words.length; i++) {
    if (count < n) {
      count++;
    } else {
      count = 1;
      excutedOrder++;
    }

    if (words[i] && words[i - 1]) {
      const prev = words[i - 1];
      const curr = words[i];

      const prevLast = prev[prev.length - 1];

      const currFirst = curr[0];

      if (prevLast !== currFirst) {
        arr[i][1] = excutedOrder;
        return arr[i];
      }
    }

    if (set.has(words[i])) {
      arr[i][1] = excutedOrder;
      return arr[i];
    } else {
      set.add(words[i]);
    }
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12980 (점프와 순간이동)

function solution(n) {
  return n
    .toString(2)
    .split('')
    .filter(ele => ele === '1').length;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12973 (짝지어 제거하기)

function solution(s) {
  var answer = 0;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (!stack.length) {
    answer = 1;
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42747 (H-Index)

function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  let arr = [];

  for (let i = 0; i < citations.length; i++) {
    arr.push(citations[i]);

    if (citations[i] < arr.length) {
      break;
    }

    answer++;
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42746 (가장 큰수)

function solution(numbers) {
  let answer = numbers
    .map(v => v + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42578 (의상)

function solution(clothes) {
  let count = 1;
  let hashMap = new Map();

  for (let i = 0; i < clothes.length; i++) {
    if (hashMap.has(clothes[i][1])) {
      hashMap.set(clothes[i][1], hashMap.get(clothes[i][1]) + 1);
    } else {
      hashMap.set(clothes[i][1], 2);
    }
  }

  for (let x of hashMap) {
    count = count * x[1];
  }

  return count - 1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/154538 (숫자 변환하기)

function solution(x, y, n) {
  var dpArr = new Array(y + 1).fill(-1);
  dpArr[x] = 0;

  for (var i = x; i <= y; i++) {
    if (dpArr[i] === -1) {
      continue;
    }

    if (i + n <= y) {
      if (dpArr[i + n] === -1) {
        dpArr[i + n] = dpArr[i] + 1;
      } else {
        dpArr[i + n] =
          dpArr[i + n] > dpArr[i] + 1 ? dpArr[i] + 1 : dpArr[i + n];
      }
    }
    if (i * 2 <= y) {
      if (dpArr[i * 2] === -1) {
        dpArr[i * 2] = dpArr[i] + 1;
      } else {
        dpArr[i * 2] =
          dpArr[i * 2] > dpArr[i] + 1 ? dpArr[i] + 1 : dpArr[i * 2];
      }
    }
    if (i * 3 <= y) {
      if (dpArr[i * 3] === -1) {
        dpArr[i * 3] = dpArr[i] + 1;
      } else {
        dpArr[i * 3] =
          dpArr[i * 3] > dpArr[i] + 1 ? dpArr[i] + 1 : dpArr[i * 3];
      }
    }
  }
  return dpArr[y];
}
