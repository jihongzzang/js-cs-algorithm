function solution(word) {
  const words = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const convertWord = word.split('');
  const plus = [781, 156, 31, 6, 1];
  const result = convertWord.reduce((acc, curr, idx) => {
    return acc + words[curr] * plus[idx] + 1;
  }, 0);

  return result;
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/84512

function changeNumber(s) {
  return s.replace(/[0]/gi, '').length.toString(2);
}

function solution(s) {
  let temp = s;
  let count = 0;
  let deleteZeroCnt = (s.match(new RegExp('0', 'g')) || []).length;

  while (temp !== '1') {
    temp = changeNumber(temp);
    console.log(temp);
    count++;
    deleteZeroCnt += (temp.match(new RegExp('0', 'g')) || []).length;
  }

  return [count, deleteZeroCnt];
}

// 문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/70129
