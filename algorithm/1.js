const solution = (id_list, report, k) => {
  const answer = new Array(id_list.length);

  answer.fill(0);

  const report_list = {};

  id_list.map(user_id => {
    report_list[user_id] = [];
  });

  report.map(users => {
    const [user_id, report_id] = users.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
};

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

solution(id_list, report, k);

//문제 링크 => https://programmers.co.kr/learn/courses/30/lessons/92334
