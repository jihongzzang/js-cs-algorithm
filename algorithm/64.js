// https://school.programmers.co.kr/learn/courses/30/lessons/17679 [1차] 프렌즈4블록

function solution(m, n, board) {
  board = board.map(row => [...row]);
  const offset = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;
  let flag = true;
  while (flag) {
    flag = false;
    const target = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const blocks = offset.map(([dx, dy]) => board[i + dx][j + dy]);
        if (blocks.every(block => !!block && block === blocks[0])) {
          offset.map(([dx, dy]) => target.push([i + dx, j + dy]));
          flag = true;
        }
      }
    }
    target.forEach(([x, y]) => {
      const block = board[x][y];
      if (block) {
        board[x][y] = '';
        count++;
      }
    });
    for (let i = 0; i < n; i++) {
      const stack = [];
      for (let j = 0; j < m; j++) {
        const block = board[j][i];
        if (block) {
          stack.push(block);
        }
      }
      for (let j = m - 1; j >= 0; j--) {
        if (stack.length) {
          board[j][i] = stack.pop();
        } else {
          board[j][i] = '';
        }
      }
    }
  }
  return count;
}
