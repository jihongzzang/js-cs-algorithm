// https://school.programmers.co.kr/learn/courses/30/lessons/84512 (모음 사전)

//길이에 따른 모든 경우의 단어를 만든다.
const dfs = (word, length, result) => {
  const vowels = [...'AEIOU'];

  if (length === word.length) {
    result.push(word);
    return;
  }

  vowels.forEach(vowel => {
    dfs(word + vowel, length, result);
  });
};

function solution(word) {
  const result = [];
  const str = '';

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }
  return result.sort().indexOf(word) + 1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/92335 (k진수에서 소수 개수 구하기)

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  const sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}

function getConvertedNumber(n, k) {
  return n.toString(k);
}

function solution(n, k) {
  const convertedNum = getConvertedNumber(n, k);
  let count = 0;

  const parts = convertedNum.split('0').filter(part => part !== '');

  parts.forEach(part => {
    if (isPrime(Number(part))) {
      count++;
    }
  });

  return count;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17687 (n진수 게임)
function solution(n, t, m, p) {
  let str = '';
  let number = 0;

  while (str.length < t * m) {
    str += number.toString(n);
    number++;
  }

  str = str.slice(0, t * m);

  const answer = str
    .split('')
    .filter((_, idx) => {
      return (idx - p + 1) % m === 0;
    })
    .join('')
    .toUpperCase();

  return answer;
}
