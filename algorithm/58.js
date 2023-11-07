// https://school.programmers.co.kr/learn/courses/30/lessons/87946 (피로도)

const getPermutations = (arr, selectNum) => {
  if (selectNum === 1) return arr.map(el => [el]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNum - 1);

    const attached = permutations.map(el => {
      return [fixed, ...el];
    });

    result.push(...attached);
  });

  return result;
};

function solution(k, dungeons) {
  var answer = -1;

  dungeons.sort((a, b) => b[0] - a[0]);

  const b = getPermutations(dungeons, dungeons.length);

  for (let i = 0; i < b.length; i++) {
    let origin = k;
    let count = 0;
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j][0] <= origin) {
        count++;
        origin = origin - b[i][j][1];
      }
    }

    if (count === dungeons.length) {
      return count;
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

function solution(k, dungeons) {
  const N = dungeons.length;
  const visited = new Array(N).fill(0);

  let answer = 0;

  function dfs(currK, clearCount) {
    answer = Math.max(clearCount, answer);

    for (let i = 0; i < N; i++) {
      if (currK >= dungeons[i][0] && !visited[i]) {
        visited[i] = 1; // 현재 던전 방문 표시
        dfs(currK - dungeons[i][1], clearCount + 1); // 현재 던전 클리어 이후 다음 던전 탐색
        visited[i] = 0; // 현재 던전 방문 표시 해제
      }
    }
  }

  dfs(k, 0);
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/92341 (주차 요금 계산)
function solution(fees, records) {
  records = records.reverse();

  records = records.reduce((acc, val) => {
    const [time, car, action] = val.split(' ');
    const [hour, minute] = time.split(':').map(v => +v);
    acc[car] = acc[car] || { acc: 0, outTime: 23 * 60 + 59 };

    if (action === 'IN') {
      console.log('hi');
      acc[car].acc += acc[car].outTime - (hour * 60 + minute);
    } else {
      acc[car].outTime = hour * 60 + minute;
    }

    return acc;
  }, {});

  records = Object.entries(records);

  records.sort((a, b) => a[0] - b[0]);

  records = records.map(v => {
    console.log(v);
    return (
      fees[1] +
      (v[1].acc > fees[0]
        ? Math.ceil((v[1].acc - fees[0]) / fees[2]) * fees[3]
        : 0)
    );
  });

  return records;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/43165 (깊이/너비 우선 탐색)

function solution(numbers, target) {
  let answer = 0;
  function dfs(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }
  dfs(0, 0);
  return answer;
}
