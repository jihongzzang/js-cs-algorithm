const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const url = 'https://jsonplaceholder.typicode.com';
promiseGet(`${url}/posts/1`)
  .then(({ userId }) => promiseGet(`${url}/posts/${userId}`))
  .then(userInfo => console.log(userInfo))
  .catch(err => console.error(err));

(async () => {
  const { userId } = await promiseGet(`${url}/posts/1`);
  const userInfo = await promiseGet(`${url}/posts/${userId}`);
  console.log(userInfo);
})();

const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log());

const resolvedPromise2 = new Promise(resolve => resolve([1, 2, 3]));
resolvedPromise2.then(console.log());

const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log());

const rejectedPromise2 = new Promise((_, reject) =>
  reject(new Error('Error!'))
);
rejectedPromise2.catch(console.log());

const requestData1 = () =>
  new Promise(resolve => setTimeout(() => resolve(1), 3000));

const requestData2 = () =>
  new Promise(resolve => setTimeout(() => resolve(2), 2000));

const requestData3 = () =>
  new Promise(resolve => setTimeout(() => resolve(3), 1000));

const res = [];

console.time('startEnd');

requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log(res);
    console.timeEnd('startEnd');
  })
  .catch(console.error);

console.time('startEnd2');

Promise.all([requestData1(), requestData2(), requestData3()])
  .then(result => {
    console.timeEnd('startEnd2');
    console.log(result);
  })
  .catch(console.error);

const githubIds = ['jihongzzang', 'jersig', 'ungmo2'];

Promise.all(
  githubIds.map(id => promiseGet(`https://api.github.com/users/${id}`))
)
  .then(users => users.map(user => user.name))
  .then(result => console.log(result))
  .catch(console.error);

Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error!')), 1000)
  ),
]).then(result => console.log(result));

setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
