//return 없이도 클로저가 발생하는 경우

//setInterval / setTimeout

//별도의 외부객체인 window의 메서드에 전달할 콜백 함수 내부에서 지역 변수를 참조

(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
    }

    console.log(a);
  };

  intervalId = setInerval(inner, 1000);
})();

//메모리 누수 방지

(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null;
    }

    console.log(a);
  };

  intervalId = setInerval(inner, 1000);
})();

//eventListener

// 별도의 외부객체인 DOM의 메서드에 등록할 handle함수 내부에서 지역변수를 참조

(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function () {
    console.log(++count, 'times clicked');
  });
  document.body.appendChild(button);
})();

//메모리 누수 방지

(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function () {
    console.log(++count, 'times clicked');
    if (count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickhandler = null;
    }
  };

  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();

//콜백함수와 클로저

// 콜백함수 내부에서 외부 데이터를 사용하고자 할때

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function () {
    alert(`your choice is ${fruit}`);
  });
  $ul.appendChild($li);
});

document.body.appendChild($ul);

var alertFruit = function (fruit) {
  alert(`your choice is ${fruit}`);
};

fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit);
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[1]);

fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});

//여기서 이벤트 객체가 인자로 넘어오는 순서가 바뀌는 점 및 함수 내부에서의 this가 원래의 그것과 달라지는 점

//이러한 문제를 해결하기 위해 고차함수를 활용하여 해결
//고차함수란 함수를 인자로 받거나 함수를 리턴하는 함수

var alertFruitBuilder = function (fruit) {
  return function () {
    alert(`your choice is ${fruit}`);
  };
};

fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder);
  $ul.appendChild($li);
});

//접근권한제어

var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), //연료
  power: Math.ceil(Math.random() * 3 + 2), //연비
  moved: 0, //총 이동거리
  run: function () {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log('이동불가');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(`${km}km 이동 (총 ${this.moved}km)`);
  },
};

car.fuel = 10000;
car.moved = 1000;
car.power = 100;

//이렇게 되면 맘대로 값을 바꿔버릴 수 있다.

var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10);
  var power = Math.ceil(Math.random() * 3 + 2);
  var moved = 0;
  return {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(`${km}km 이동 (총 ${moved}km)`);
    },
  };
};

var car = createCar();

// run메서드를 다른 내용으로 어뷰징은 가능하지만 앞선 코드보다 안전한 상태

// 어뷰징을 막자!

var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10);
  var power = Math.ceil(Math.random() * 3 + 2);
  var moved = 0;
  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(`${km}km 이동 (총 ${moved}km)`);
    },
  };
  Object.freeze(publicMembers);
  return publicMembers;
};

// 부분 적용 함수

var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var addPartial = add.bind(null, 1, 2, 3, 4, 5);
addPartial(4, 5, 6, 7, 8); //이때 값이 출력됨
