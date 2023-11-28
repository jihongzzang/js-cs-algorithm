// https://school.programmers.co.kr/learn/courses/30/lessons/154540 (무인도 여행)

function solution(maps) {
  var answer = [];
  const [R, C] = [maps.length, maps[0].length];
  const visited = Array.from({ length: R }, () => Array(C).fill(0));
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (a, b) => {
    let cnt = 0;
    const q = [[a, b]];
    cnt += parseInt(maps[a][b]);
    visited[a][b] = 1;

    while (q.length) {
      const [r, c] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nr = r + move[i][0];
        const nc = c + move[i][1];
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < R &&
          nc < C &&
          !visited[nr][nc] &&
          maps[nr][nc] !== 'X'
        ) {
          visited[nr][nc] = 1;
          cnt += parseInt(maps[nr][nc]);
          q.push([nr, nc]);
        }
      }
    }
    answer.push(cnt);
  };

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') bfs(i, j);
    }
  }

  if (answer.length === 0) return [-1];

  return answer.sort((a, b) => a - b);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/86971 (전력망을 둘로 나누기)

function solution(n, wires) {
  var answer = 100;
  const links = {};

  wires.map(w => {
    const [a, b] = w;
    if (!links[a]) links[a] = [];
    if (!links[b]) links[b] = [];
    links[a].push(b);
    links[b].push(a);
  });

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;
    while (queue.length) {
      const cur = queue.pop();
      links[cur].map(next => {
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count++;
    }
    return count;
  };

  wires.map((w, i) => {
    const [a, b] = w;
    const dif = Math.abs(searchTree(a, b) - searchTree(b, a));
    answer = answer > dif ? dif : answer;
  });
  return answer;
}
