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
