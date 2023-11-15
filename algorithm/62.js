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
