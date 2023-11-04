// https://school.programmers.co.kr/learn/courses/30/lessons/17680 ([1차] 캐시)

function solution(s, works) {
  let count = 0;
  let arr = new Array(s).fill(0);

  if (s === 0) {
    return works.length * 5;
  }

  for (let i = 0; i < works.length; i++) {
    if (!arr.includes(works[i].toLowerCase())) {
      arr.pop();
      arr.unshift(works[i].toLowerCase());
      count += 5;
    } else {
      let idx = arr.indexOf(works[i].toLowerCase());
      arr.splice(idx, 1);
      arr.unshift(works[i].toLowerCase());
      count += 1;
    }
  }

  return count;
}
