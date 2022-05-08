function solution(n) {
  let arr = new Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(number, k) {
  const arr = [];

  for (let num of number) {
    while (k > 0 && arr[arr.length - 1] < num) {
      arr.pop();
      k -= 1;
    }
    arr.push(num);
  }

  return arr.join('').slice(0, number.length - k);
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42883#qna
