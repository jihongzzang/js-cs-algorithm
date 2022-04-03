const solution = n => {
  let answer = 0;
  let arr = [];
  if (n === 0) {
    answer = 0;
  } else if (n === 1) {
    answer = 1;
  } else if (n !== 0 && n !== 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        arr.push(i);
      }
    }
    arr.push(1, n);
    answer = arr.reduce((a, b) => a + b, 0);
  }
  return answer;
};

const solution2 = (n, a = 0, b = 0) => {
  return n <= a / 2 ? b : solution2(n, a + 1, (b += n % a ? 0 : a));
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/12928

const solution3 = (n, lost, reserve) => {
  let answer = 0;
  let isUniform = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    isUniform[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    isUniform[reserve[i] - 1]++;
  }

  for (let i = 0; i < isUniform.length; i++) {
    if (isUniform[i] === 0) {
      if (isUniform[i - 1] === 2) {
        isUniform[i]++;
        isUniform[i - 1]--;
      } else if (isUniform[i + 1] === 2) {
        isUniform[i]++;
        isUniform[i + 1]--;
      }
    }

    if (isUniform[i] >= 1) {
      answer++;
    }
  }

  return answer;
};
//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42862
