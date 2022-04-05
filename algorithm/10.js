const countMeasure = num => {
  let count = 0;
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      count += 1;
    }
  }

  if (count % 2 === 0) return num;
  else return -num;
};

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i < right + 1; i++) {
    answer += countMeasure(i);
  }
  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/77884
