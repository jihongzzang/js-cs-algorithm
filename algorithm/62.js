//https://school.programmers.co.kr/learn/courses/30/lessons/17686 (파일명 정렬)

function solution(files) {
  var answer = [];

  let fileObj = [];

  files.forEach(ele => {
    let head = '';
    let number = '';
    let tail = '';

    [...ele].forEach(v => {
      if (isNaN(parseInt(v)) && !number.length) {
        head += v;
      } else if (
        !isNaN(parseInt(v)) &&
        tail.length === 0 &&
        number.length < 5
      ) {
        number += v;
      } else {
        tail += v;
      }
    });

    fileObj.push({ head, number, tail });
  });

  fileObj = fileObj.sort((a, b) => {
    const aHead = a['head'].toLowerCase();
    const bHead = b['head'].toLowerCase();

    const headCompare = aHead.toLowerCase().localeCompare(bHead.toLowerCase());

    if (headCompare !== 0) return headCompare;

    return parseInt(a['number']) - parseInt(b['number']);
  });

  answer = fileObj.map(ele => ele['head'] + ele['number'] + ele['tail']);

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/132265 (롤케이크 자르기)

function solution(topping) {
  var answer = 0;

  const [bro1Set, bro1Arr, bro2Set, bro2Arr] = [new Set(), [], new Set(), []];

  topping.forEach((ele, i) => {
    const reverse = topping.at(-i);
    bro1Set.add(ele);
    if (i !== 0) {
      bro2Set.add(reverse);
    }
    bro1Arr.push(bro1Set.size);
    bro2Arr.push(bro2Set.size);
  });

  answer = bro1Arr.reduce(
    (acc, curr, i) => (curr === bro2Arr.at(-i - 1) ? acc + 1 : acc),
    0
  );

  return answer;
}
