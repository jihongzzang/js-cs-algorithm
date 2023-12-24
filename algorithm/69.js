// https://school.programmers.co.kr/learn/courses/30/lessons/92342 (양궁대회)

function solution(n, info) {
  let answer = Array(11).fill(0);
  let maxCount = 0;

  function findMaxPoint(apeachCount, ryanCount, usedShots, point, arr) {
    if (n < usedShots) return;

    if (point > 10) {
      let diff = ryanCount - apeachCount;
      if (maxCount < diff) {
        arr[10] = n - usedShots;
        maxCount = diff;
        answer = arr;
      }
      return;
    }

    if (n > usedShots) {
      let current = [...arr];
      current[10 - point] = info[10 - point] + 1;
      findMaxPoint(
        apeachCount,
        ryanCount + point,
        usedShots + info[10 - point] + 1,
        point + 1,
        current
      );
    }

    if (info[10 - point] > 0) {
      findMaxPoint(apeachCount + point, ryanCount, usedShots, point + 1, arr);
    } else {
      findMaxPoint(apeachCount, ryanCount, usedShots, point + 1, arr);
    }
  }

  findMaxPoint(0, 0, 0, 0, answer);

  return maxCount <= 0 ? [-1] : answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/72412 (순위 검색)
function solution(info, query) {
  const infoDict = {
    cpp: 'c',
    java: 'j',
    python: 'p',
    backend: 'b',
    frontend: 'f',
    junior: 'j',
    senior: 's',
    chicken: 'c',
    pizza: 'p',
    '-': '-',
  };

  const infoList = {};

  info.map(v => {
    const arr = v.split(' ');
    const score = +arr.pop();
    const word = arr.map(v => infoDict[v]).join('');
    if (infoList[word]) {
      infoList[word].push(score);
    } else {
      infoList[word] = [score];
    }
  });

  const infoArray = Object.entries(infoList).map(v => [
    v[0],
    v[1].sort((a, b) => a - b),
  ]);

  return query.map(v => {
    const arr = v.replace(/and\s/, '').split(' ');
    const qscore = +arr.pop();
    const word = arr.map(v => infoDict[v]).join('');
    return infoArray.reduce((a, v) => {
      const temp = v[0];
      const iscore = v[1];

      if (iscore[iscore.length - 1] < qscore) return a;
      for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) !== temp.charAt(i) && word.charAt(i) !== '-') {
          return a;
        }
      }

      let start = 0;
      let end = iscore.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (iscore[mid] >= qscore) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }
      return a + (iscore.length - start);
    }, 0);
  });
}
