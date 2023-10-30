//https://school.programmers.co.kr/learn/courses/30/lessons/150369 (택배 배달과 수거하기)

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let box = 0;

  while (deliveries[n - 1] === 0 && pickups[n - 1] === 0) {
    deliveries.pop();
    pickups.pop();
    n--;
  }

  let distance = n;

  while (deliveries.length !== 0 || pickups.length !== 0) {
    while (deliveries.length !== 0) {
      box += deliveries.pop();

      if (box > cap) {
        deliveries.push(box - cap);
        break;
      }
    }

    box = 0;

    while (pickups.length !== 0) {
      box += pickups.pop();

      if (box > cap) {
        pickups.push(box - cap);
        break;
      }
    }

    box = 0;

    answer += distance;

    distance = Math.max(deliveries.length, pickups.length);
  }
  return answer * 2;
}
