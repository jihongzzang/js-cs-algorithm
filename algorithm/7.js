const solution = nums => {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  function isPrime(sum) {
    if (sum < 2) return true;
    for (let i = 2; i < sum; i++) {
      if (sum % i == 0) return false;
    }
    return true;
  }
  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/12977

const solution2 = n => {
  let arr = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter(e => e).length;
};
//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/12921
