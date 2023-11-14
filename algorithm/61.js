// https://school.programmers.co.kr/learn/courses/30/lessons/17684 (압축)

function solution(msg) {
  const words = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let before = '';
  const answer = [];

  for (let i = 0; i < msg.length; i++) {
    before += msg[i];

    if (!words.includes(before)) {
      answer.push(words.indexOf(before.slice(0, -1)) + 1);
      words.push(before);
      before = msg[i];
    }
  }

  if (before) answer.push(words.indexOf(before) + 1);
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/49993 (스킬트리)

function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
    .map(x => x.replace(regex, ''))
    .filter(x => {
      return skill.indexOf(x) === 0 || x === '';
    }).length;
}
