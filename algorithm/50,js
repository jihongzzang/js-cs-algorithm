// https://school.programmers.co.kr/learn/courses/30/lessons/42839 (소수 찾기)

function solution(numbers) {
  var answer = new Set();
  let nums = numbers.split('');

  const isPrimeNum = num => {
    if (num <= 1) return false;

    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];

        const copyArr = arr.slice();

        copyArr.splice(i, 1);

        if (!answer.has(parseInt(newFixed)) && isPrimeNum(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }

        getPermutation(copyArr, newFixed);
      }
    }
  };

  getPermutation(nums, '');

  return answer.size;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42842 (카펫)

function solution(brown, yellow) {
  var answer = [0, 0];
  const S = brown + yellow;

  for (let width = S - 1; width > 0; width--) {
    if (S % width) continue;

    const height = S / width;
    const y = (width - 2) * (height - 2);
    const b = S - y;

    if (y == yellow && b == brown) {
      answer[0] = width;
      answer[1] = height;
      break;
    }
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42584 (주식가격)

function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let stack = 0;
    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(stack);
  }
  return answer;
}
