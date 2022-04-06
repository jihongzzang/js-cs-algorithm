function solution(n) {
  let result = parseInt(n.toString(3).split('').reverse().join(''), 3);

  return result;
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/68935

function solution2(n) {
  let sumArr = [];

  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      sumArr.push(n[i] + n[j]);
    }
  }
  const result = [...new Set(sumArr)].sort((a, b) => a - b);
  return result;
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/68644
