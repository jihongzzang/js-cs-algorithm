function solution(record) {
  const users = {};
  const orders = [];
  const results = [];

  for (let rec of record) {
    const [cmd, id, nickname] = rec.split(' ');

    if (cmd === 'Enter') {
      users[id] = nickname;
      orders.push([cmd, id]);
    } else if (cmd === 'Leave') {
      orders.push([cmd, id]);
    } else if (cmd === 'Change') {
      users[id] = nickname;
    }
  }

  for (let order of orders) {
    const [cmd, id] = order;
    if (cmd === 'Enter') {
      results.push(`${users[id]}님이 들어왔습니다.`);
    } else if (cmd === 'Leave') {
      results.push(`${users[id]}님이 나갔습니다.`);
    }
  }

  return results;
}

function solution2(record) {
  let answer = [];
  const map = new Map();

  for (let i = 0; i < record.length; ++i) {
    const [state, id, name] = record[i].split(' ');

    if (state == 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
      continue;
    }

    if (state == 'Enter') {
      answer.push([id, '님이 들어왔습니다.']);
    }

    map.set(id, name);
  }

  return answer.map(ele => map.get(ele[0]) + ele[1]);
}

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/42888
