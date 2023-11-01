// https://school.programmers.co.kr/learn/courses/30/lessons/17677 (뉴스 클러스터링)

const regex = /^[a-zA-Z]*$/;

function solution(str1, str2) {
  var answer = 0;
  let str1Arr = [];
  let str2Arr = [];

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    const targetText = str1[i] + str1[i + 1];
    if (regex.test(targetText)) {
      str1Arr.push(targetText);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const targetText = str2[i] + str2[i + 1];
    if (regex.test(targetText)) {
      str2Arr.push(targetText);
    }
  }

  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;
  str1Arr.sort();
  str2Arr.sort();

  if (JSON.stringify(str1Arr) === JSON.stringify(str2Arr)) return 65536;

  const tempStr2Arr = [...str2Arr];

  const intersectionArr = str1Arr.reduce((acc, curr) => {
    if (tempStr2Arr.includes(curr)) {
      const index = tempStr2Arr.indexOf(curr);
      tempStr2Arr.splice(index, 1);
      return [...acc, curr];
    } else {
      return acc;
    }
  }, []);

  const unionArrlength =
    str1Arr.length + str2Arr.length - intersectionArr.length;

  answer = Math.floor((intersectionArr.length / unionArrlength) * 65536);

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12985 (예상 대진표)

function solution(n, a, b) {
  var answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

function solution(n, a, b) {
  var answer = 0;

  while (n > 0) {
    answer++;

    if (
      (a + 1 === b && a % 2 !== 0 && b % 2 === 0) ||
      (a === b + 1 && a % 2 === 0 && b % 2 !== 0)
    ) {
      break;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    n / 2;
  }

  return answer;
}
