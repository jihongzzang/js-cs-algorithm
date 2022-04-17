const solution = seoul => {
  let answer = seoul.indexOf('Kim');
  return `김서방은 ${answer}에 있다`;
};
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12919

const solution2 = (d, budget) => {
  let answer = 0;
  let sortedD = d.sort((a, b) => a - b);

  sortedD.reduce((acc, curr) => {
    if (acc <= budget) {
      acc + curr <= budget ? answer++ : answer;
      return acc + curr;
    }
  }, 0);

  return answer;
};
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12982

function solution3(s) {
  return s.split('').sort().reverse().join('');
}
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12917

function solution4(arr) {
  return arr.filter((value, idx) => value != arr[idx + 1]);
}
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12906

function solution5(a, b) {
  if (a === b) {
    return a;
  }
  if (a > b) {
    [a, b] = [b, a];
  }

  return ((b - a + 1) * (a + b)) / 2;
}
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12912

function solution6(n) {
  if (n % 2 === 0) {
    return '수박'.repeat(n / 2);
  }
  return '수박'.repeat(n / 2) + '수';
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12922

function solution7(price, money, count) {
  let totalPrice = price * ((count * (count + 1)) / 2);
  if (money >= totalPrice) {
    return 0;
  }
  return Math.abs(money - totalPrice);
}
// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/82612

function solution8(arr, divisor) {
  var answer = [];
  for (let val of arr) {
    if (val % divisor === 0) {
      answer.push(val);
    }
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12910

function solution9(s) {
  const arr = s
    .toLowerCase()
    .split('')
    .filter(ele => ele === 'p' || ele === 'y');

  if (arr.length === 0) {
    return true;
  }

  if (arr.length % 2 === 1) {
    return false;
  }

  if (arr.filter(ele => ele === 'p').length === arr.length / 2) {
    return true;
  }

  return false;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12916

function solution10(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
  return answer;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/87389
