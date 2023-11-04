// https://school.programmers.co.kr/learn/courses/30/lessons/138476 (귤 고르기)

function solution(k, tangerine) {
  var answer = 0;

  let hash = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    if (hash.get(tangerine[i])) {
      hash.set(tangerine[i], hash.get(tangerine[i]) + 1);
    } else {
      hash.set(tangerine[i], 1);
    }
  }

  let hashArray = [...hash].sort((a, b) => b[1] - a[1]);

  for (let [_, value] of hashArray) {
    answer++;
    if (k > value) {
      k -= value;
    } else {
      break;
    }
  }

  return answer;
}
