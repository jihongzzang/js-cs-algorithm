const solution = (a, b) => {
  let answer = 0;
  for (let i in a) {
    answer += a[i] * b[i];
  }
  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/70128

const solution2 = numbers => {
  const original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    original.reduce((curr, acc) => curr + acc, 0) -
    numbers.reduce((curr, acc) => curr + acc, 0)
  );
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/86051

function solution3(absolutes, signs) {
  const result = absolutes.reduce(
    (curr, acc, i) => curr + acc * (signs[i] ? 1 : -1),
    0
  );
  return result;
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/76501

const solution4 = (lottos, win_nums) => {
  const rank = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };
  let answer = [];
  const initialCorrect = lottos.filter(num => win_nums.includes(num)).length;
  const countZero = lottos.filter(num => num === 0).length;
  const lowestRank = rank[initialCorrect];
  const highestRank = rank[initialCorrect + countZero];
  answer = [highestRank, lowestRank];
  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/77484
