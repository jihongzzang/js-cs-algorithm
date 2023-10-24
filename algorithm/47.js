//https://school.programmers.co.kr/learn/courses/30/lessons/1844 (게임 맵 최단거리)

function solution(n) {
  let answer = -1;

  let yHeight = n.length;
  let xWidth = n[0].length;

  let goalY = yHeight - 1;
  let goalX = xWidth - 1;

  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  let queue = [];

  queue.push([0, 0, 1]);

  while (queue.length) {
    let [currY, currX, currLocation] = queue.shift();

    if (currY === goalY && currX === goalX) {
      return currLocation;
    }

    for (let i = 0; i < 4; i++) {
      const mY = currY + dy[i];
      const mX = currX + dx[i];

      if (
        mY >= 0 &&
        mX >= 0 &&
        mY < yHeight &&
        mX < xWidth &&
        n[mY][mX] === 1
      ) {
        queue.push([mY, mX, currLocation + 1]);
        n[mY][mX] = 0;
      }
    }
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12913 (땅따먹기)

function solution(land) {
  var answer = 0;

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === 0) {
        continue;
      } else {
        let arr = land[i - 1].slice();
        arr[j] = 0;

        land[i][j] += Math.max.apply(null, arr);

        answer = Math.max(answer, land[i][j]);
      }
    }
  }

  return answer;
}
