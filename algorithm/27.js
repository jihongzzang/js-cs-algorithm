function solution(arr1, arr2) {
  const answer = [];

  arr1.forEach(v => answer.push(new Array(arr2[0].length).fill(0)));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12949

function getGCD(w, h) {
  const mod = w % h;
  return mod === 0 ? h : getGCD(h, mod);
}

function solution(w, h) {
  let answer = 0;

  answer = w * h - (w + h - getGCD(w, h));
  return answer;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/62048#
