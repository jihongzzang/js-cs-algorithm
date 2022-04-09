### **REST API**

#### **REST(Representational State Transfer)**

- API 시스템을 구현하기 위한 아키텍쳐 중 하나(Graphql, SOAP, GRPC, REST, etc)

#### **RESTful**

- `REST`의 기본 원칙을 성실히 지킨 서비스 디자인을 `RESTful`이라고 표현

#### **REST API**

- `REST를 기반으로 서비스 API구현한 것`
- `자원`(resourece), `행위`(verb), `표현`(representations) 3가지 요소로 구성

> - 자원 : 자원 | 표현 방법 - URI
> - 행위 : 자원에 대한 행위 | 표현 방법 - HTTP 요청 메서드
> - 표현 : 자원에 대한 행위의 구체적 내용 | 표현방법 - 페이로드

  <img src="https://media.vlpt.us/images/jujihong2/post/5d4c812c-a65f-49de-86cc-f40e78510084/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-26%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.52.36.png" alt="rest api"/>

#### **URI**

- 해당 사이트의 특정 자원의 위치를 나타내는 유일한 주소
  > https://finance.naver.com/login<br>https://finance.naver.com/news

#### **HTTP Method**

- HTTP request가 의도하는 action을 정의한 것

#### **Payload**

- HTTP request에서 server로 보내는 데이터 (body)

#### **REST API 설계원칙**

- URI는 리소스를 표현해야 한다.
- 리소스에 대한 행위는 HTTP 요청 메서드로 표현

#### **HTTP 요청 메서드**

- `GET` : 모든 / 특정 자원 취득 | `payload` : X

- `POST` : 자원 생성 | `payload` : O

- `PUT` : 자원의 전체 교체 | `payload` : O

- `PATCH` : 자원의 일부 수정 | `payload` : O

- `DELETE` : 모든/특정 자원 리소스 삭제 | `payload` : X

#### **요청 메서드를 캐시에 대한 관점에서**

- 캐시란 데이터 값을 미리 복사해 놓는 임시장소
- 웹 캐시는 레이턴시와 네트워크 트래픽을 줄여줌으로써 리소스를 보여주는 데에 필요한 시간을 줄여준다.
- HTTP 캐싱을 활용하면 웹 사이트가 좀 더 빠르게 반응하도록 만들 수 있다.

- `GET` - 일반적으로 브라우저에서 캐시할 수 있다

- `POST` - 일반적으로 캐시가 불가능하다. 하지만 Expires와 Cache-Control header를 이용하여 구현하여 응답할 수 있다.

- `PUT`, `DELETE` - 해당 요청은 캐시를 적용할 수 없습니다.
