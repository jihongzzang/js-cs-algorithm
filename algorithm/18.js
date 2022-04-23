function solution(numbers) {
  let temp = numbers
    .map(a => String(a))
    .sort((a, b) => {
      return b + a - (a + b);
    });

  if (temp.every(ele => ele === '0')) return '0';

  return temp.join('');
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(expression) {
  const priorOp = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '-', '+'],
    ['*', '+', '-'],
  ];
  let answer = [];

  for (let v1 of priorOp) {
    const temp = expression.split(/(\D)/);
    for (let v2 of v1) {
      while (temp.includes(v2)) {
        const idx = temp.indexOf(v2);

        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')));
      }
    }

    answer.push(Math.abs(temp[0]));
  }

  return Math.max(...answer);
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/67257
