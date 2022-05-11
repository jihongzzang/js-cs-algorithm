function findLcm(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = findLcm(answer, arr[i]);
  }
  return answer;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12953
