function solution(k, dungeons) {
  const visitedArr = new Array(dungeons.length).fill(false);
  let answer = [];

  const dfs = (count, k) => {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (!visitedArr[i] && k >= current[0]) {
        visitedArr[i] = true;
        dfs(count + 1, k - current[1]);
        visitedArr[i] = false;
      }
    }
  };
  dfs(0, k);
  return Math.max(...answer);
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/87946
