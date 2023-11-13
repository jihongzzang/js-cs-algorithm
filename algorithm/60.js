// https://school.programmers.co.kr/learn/courses/30/lessons/131704 (택배상자)

function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] !== i) {
      stack.push(i);
    } else {
      idx++;
      answer++;
    }

    while (stack.length !== 0 && stack.at(-1) === order[idx]) {
      stack.pop();
      idx++;
      answer++;
    }
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/49994 (방문길이)

function solution(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let route = new Set();

  for (let dir of dirs) {
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    route.add('' + now[0] + now[1] + nowX + nowY);
    route.add('' + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }

  return route.size / 2;
}
