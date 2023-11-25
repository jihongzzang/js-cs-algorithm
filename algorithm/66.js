// https://school.programmers.co.kr/learn/courses/30/lessons/118667 (두 큐 합 같게 만들기)

function solution(queue1, queue2) {
  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);

  const half = (sum1 + sum2) / 2;
  const q = [...queue1, ...queue2];

  let q1Pointer = 0;

  let q2Pointer = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    if (sum1 === half) {
      return cnt;
    }
    sum1 =
      sum1 > half
        ? sum1 - q[q1Pointer++ % q.length]
        : sum1 + q[q2Pointer++ % q.length];
  }

  return -1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/72411 (메뉴 리뉴얼)

function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach(od => {
    const sorted = od.split('').sort();
    course.forEach(len => {
      createSet(sorted, 0, len, '');
    });
  });

  const launched = Object.keys(candidates).filter(
    food => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}
