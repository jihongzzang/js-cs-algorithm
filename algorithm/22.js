function solution(brown, yellow) {
  const sum = brown + yellow;
  const collection = [];
  if (brown % 2 === 1) return brown + yellow;
  if (Number.isInteger(Math.sqrt(sum))) return [Math.sqrt(sum), Math.sqrt(sum)];

  for (let i = 1; i < sum + 1; i++) {
    if (sum % i === 0) {
      collection.push(i);
    }
  }

  for (let i = 0; i < collection.length / 2; i++) {
    let a = collection[i];
    let b = collection[collection.length - i - 1];

    if ((a - 2) * (b - 2) === yellow) return [b, a];
  }
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(numbers, target) {
  let answer = [];

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/43165
