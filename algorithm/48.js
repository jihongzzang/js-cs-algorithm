// https://school.programmers.co.kr/learn/courses/30/lessons/42586 (기능개발)

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, i) => {
    return Math.ceil((100 - progress) / speeds[i]);
  });
  let maxDay = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42587 (프로세스)

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

// https://school.programmers.co.kr/learn/courses/30/lessons/42583 (다리를 지나는 트럭)

function solution(bridge_length, weight, truck_weights) {
  let elapsedTime = 0;

  let queue = Array(bridge_length).fill(0);

  let currentWeightOnBridge = 0;

  while (truck_weights.length > 0) {
    currentWeightOnBridge -= queue.shift();

    if (currentWeightOnBridge + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      queue.push(truck);
      currentWeightOnBridge += truck;
    } else {
      queue.push(0);
    }

    elapsedTime++;
  }

  elapsedTime += bridge_length;

  return elapsedTime;
}
