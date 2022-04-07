const solution = nums => {
  let answer = [];
  let max = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < max) {
      if (!answer.includes(nums[i])) {
        answer.push(nums[i]);
      }
    }
  }
  return answer.length;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/1845

const solution2 = (board, moves) => {
  let answer = 0;
  const stack = [];

  moves.forEach(move => {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      if (item === 0) continue;
      if (item === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(item);
      }
      board[i][move - 1] = 0;
      break;
    }
  });

  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/64061
