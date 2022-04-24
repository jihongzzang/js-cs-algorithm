### **트리구조**

- 트리 (Tree)란 노드들이 나무 가지처럼 연결된 비선형 계층적 자료구조

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeoNuG%2Fbtq1Eo7t7Xk%2F0bPk7BzhiruKSsgtiubvK0%2Fimg.png">

- 컴퓨터의 direcory구조가 트리 구조의 대표적인 예

### **트리구조의 특징**

- 하나의 루트 노드와 0개 이상의 하위 노드로 구성
- 데이터를 순차적으로 저장하지 않기 때문에 비선형적 구조
- 트리내에 또 다른 트리가 있는 재귀적 자료구조
- 노드 간에 부모 자식 관계를 갖고 있는 계층형 자료구조이며 모든 자식 노드는 하나의 부모 노드만 갖는다.
- 노드가 n개인 트리는 항상 n-1개의 간선(edge)을 가진다.

### **사례**

- 이진트리 처럼 효율적인 검색 속도
- Heap 역시도 트리로 된 자료구조
- 데이터베이스 인덱싱을 구현하는데 트리를 사용

### **이진트리 (Binary Tree)**

- 각 노드의 차수(자식 노드)가 2 이하인 트리

### **트리 구조에서 사용되는 용어**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcA6btV%2Fbtq1z5fVwht%2F96SGFKq5O3QtaUBabJKibK%2Fimg.png">

- **노드(Node)**

  - 트리를 구성하고 있는 기본 요소
  - 키 또는 값과 하위 노드에 대한 포인터를 가짐
  - A,B,C,D,E,F,G,H,I,J

- **간선(Edge)**

  - 노드와 노드 간의 연결선

- **루트 노드(RootNode)**

  - 트리구조에서 부모가없는 최상위 노트
  - A

- **부모 노드(Parent Node)**

  - 자식 노드를 가진 노드
  - H, I에 부모노드는 D

- **자식 노드(Child Node)**

  - 부모 노드의 하위 노드
  - 노드 D의 자식 노드는 H, I

- **형제 노드 (Sibling node)**

  - 같은 부모를 가지는 노드
  - H, I는 같은 부모를 가지는 형제 노드

- **외부 노드(external node, outer node), 단말 노드 (terminal node), 리프 노드(leaf node)**

  - 자식 노드가 없는 노드
  - H, I, J, F, G

- **내부 노드 (internal node, inner node), 비 단말 노드 (non-terminal node), 가지 노드 (branch node)**

  - 자식 노드 하나 이상 가진 노드
  - A, B, C, D, E

- **깊이 (depth)**

  - 루트에서 어떤 노드까지의 간선(Edge) 수
  - 루트 노드의 깊이 : 0
  - D의 깊이 : 2

- **높이 (height)**

  - 어떤 노드에서 리프 노드까지 가장 긴 경로의 간선(Edge) 수
  - 리프 노드의 높이 : 0
  - A 노드의 높이 : 3

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMJU7c%2Fbtq1EoyuITO%2FNzwbe1WYQ4WlcY17cEENYk%2Fimg.png">

- **Level**

  - 루트에서 어떤 노드까지의 간선(Edge) 수

- **Degree**

  - 노드의 자식 수
  - Leaf node의 degree : 0; A의 degree : 2

- **Path**

  - 한 노드에서 다른 한 노드에 이르는 길 사이에 놓여있는 노드들의 순서
  - A & H 경로 : A-B-D-H

- **Path Length**

  - 해당 경로에 있는 총노드의 수
  - A & H 경로 길이 : 4

- **Size**

  - 자신을 포함한 자손의 노드 수
  - 노드 B의 size : 6

- **Width**

  - 레벨에 있는 노드 수
  - Level 2 width : 4

- **Breadth**

  - 리프 노드의 수
  - Breadth : 5

- **Distance**

  - 두 노드 사이의 최단 경로에 있는 간선(Edge)의 수
  - D와 J의 Distance : 3

- **Order**

  - 부모 노드가 가질 수 있는 최대 자식의 수
  - Order 3 : 부모 노드는 최대 3명의 자식을 가질 수 있다.
