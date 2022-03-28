const solution = (numbers, hand) => {
  let answer = '';
  let list = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let left = list['*'];
  let right = list['#'];

  for (let num of numbers) {
    let [i, j] = list[num];
    if (j === 0) {
      answer += 'L';
      left = list[num];
    } else if (j === 2) {
      answer += 'R';
      right = list[num];
    } else {
      let tmpL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
      let tmpR = Math.abs(i - right[0]) + Math.abs(j - right[1]);
      if (tmpL > tmpR) {
        right = list[num];
        answer += 'R';
      } else if (tmpR > tmpL) {
        left = list[num];
        answer += 'L';
      } else if (tmpL === tmpR) {
        if (hand === 'left') {
          left = list[num];
          answer += 'L';
        } else {
          right = list[num];
          answer += 'R';
        }
      }
    }
  }
  return answer;
};

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/67256
