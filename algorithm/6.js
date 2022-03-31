const solution = s => {
  let answer = 0;
  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);

  answer = Number(s);

  return answer;
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/81301

const solution2 = (participants, completion) => {
  participants.sort();
  completion.sort();

  for (let i = 0; i < participants.length; i++) {
    if (participants[i] !== completion[i]) {
      answer = participants[i];
      return answer;
    }
  }
};

//문제링크 => https://programmers.co.kr/learn/courses/30/lessons/42576
