//https://school.programmers.co.kr/learn/courses/30/lessons/12924 (숫자표현)

function solution(n) {
  let answer = 0;

  let start = 1;
  let end = 1;

  let sum = 1;

  while (start <= n / 2) {
    if (sum < n) {
      end++;
      sum += end;
    } else if (sum > n) {
      sum -= start;
      start++;
    } else {
      answer++;
      end++;
      sum += end;
    }
  }
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12945 (피보나치 수)

function solution(n) {
  const mod = 1234567;

  var answer = 0;

  let dp = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % mod;
  }

  answer = dp[n];

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12914 (멀리뛰기)

function solution(n) {
  const mod = 1234567;

  var answer = 0;

  let dp = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % mod;
  }

  answer = dp[n];

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12941 (최솟값 만들기)

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12939 (최댓값과 최솟값)

function solution(s) {
  let array = s.split(' ').sort((a, b) => a - b);

  return `${array[0]} ${array[array.length - 1]}`;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12911 (다음 큰 숫자)

function countOnes(binStr) {
  return binStr.split('').filter(t => t === '1').length;
}

function solution(n) {
  const binaryNum = n.toString(2);

  let nextNumber = n + 1;

  while (true) {
    if (countOnes(binaryNum) === countOnes(nextNumber.toString(2))) {
      return nextNumber;
    }

    nextNumber++;
  }
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12899 (124 나라의 숫자)

function solution(n) {
  let answer = '';

  while (n > 0) {
    if (n % 3 === 0) {
      answer = '4' + answer;
      n = n / 3 - 1;
    } else if (n % 3 === 1) {
      answer = '1' + answer;
      n = Math.floor(n / 3);
    } else if (n % 3 === 2) {
      answer = '2' + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12909 (올바른 괄호)

function solution(str) {
  let answer = true;

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (
      stack[stack.length - 1] &&
      stack[stack.length - 1] === '(' &&
      str[i] === ')'
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
