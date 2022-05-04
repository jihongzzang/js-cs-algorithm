### **디자인 패턴**

- 환경 내에서 반복적으로 일어나는 문제들을 어떻게 풀어나갈 것인가에 대한 일종의 솔루션

<a href="https://beomy.tistory.com/43">관련 블로그</a>

### - **MVC 패턴**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7IE8f%2FbtqBRvw9sFF%2FAGLRdsOLuvNZ9okmGOlkx1%2Fimg.png"/>

- MVC 패턴은 Model + View + Controller를 합친 용어

- Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분
- View : 사용자에서 보여지는 UI 부분
- Controller : 사용자의 입력(Action)을 받고 처리하는 부분

### - **MVC 실행순서**

- 사용자의 Action들은 Controller에 들어옴
- Controller는 사용자의 Action를 확인하고, Model을 업데이트
- Controller는 Model을 나타내줄 View를 선택
- View는 Model을 이용하여 화면을 나타냄.

### - **MVC 단점**

- 대규모 어플리케이션에서 모델과 뷰의 의존성이 커 유지보수가 어려워 질 문제가 있음

### - **MVP 패턴**

- MVP 패턴은 Model + View + Presenter를 합친 용어

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclZlsT%2FbtqBTLzeUCL%2FIDA8Ga6Yarndgr88g9Nkhk%2Fimg.png"/>

- Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분
- View : 사용자에서 보여지는 UI 부분
- Presenter : View에서 요청한 정보로 Model을 가공하여 View에 전달해 주는 부분

### - **MVP 실행순서**

- 사용자의 Action들은 View를 통해 들어옴
- View는 데이터를 Presenter에 요청
- Presenter는 Model에게 데이터를 요청
- Model은 Presenter에서 요청받은 데이터를 응답
- Presenter는 View에게 데이터를 응답
- View는 Presenter가 응답한 데이터를 이용하여 화면을 나타냄.

### - **MVP 단점**

- 어플리케이션이 복잡해 질 수록 View와 Presenter 사이의 의존성이 강해지는 문제가 있음

### - **MVVM 패턴**

- Model + View + View Model를 합친 용어

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCiXz0%2FbtqBQ1iMiVT%2FstaXr7UO95opKgXEU01EY0%2Fimg.png"/>

- Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분
- View : 사용자에서 보여지는 UI 부분
- View Model : View를 표현하기 위해 만든 View를 위한 Model이다.

### - **MVVM 실행순서**

- 사용자의 Action들은 View를 통해 들어옴
- View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달
- View Model은 Model에게 데이터를 요청
- Model은 View Model에게 요청받은 데이터를 응답
- View Model은 응답 받은 데이터를 가공하여 저장
- View는 View Model과 Data Binding하여 화면을 나타냄
- Command 패턴과 Data Binding을 활용해 뷰모델과 모델사이의 의존성을 없앰.

### - **MVVM 단점**

- 뷰모델의 설계가 어렵다.

### - **커맨드 패턴**

- 실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계

### - **싱글턴 패턴**

- 해당 클래스의 인스턴스가 하나만 만들어지고, 어디서든지 그 인스턴스에 접근할 수 있도록 하기 위한 패턴.

- 인스턴스를 하나의 고정메모리만 있기때문에, 메모리 낭비를 방지
