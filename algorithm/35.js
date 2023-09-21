//https:school.programmers.co.kr/learn/courses/15008/lessons/121683?language=javascript
function solution(input_string) {
  let answer = '';

  let stack = [];

  let map = new Map();

  for (let i = 0; i < input_string.length; i++) {
    if (!map.has(input_string[i])) {
      map.set(input_string[i], 1);
    } else {
      if (input_string[i - 1] !== input_string[i]) {
        let prev = map.get(input_string[i]);
        map.set(input_string[i], prev + 1);
      }
    }
  }

  for ([key, value] of map) {
    if (value >= 2) {
      stack.push(key);
    }
  }

  answer = stack.sort().join('') ? stack.sort().join('') : 'N';

  return answer;
}

//https:school.programmers.co.kr/learn/courses/15009/lessons/121687
function solution(command) {
  let x = 0;
  let y = 0;
  // 로봇의 현재 위치

  let direction = 0;
  // 로봇의 현재 방향: 0 -> +y, 1 -> +x, 2 -> -y, 3 -> -x

  // direction에 따른 x, y의 변화량
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < command.length; i++) {
    const cmd = command[i];

    if (cmd === 'R') {
      direction = (direction + 1) % 4;
    } else if (cmd === 'L') {
      direction = (direction - 1 + 4) % 4;
    } else if (cmd === 'G') {
      x += dx[direction];
      y += dy[direction];
    } else if (cmd === 'B') {
      x += dx[(direction + 2) % 4];
      y += dy[(direction + 2) % 4];
    }
  }

  return [x, y];
}

//https://school.programmers.co.kr/learn/courses/15009/lessons/121688
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    let retVal = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let idx = 0;
      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let minIdx = idx;
        if (left < this.heap.length && this.heap[left] < this.heap[minIdx])
          minIdx = left;
        if (right < this.heap.length && this.heap[right] < this.heap[minIdx])
          minIdx = right;
        if (minIdx === idx) break;
        [this.heap[idx], this.heap[minIdx]] = [
          this.heap[minIdx],
          this.heap[idx],
        ];
        idx = minIdx;
      }
    }
    return retVal;
  }

  size() {
    return this.heap.length;
  }
}

function solution(ability, number) {
  let answer = 0;
  let minHeap = new MinHeap();

  for (let val of ability) {
    minHeap.push(val);
  }

  while (number--) {
    let first = minHeap.pop();
    let second = minHeap.pop();
    let sum = first + second;
    minHeap.push(sum);
    minHeap.push(sum);
  }

  while (minHeap.size() > 0) {
    answer += minHeap.pop();
  }

  return answer;
}
