### **Map 과 Set**

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set">Map 공식문서</a>

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set">Set 공식문서</a>

- 객체 : 키가 있는 컬렉션을 저장함
- 배열 : 순서가 있는 컬렉션을 저장함

### **Map**

- 맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사.
- 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있다.

- `new Map()` – 맵을 만듭니다.
- `map.set(key, value)` – key를 이용해 value를 저장
- `map.get(key)` – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환
- `map.has(key)` – key가 존재하면 true, 존재하지 않으면 false를 반환
- `map.delete(key)` – key에 해당하는 값을 삭제
- `map.clear()` – 맵 안의 모든 요소를 제거
- `map.size` – 요소의 개수를 반환

```js
let map = new Map();

map.set('1', 'str'); // keyType : string
map.set(1, 'num'); // keyType : number
map.set(true, 'boolean'); // keyType : boolean

// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다.

console.log(map.get(1)); // 'num'
console.log(map.get('1')); // 'str'
console.log(map.size); // 3

let obj = new Object();

obj[1] = 3;

obj['1'] = 4;
// 객체는 키를 문자형으로 변환
console.log(obj);
```

```js
let jihong = { name: 'Jihong' };

let objectKeyMap = new Map();

//맵은 키로 객체를 허용
objectKeyMap.set(jihong, 123);

console.log(objectKey.get(john));
```

### **Set**

- 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션. 셋에 키가 없는 값이 저장

- `new Set(iterable)` – 셋을 만듬. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
- `set.add(value)` – 값을 추가하고 셋 자신을 반환
- `set.delete(value)` – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환
- `set.has(value)` – 셋 내에 값이 존재하면 true, 아니면 false를 반환
- `set.clear()` – 셋을 비운다.
- `set.size` – 셋에 존재하는 값의 개수 반환

```js
//방문자 방명록을 만든다고 가정, 한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황
//즉, 한 방문자는 '단 한 번만 기록’되어야 한다.

//이때 적합한 자료구조가 바로 셋

let set = new Set();

let jihong = { name: 'Jihong' };
let namju = { name: 'Namju' };
let hyelin = { name: 'Hyelin' };

set.add(jihong); // 등록
set.add(namju); // 등록
set.add(hyelin); // 등록
set.add(jihong); // 등록안됨
set.add(namju); // 등록안됨

// 셋에는 유일무이한 값만 저장됩니다.
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // Jihong, Namju, Hyelins
}
```

```js
let set2 = new Set(['oranges', 'apples', 'bananas']);

let set3 = set2.entries();

console.log(set3);

for (const entry of set3) {
  console.log(entry);
  // [ 'oranges', 'oranges' ]
  // [ 'apples', 'apples' ]
  // [ 'bananas', 'bananas' ]
}
```
