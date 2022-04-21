//알고리즘 22문제 추가

function solution(s, n) {
  return s
    .split('')
    .map(val => {
      if (val === ' ') return val;
      return val.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(val.charCodeAt() + n - 26)
        : String.fromCharCode(val.charCodeAt() + n);
    })
    .join('');
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(strings, n) {
  strings.sort((a, b) => {
    let first = a[n];
    let second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(s) {
  let a = s.split('');
  let b = [];

  if (a.length === 4 || a.length === 6) {
    for (let v of a) {
      b.push(Number(v));
    }

    return b.includes(NaN) ? false : true;
  }

  return false;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(num) {
  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(s) {
  let answer = '';
  if (s.length % 2 === 1) {
    return (answer = s[Math.floor(s.length / 2)]);
  }
  answer = s[s.length / 2 - 1] + s[s.length / 2];
  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(n) {
  let a = Math.sqrt(n);

  return Math.sqrt(n) > Math.floor(Math.sqrt(n)) ? -1 : (a + 1) * (a + 1);
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => Number(b) - Number(a))
      .join('')
  );
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  let a = n.toString().split('');
  if (n.toString().length === 1) {
    return n;
  }
  a.reduce((a, b) => Number(a) + Number(b));
  return a.reduce((a, b) => Number(a) + Number(b));
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(ele => Number(ele));
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(arr) {
  if (arr.length <= 1) return [-1];

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      i = j;
    }
  }

  arr.splice(i, 1);
  return arr;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(n, m) {
  let gcd = 1;
  let lcm = 1;

  if (n > m) {
    [n, m] = [m, n];
  }

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }
    lcm++;
  }

  return [gcd, lcm];
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(s) {
  let a = s.split(' ');
  let result = '';
  let answer = a.map(el =>
    el
      .split('')
      .map((el, idx) => (idx % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
  );

  for (let i in answer) {
    result = result + answer[i].join('') + ' ';
  }

  return result.slice(0, -1);
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(num) {
  let a = num;
  let count = 0;
  while (a !== 1) {
    if (a % 2 === 0) {
      a /= 2;
      ++count;
    } else if (a % 2 === 1) {
      a *= 3;
      a += 1;
      ++count;
    }
  }

  return count > 500 ? -1 : count;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(x) {
  let convert = x.toString().split('');
  let sum = convert.reduce((a, b) => Number(a) + Number(b), 0);
  return x % sum === 0 ? true : false;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }

  return result;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(x, n) {
  var answer = [];
  let a = Math.abs(x);
  if (x === 0) {
    let b = new Array(n);
    return b.fill(0);
  }
  for (let i = a; i <= n * a; i += a) {
    x < 0 ? answer.push(-i) : answer.push(i);
  }
  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(phone_number) {
  let answer = '';
  let a = phone_number.slice(0, phone_number.length - 4);
  let b = phone_number.slice(-4);
  let c = new Array(a.length);
  c.fill('*');
  answer = c.join('') + b;

  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12948

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log('*'.padEnd(a, '*'));
  }
});
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/12969

function solution(sizes) {
  let a = [];
  let b = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);

    a.push(sizes[i][0]);
    b.push(sizes[i][1]);
  }

  return Math.max(...a) * Math.max(...b);
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(dartResult) {
  let answer = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      answer.push(temp);
    } else if (dartResult[i] === 'D') {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === 'T') {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }

  return answer.reduce((a, b) => Number(a) + Number(b));
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(n, arr1, arr2) {
  let binary1 = arr1.map(ele => ele.toString(2).padStart(n, '0').split(''));
  let binary2 = arr2.map(ele => ele.toString(2).padStart(n, '0').split(''));

  let result = [];
  let answer = [];

  for (let i = 0; i < n; i++) {
    result.push(new Array(n));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binary1[i][j] == 1 || binary2[i][j] == 1) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    result[i].map((ele, idx, arr) =>
      ele === 1 ? (arr[idx] = '#') : (arr[idx] = ' ')
    );
    answer.push(result[i].join(''));
  }

  return answer;
}
//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/17681
