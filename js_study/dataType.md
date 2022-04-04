### **DataType**

- 자바스크립트가 데이터를 처리하는 과정을 보자

### **데이터 타입의 종류**

> 타입에는 크게 두가지가 있다. 원시형 타입과 참조형 타입 두가지로 나뉜다.

- 원시형 : `number` | `string` | `boolean` | `null` | `undefined` | `symbol`
- 참조형 : `Object` | `Array` | `Function` | `Data` | `RegExp`

> - stackMemory : 참조형 데이터 | 동적할당
> - heapMemory : 변수 | 기본형 데이터 | 정적할당

```js
var a; //1003번에 저장
a = 'abc'; //5004번에 저장하고 1003주소에서 값@5004
a = 'abcdef'; //5005번에 저장 1003주소에서 값 @5005
```

|  주소  | ... | 1002 |    1003     | 1003 | 1004 | 1005 |
| :----: | :-: | :--: | :---------: | :--: | :--: | :--: |
| 데이터 |     |      | 이름: a 값: |      |      |      |

|  주소  | ... | 5002 | 5003 | 5004  |   5005   | ... |
| :----: | :-: | :--: | :--: | :---: | :------: | :-: |
| 데이터 |     |      |      | "abc" | "abcdef" |     |

```js
var obj = {
  a: 1,
  b: 'bbb',
};

var obj;
obj = {
  a: 1,
  b: 'bbb',
};
obj.2
```

|  주소  | ... | 1002 |       1003       | 1004 | 1005 | ... |
| :----: | :-: | :--: | :--------------: | :--: | :--: | :-: |
| 데이터 |     |      | 이름: a 값:@5002 |      |      |

|  주소  | ... |  5002   | 5003 | 5004  | 5005 | ... |
| :----: | :-: | :-----: | :--: | :---: | :--: | :-: |
| 데이터 |     | @7103~? |  1   | "bbb" |  2   |     |

|  주소  | ... |       7103        |       7104       | 7105 | 1004 | ... |
| :----: | :-: | :---------------: | :--------------: | :--: | :--: | :-: |
| 데이터 |     | 이름: a 값 :@5005 | 이름: b 값:@5004 |      |      |     |

|  주소  | ... | 8104 |    8105     | 8106 | 8107 | ... |
| :----: | :-: | :--: | :---------: | :--: | :--: | :-: |
| 데이터 |     |      | 이름: a 값: |      |      |     |

```js
var obj = {
  x: 3,
  arr: [3, 4],
};
```

### **값을 직접 저장하는 방식 vs 값의 주소를 저장하는 방식**

> 30바이트가 넘는 문자열을 기준으로
>
> - `30 * x byte`
> - `30 + x byte`

#### **직접저장**

- 데이터 할당시에는 빠름
- 비교에 비용이 많이 듦
- 메모리 낭비가 심함

#### **주소를 저장**

- 데이터 할당시에는 느림
- 비교에 비용이 들지 않음 => 같은 값이 오직 하나만 존재 => 불변값 => 기본형 데이터가 불변값인 이유
- 메모리 낭비 최소화

```js
var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;
```