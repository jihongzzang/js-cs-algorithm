### **Event Loop**

- <a href="https://meetup.toast.com/posts/89">관련 자료</a>

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop">MDN</a>

- 자바스크립트의 동시성을 지원하는 것
- 자바스크립트는 `싱글스레드 언어(callStack이 하나)`이지만 논블로킹 방식의 비동기적인 동시성 언어
- 자바스크립트 엔진이 하는일은 `MemoryHeap` 과 `callStack`을 사용해서 우리가 작성한 자바스크립트 코드를 기계어로 바꾸어 컴퓨터가 실행 할 수 있도록 해줌.
- JS가 싱글 쓰레드 기반임에도 불구하고 동시성 언어라고 부르는 이유는 웹 브라우저가 제공하는 API를 통해 동시에 작업을 할 수 있기 때문그림으로

  <img src="https://miro.medium.com/max/1024/1*4lHHyfEhVB0LnQ3HlhSs8g.png"/>

- callStack

  - 호출 스택은 기본적으로 우리가 프로그램 상에서 어디에 있는지를 기록하는 자료구조

  - 만약 함수를 실행하면 함수는 호출 스택의 가장 상단에 위치하고. 함수의 실행이 끝날 때(리턴 값을 돌려줄 때), 해당 함수를 호출 스택에서 제거

- callbackQueue

  - 콜백이 큐에 쌓인다. 콜백큐의 경우 첫번째로 들어온것이 첫번째로 나감

> - stack 의 경우 (Last in first out)
>
> - que의 경우 (First in first out)

```js
console.log('Hi'); //-1
setTimeout(function cb1() {
  console.log('cb1');
}, 5000); //-3
console.log('Bye'); //-2
```

- task Queue

  - 비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역
  - 태스크 큐와는 별도로 프로미스의 후속처리는 micro task queue 에 보관

- event Loop

  - 콜 스택에 현재 실행중인 컨텍스트가 있는지, 그리고 태스크 큐에 대기중인 함수가 있는지 계속 확인
  - 만약 콜 스택이 비어있고 태스크 큐에 대기중인 함수가 있다면 이벤트 루프는 순차적으로 태스크 큐에 대기중인 함수를 콜스택으로 이동. 이때 콜스택으로 이동한 함수는 실행됨
  - 콜 스택이 비면 먼저 마이크로 태스크 큐에서 대기하고 있는 함수를 가져와 실행하고 마이크로 태스크 큐가 비면 태스크 큐에서 대기하고 있는 함수를 가져와 실행

- 자바스크립트 엔진은 싱글스레드로 동작하지만 브라우저는 멀티스레드로 동작한다.
