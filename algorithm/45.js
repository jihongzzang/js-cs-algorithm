// 과제를 받은 루는 다음과 같은 순서대로 과제를 하려고 계획을 세웠습니다.

// - 과제는 시작하기로 한 시각이 되면 시작합니다.

// - 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있다면 진행 중이던 과제를 멈추고 새로운 과제를 시작합니다.

// - 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행합니다.

// - 만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행합니다. 멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다.

// 과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때, 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성해주세요.

function solution(plans) {
  var answer = [];

  var stack = [];

  for (let i of plans) {
    i[1] = timeToMin(i[1]);
    i[2] = parseInt(i[2]);
  }

  plans.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < plans.length - 1; i++) {
    const [subject, time, duration] = plans[i];

    if (time + duration <= plans[i + 1][1]) {
      answer.push(subject);

      let availableTime = plans[i + 1][1] - time - duration;

      while (stack.length) {
        const [currSubject, currDurationTime] = stack.pop();

        if (currDurationTime <= availableTime) {
          availableTime -= currDurationTime;
          answer.push(currSubject);
        } else {
          stack.push([currSubject, currDurationTime - availableTime]);

          break;
        }
      }
    } else {
      const remainDuration = duration - (plans[i + 1][1] - time);
      stack.push([subject, remainDuration]);
    }
  }

  answer.push(plans[plans.length - 1][0]);

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}

// 비내림차순으로 정렬된 수열이 주어질 때, 다음 조건을 만족하는 부분 수열을 찾으려고 합니다.

// - 기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 합니다.

// - 부분 수열의 합은 k입니다.

// - 합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾습니다.

// -길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾습니다.

// 수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성해주세요. 이때 수열의 인덱스는 0부터 시작합니다.

function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  let answer = [-1, -1];

  while (start <= end && end < sequence.length) {
    if (sum < k) {
      end++;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      start++;
      if (start > end && start < sequence.length) {
        end = start;
        sum = sequence[end];
      }
    } else {
      if (answer[0] === -1 || end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }

      end++;

      if (end < sequence.length) {
        sum += sequence[end];
      }
    }
  }

  return answer;
}

// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.

// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);

  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > stack[stack.length - 1][0]) {
      const [_, idx] = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push([numbers[i], i]);
  }

  return answer;
}

// 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

// - 타일을 가로로 배치 하는 경우

// - 타일을 세로로 배치 하는 경우

// 직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

function solution(n) {
  const mod = 1000000007;

  if (n <= 2) return n;

  let prevPrev = 1;

  let prev = 1;

  let current;

  for (let i = 2; i <= n; i++) {
    current = (prev + prevPrev) % mod;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
