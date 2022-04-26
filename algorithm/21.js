/*
 * 입력된 정수 배열중 중복된 요소만 배열로 반환한다.
 *
 * [방법 설명]
 * 입력: [1, 2, 3, 1, 3]
 * 출력: [1, 3]
 *
 * [조건 설명]
 * 입력값은 2개 이상의 정수 배열.
 * 입력된 배열내 값은 중복될 수 있다.
 * 2개이상 존재하는 요소만 배열로 반환한다.
 * 반환된 배열내 값은 중복될 수 없다.
 *
 * [입/출력 예시]
 * [1, 2, 3, 1, 3] → [1, 3]
 * [7, 2, 3, 1, 3, 4, 3, 7] → [3, 7]
 */

function findDupEle(array) {
  const dupEleArr = [...new Set(array)];
  let result = [];

  for (value of dupEleArr) {
    if (array.indexOf(value) !== array.lastIndexOf(value)) {
      result.push(value);
    }
  }

  return result;
}

//두개의 set을 이용해 중복값 찾기

function findDupEle(array) {
  let notDupSet = new Set();
  let dupSet = new Set();

  for (value of array) {
    if (!notDupSet.has(value)) {
      notDupSet.add(value);
    } else if (notDupSet.has(value)) {
      dupSet.add(value);
    }
  }

  return Array.from(dupSet);
}

findDupEle([1, 2, 3, 1, 3]);

/*
 * 최대값 배열 반환.
 *
 * [방법 설명]
 * 입력: 숫자 2개
 * - n: 2
 * - s: 9
 *
 * 출력: 숫자 배열
 * - [4,5]
 *
 * [조건 설명]
 * n은 출력 배열의 길이.
 * s는 출력 배열 요소의 합.
 * n, s는 0보다 큰 정수.
 * 출력 배열 요소의 곱이 최대값이 되도록 반환.
 * 최대값 집합이 존재하지 않는 경우 [-1] 반환.
 * 출력 요소는 오름차순 정렬 상태임.
 *
 * EX:
 * n  s  result
 * 2  1  [-1]
 *
 * 2  8  [4, 4]
 * 2  9  [5, 5] => [4, 5]
 * 3  9  [3, 3, 3]
 * 3  8  [3, 3, 3] => [2, 3, 3]
 */

function findMaxValueArr(n, s) {
  let result = new Array(n);

  if (n !== 1 && s === 1) return [-1];

  if (s % n === 0) return result.fill(s / n);

  for (let i = 0; i < result.length; i++) {
    if (i < result.length - (s % n)) {
      result[i] = parseInt(s / n);
    } else {
      result[i] = parseInt(s / n) + 1;
    }
  }

  return result;
}
