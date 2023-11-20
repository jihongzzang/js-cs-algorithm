// https://school.programmers.co.kr/learn/courses/30/lessons/77885 (2개 이하로 다른 비트)

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];

    if (current % 2 === 0) {
      answer.push(current + 1);
    } else {
      current = '0' + current.toString(2);
      let totalLength = current.length;
      for (let j = totalLength - 1; j >= 0; j--) {
        if (+current[j] === 0) {
          answer.push(
            parseInt(
              current.substring(0, j) +
                '10' +
                current.substring(j + 2, totalLength),
              2
            )
          );
          break;
        }
      }
    }
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/68936 (쿼드압축 후 개수 세기)

function solution(arr) {
  var answer = [0, 0];

  function check(x, y, n) {
    if (n === 1) return answer[arr[x][y]]++;

    let flag = true;
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) return answer[arr[x][y]]++;

    n /= 2;

    check(x, y, n);
    check(x + n, y, n);
    check(x, y + n, n);
    check(x + n, y + n, n);
  }

  check(0, 0, arr.length);

  return answer;
}
