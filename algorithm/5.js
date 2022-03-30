function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, i) => {
    return Math.ceil((100 - progress) / speeds[i]);
  });
  let maxDay = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42586

const solution2 = (priorities, location) => {
  let target = location;
  let count = 0;

  while (priorities.length > 0) {
    let compareNum = priorities.shift();
    if (priorities.some(num => num > compareNum)) {
      priorities.push(compareNum);
    } else {
      count++;
      if (target === 0) {
        return count;
      }
    }
    if (target === 0) target = priorities.length - 1;
    else target--;
  }
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42587
