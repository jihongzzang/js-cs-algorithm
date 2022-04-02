const solution = (array, commands) => {
  let answer = [];
  for (let i in commands) {
    let parameterI = commands[i][0] - 1;
    let parameterJ = commands[i][1];
    let k = commands[i][2] - 1;
    answer.push(
      [...array].slice(parameterI, parameterJ).sort((a, b) => a - b)[k]
    );
  }

  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/12921
