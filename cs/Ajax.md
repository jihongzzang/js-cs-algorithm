### **Ajax**

- Asynchronous JavaScript and XML
- `자바스크립트`를 사용하여 `브라우저가 서버에게 비동기방식으로 데이터를 요청`하고, `서버가 응답한 데이터를 수신`하여 `웹페이즐 동적으로 갱신하는 프로그래밍 방식`
- Ajax는 브라우저에서 제공하는 Web API XMLHttpRequest객체를 기반으로 동작

- 이전의 웹페이지는 html태그로 시작해서 html태그로 끝나는 완전한 HTML을 서버로부터 전송받아 웹페이지 전체를 처음부터 다시 렌더링
- 이때문에 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 다시 렌더링했다.
- 클라와 서버는 통신을 동기방식으로 동작해서 서버로부터 응답이 있을 때 까지 다음 처리는 블로킹 된다.

- Ajax는 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없는 부분은 다시 렌더링하지 않고, 변경이 필요한 부분만 렌더링되도록 해주었다.

- JSON
  - 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트
- JSON.stringify
  - 메서드는 객체를 JSON 포맷의 문자열로 변환한다.

```js
const obj = {
  name: '지홍',
  age: 20,
  alive: true,
  hobby: ['여행', '테니스'],
};

const json = JSON.stringify(obj);

console.log(json);
//'{"name":"지홍","age":20,"alive":true,"hobby":["여행","테니스"]}'

const json2 = JSON.stringify(obj, null, 2);
console.log(json2); // JSON 포맷의 문자열로 변환하면서 들여쓰기 함.
```

- JSON.parse
  - 메서드는 JSON 포맷의 문자열을 객체로 변환.
