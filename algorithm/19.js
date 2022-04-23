function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i in A) {
    answer += A[i] * B[i];
  }

  return answer;
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(n) {
  var answer = '';
  const arr = ['4', '1', '2'];
  while (n > 0) {
    answer = arr[n % 3] + answer;

    n = Math.floor((n - 1) / 3);
  }

  return answer;
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12899
