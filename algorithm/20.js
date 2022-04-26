function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue = new Array(bridge_length);

  queue.fill(0);

  while (true) {
    queue.shift();
    queue.push(0);
    time += 1;
    let currBridgeWeight = queue.reduce((prev, curr) => prev + curr);

    if (currBridgeWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      queue[bridge_length - 1] = truck;
      currBridgeWeight += truck;
    }
    if (currBridgeWeight === 0) {
      break;
    }
  }

  return time;
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42583
