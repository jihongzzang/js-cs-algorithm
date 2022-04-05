var user = {
  name: 'jaenam',
  gender: 'male',
  urls: {
    portfolio: 1,
    blog: 2,
    facebook: 3,
  },
};

// var changeName = function (user, newName) {
//   var newUser = user;
//   newUser.name = newName;
//   return newUser;
// };

// var changeName = function (user, newName) {
//   return {
//     name: newName,
//     genter: user.gender,
//   };
// };

// var user2 = changeName(user, 'Jung');

var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user2 = copyObject(user);
user2.name = 'Jung';

user.urls.portfolio = 2;

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
} // 출력

console.log(user2.name === user.name); //false
console.log(user2.urls.portfolio === user.urls.portfolio); //true

user2.urls = copyObject(user.urls);
console.log(user2.urls.portfolio === user.urls.portfolio); // false

var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

var obj = { a: 1, b: { c: null, d: [1, 2] } };
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
