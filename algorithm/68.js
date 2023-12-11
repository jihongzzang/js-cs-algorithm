// https://school.programmers.co.kr/learn/courses/30/lessons/17683 (방금 그곡)

function solution(m, musicinfos) {
  var answer = [];

  let song = [];
  for (let i = 0; i < musicinfos.length; i++) {
    let start, end, title, code;
    let temp = musicinfos[i].split(',');
    start = temp[0];
    end = temp[1];
    title = temp[2];
    code = temp[3]
      .replace(/(C#)/g, 'c')
      .replace(/(D#)/g, 'd')
      .replace(/(F#)/g, 'f')
      .replace(/(G#)/g, 'g')
      .replace(/(A#)/g, 'a');
    song.push({ start: start, end: end, title: title, code: code });
  }

  for (let i = 0; i < song.length; i++) {
    let time = song[i].start.split(':');
    time = time.concat(song[i].end.split(':'));

    let playTime = 60 * (time[2] - time[0]) + (time[3] - time[1]);
    song[i].playTime = playTime;
    if (playTime < song[i].code.length) {
      song[i].code = song[i].code.slice(0, playTime);
    } else {
      song[i].code = song[i].code.repeat(playTime / song[i].code.length + 1);
    }
  }

  m = m
    .replace(/(C#)/g, 'c')
    .replace(/(D#)/g, 'd')
    .replace(/(F#)/g, 'f')
    .replace(/(G#)/g, 'g')
    .replace(/(A#)/g, 'a');
  for (let i = 0; i < song.length; i++) {
    if (song[i].code.includes(m)) answer.push(song[i]);
  }

  answer.sort((a, b) => {
    let A = a.playTime;
    let B = b.playTime;
    if (A > B) return -1;
    else if (A < B) return 1;
    else return 0;
  });

  if (answer.length === 0) return '(None)';
  return answer[0].title;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/155651 (호텔 대실)

function getNextTime(endTime) {
  const next = endTime.split(':');

  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

function solution(book_time) {
  book_time.sort();

  const room = [];

  book_time.forEach(t => {
    const tmp = t[0].split(':');
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = room.findIndex(e => e <= startTime);

    if (idx === -1) room.push(getNextTime(t[1]));
    else room[idx] = getNextTime(t[1]);
  });

  return room.length;
}
