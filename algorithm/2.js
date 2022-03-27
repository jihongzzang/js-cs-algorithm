const solution = new_id => {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\.\-]/g, '')
    .replace(/[\.]{2,}/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '');
  if (new_id.length === 0) {
    new_id = 'a';
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15).replace(/\.$/, '');
  }
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }
  return new_id;
};

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/72410
