// https://school.programmers.co.kr/learn/courses/30/lessons/68645 (삼각달팽이)

function solution(n) {
  var answer = [];
  const arr = Array.from({ length: n }, () => new Array(n).fill(0));
  const directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  let row = -1;
  let col = 0;

  let currValue = 1;
  let currDirectionIndex = 0;

  for (let i = n; i > 0; i -= 1) {
    const [dRow, dCol] = directions[currDirectionIndex];

    for (let j = 0; j < i; j += 1) {
      row += dRow;
      col += dCol;

      arr[row][col] = currValue;
      currValue++;
    }

    currDirectionIndex = (currDirectionIndex + 1) % 3;
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (arr[i][j]) answer.push(arr[i][j]);
    }
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/154538 (숫자 변환하기)

function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);

  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}
