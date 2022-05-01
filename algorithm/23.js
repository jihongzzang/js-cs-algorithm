function solution(people, limit) {
  let arr = people.sort((a, b) => b - a);
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum > limit) {
      start++;
    } else {
      start++;
      end--;
    }
    count++;
  }

  if (start === end) count++;

  return count;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(s) {
  let arr = [];
  let answer = -1;
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  answer = arr.length === 0 ? 1 : 0;
  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12973
