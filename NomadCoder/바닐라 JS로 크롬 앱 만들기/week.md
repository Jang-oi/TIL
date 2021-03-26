# 1일차

---

## 목적

* Javascript 로 구글 확장앱인 Momentum 과 비슷한 페이지를 만든다.
* 실시간 채팅, 실시간 날씨, 할일 목록 등을 보여주고 저장하는 페이지.

### Javascript

* 웹에 쓰이는 하나뿐인 프로그래밍 언어
* Backend 를 한다면 다른 언어에 대한 선택 폭이 넓지만 Frontend 는 Javascript 다.

### ECMAScript

* Javascript 에는 ECMAScript 라는게 있다. (ES5 = ECMAScript5)
* 모든 브라우져들이 ES5, ES6 등의 Specification(메뉴얼) 을 받아서 자기들 방식으로 실행
* 구글 크롬이 ES6를 지원한다고 하면 크롬 개발자들이 새로운 Specification 을 시행했다고 볼 수 있다 (새로운 메뉴얼, 안내문을 발행)

### VanillaJS

* 라이브러리나 프레임워크는 화장 같은 것
* 브라우저를 통해 제공된 Javascript
* 화장기가 없는 Javascript

---

* 우리가 배우는건 그냥 Javascript 가 아닌 컨셉을 배운다.
* Function 을 배우고 Variable 을 배우고 그외 조건들을 배운다.
* 이벤트, Class, Object, Arrays 등을 배운다.

---

# 2일차

---

### Variable

* let, var 로 선언
    * let - 재 선언 금지, 재 할당 가능
    * var - 재 선언 가능, 재 할당 가능
   ```javascript
    // 불가능
    let a = 1
    let a = 2
    // 가능 
    let b = 1
    b = 2
    var c = 1;
    var c = 2;

* 변경되거나 변경될 수 있는 것
* 변수선언 규칙 Create -> Init -> Use 필요에 따라서 Create, Init -> Use

### Constant

* const 로 선언
* 안정적, 변하지 않는 것

### Data Types

* 변수 선언할 때는 기본으로 const 로 사용! 필요 할 때만 let
* Camel case 방식으로 선언해야함 변수명은 언제나 소문자로 시작해서 중간에 스페이스 대신 대문자로 쓴다.
    * ex) daysOfWeek

* String
    * Text String 의미
    * const date = "2021.03.09";

* Boolean
    * True / False
    * 바이너리 세계에선 0,1로 구분 true 1 / false 0
    * const a = true;

* Number
    * const num = 200;

* Float
    * Floating Number 의 줄임 말. 소수 표현
    * const a = 1.2;

* Array
    * 데이터를 저장하는 곳
    * const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri","Sat", "Sun"];
    * 컴퓨터는 사람이 아니기 때문에 0부터 세서 수요일을 꺼내고 싶으면 console.log(daysOfWeek[2])으로 해야함.

* Object
    * Array 와의 차이는 각 value 에 이름을 줄 수 있음.
    * {} 컬리브라켓을 사용해서 선언
    * const info = { name :"jh", age : "29" }
    * console.log(Info.name) 으로 이름 값 출력 가능
    * const 로 선언되어서 info 자체는 못바꾸지만 안에 있는 값은 변경 가능

---

# 3일차

---

### Function

* 어떤 것의 기능, 기능 적인 것.
* 한 코드 조각으로 원하는 만큼 쓸 수 있는 코드
* 자바스크립트에서의 정의

```javascript
// 함수를 정의하는 방법
function sayHello() {
    console.log('Hello!');
}

// 함수를 실행하면 Hello! 가 출력
sayHello();
// log 도 함수, console object 안에 있는 함수
console.log("Hi")
```

### Argument

* 함수는 인자(argument) 를 받는다.
* 변수 같은 것. 우리가 주는 값을 받음

```javascript
// potato의 값은 우리가 원하는 값 아무거나 가능
// 변수명이며 parameter, argument 라 함
function sayHello(potato) {
    console.log('Hello!', potato);
//console.log 는 2개의 argumnet 를 받고 있다.
}

sayHello("Nicolas");

// 출력 -> Hello! Nicolas
function sayHello(name, age) {
    console.log('Hello!', name, "you have", age);
}

sayHello("Nicolas", 15);
// 출력 -> Hello! Nicolas you have 15
```

### More Function

* ` (백틱) 으로 사용하는 방법.

```javascript
function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Nicolas", 15);
// 출력 -> Hello! Nicolas you are 15 years old
```

### return

* 내가 돈을 내면 반드시 잔돈을 받는 느낌

```javascript
function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

const greetNicolas = sayHello("Nicolas", 15)
// greetNicolas 는 sayHello 함수의 리턴 값
// greetNicolas 는 sayHello 를 실행된 결과 값
console.log(greetNicolas)
// undefined 
// sayHello 함수는 console.log 로 인해 이미 출력이 끝남
// 결과적으로 return 값이 없기 때문에 정의되는 것이 없다는 undefined가 출력

// sayHello 함수에 console.log 가 아닌 return 값을 넣으면
console.log(greetNicolas)
// 정상적으로 출력함.

// console.log 와 같이 calculator.plus (5, 5) 와 같이 만들어보자.
const calculator = {
    plus: function (a, b) {
        return a + b;
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)

// console, calculator 두개 다 object 이며 log(), plus() 둘 다 function
```

### JS DOM Functions

* Document Object Model
* 자바스크립트는 html 태그를 가져다가 객체로 만들어줌
* 우리가 배울 모든 함수들, 우리가 찾게 될 모든 객체들의 함수들 DOM 형태로 변경 가능
* document 또한 object document. << 을 쓰면 많은 function 들이 나옴

### Modifying the DOM with JS

* console.dir(document, 선언한 객체?) 을 하면 모든 이벤트(함수)가 다 나옴
* HTML 을 수정하고 어떻게 숨기고 click 을 감지하는 지 등이 다 가능함
* querySelector은 노드의 첫번 째 자식을 반환함 그 의미는 document 로 가서 모든 자식들 중에서 찾으려고한다.
* document.querySelector("#title") < id 로 찾음 class 로 찾고싶으면 (".title') 이런식으로 편하게 가능

### Events and event handlers

* 이벤트는 웹 사이트에서 발생하는 것들을 말함
  * click, resize, submit, input, change, load, closing 등 모두 이벤트
* 이벤트를 가로 챌 수 있음 
* 자바스크립트는 이벤트를 받기를 기다리고 있다.
```javascript
function handleResize() {
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize);
// addEventListener 은 이벤트, 이벤트에서 다룰 함수를 적음(listner)
// window resize 는 handleResize 를 호출
// handleReisze() 라고 하면 지금 바로 호출 하라는 의미
// handleResize 는 함수를 호출. 내가 필요한 시점에, 이벤트가 발생한 시점에
```
---

# 4일차

---

### If, else, and, or

* if-else 는 같은 컨셉으로 모든 프로그래밍 언어에 있다고 봐도됨
* and = 조건이 전부 참 or = 조건 중 하나라도 참
* MDN 활용!

---

# 5일차

---

### Marking a JS Clock part One

* 현재 시간을 보여주는 JS 파일을 만듬.
* 하지만 이 방법은 const date = new Date()를 선언한 시점의 시간이 저장 되기 때문에
새로고침 하지 않는 이상 업데이트가 안됨 업데이트는 part Two 에서..
```javascript
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

function getTiME() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTiME();
}
init();
```

### Marking a JS Clock part Two

* setInterval() - 인자를 function, 시간 을 받아서 시간마다 function 실행함.
```javascript
setInterval(getTime, 1000);
// 1초마다 getTime 함수 실행
```
* 삼항연산자(작은if문)
```javascript
${seconds < 10 ? `0${seconds}` : seconds}`
// seconds 가 10 보다 작다면 0${seconds} 실행 :(else) seconds 실행. 0~9초 일경우 01, 02 , 03... 
```

---

# 6일차

---

### Saving the User Name

* document.querySelector() - 원하는 셀렉터를 클래스, 아이디, 태그 다가져옴
* local storage - key, value(문자열) 로 이뤄진 웹의 저장소 
* User Name 을 입력받아 local storage 에 저장하고 local storage 값을 뿌려주는 앱을 만듬.
* classList, css 를 이용해서 값이 없다면 form 에 showing 이라는 class 를 추가하여 css 로 form 이 보이게 만들고
값이 있다면 form 의 showing 을 삭제하면서 form 이 아닌 H4 태그에 showing 을 추가하여 form 이 아닌 H4가 보이게 만듬
```javascript
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");
// 이름은 직관적으로 선언.
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
// class나 key 값을 추가 할 때는 하드코딩이 아닌 선언을 통해서.
```  


