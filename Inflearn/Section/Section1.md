# 섹션 1. 함수형 프로그래밍 개요

## 성공적인 프로그래밍

* 모든 프로그래밍 패러다임은 성공적인 프로그래밍을 위해 존재
* 좋은 프로그램은 사용성, 성능, 확작성, 기획변경에 대한 대응력이 좋다
* 이것들을 효율적이고 생상적으로 이루는 일이 성공적인 프로그래밍

## 함수형 프로그래밍

* 성공적인 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임
* 부수 효과를 미워한다 => 순수 함수를 만든다.
  (순수 함수 => 부수 효과가 없는 함수, 동일한 값을 리턴하는 함수, 리턴 값 외에는 외부와 소통하는 게 없는 함수)
* 조합성을 강조한다 => 모듈화 수준을 높인다
* 순수 함수 => 오류를 줄이고 안정성을 높인다 => 모듈화 수준이 높다 => 생산성을 높인다.

```javascript
// 순수 함수
function add(a, b) {
    return a + b;
}

// 인자를 동일하게 넣지만 c 라는 변수에 의해 값이 달라지면 
// 순수함수가 아님
var c = 10;
function add2(a, b) {
    return a + b + c;
}

console.log(add2(10,2))
console.log(add2(10,3))
c = 20;
console.log(add2(10,2))
console.log(add2(10,3))

// 부수효과가 있는 함수이며 순수함수가 아님
var c = 20;
function add3(a, b) {
    c = b;
    return a + b;
}

console.log('c :', c) 20
console.log(add3(20,30));
console.log('c :', c) 30

var obj1 = { val : 10 };
function add4(obj, b) {
    obj.val += b;
}
console.log(obj1.val);
add4(obj1, 20);
console.log(obj1.val);

// 순수 함수
var obj1 = { val : 10};
function add5(obj, b) {
    return {val : obj.val + b}
}

// 일급 함수
// 변수에 함수를 담을 수 있다.
var f1 = function(a) {return a * a;};

var f2 = add;

function f3(f) {
    return f();
}
// f3 에게 인자로 함수를 넘김.
// f3을 실행하면서 익명함수인 10을 리턴하는 함수를 넣음.
f3(function () {return 10;});
f3(function () {return 20;});
// f3은 함수를 받아서 함수내부에서 함수를 평가한다음에 리턴하는 함수

// add_maker

function add_maker(a) {
    return function(b) {
        return a + b;
    }
}

var add10 = add_maker(10);
add10(20);

function f4(f1,f2,f3) {
    return f3(f1() + f2());
}

f4(
    function() {return 2;},
    function() {return 1;},
    function(a) {return a * a;});

```

* 함수형 프로그래밍에서는 순수 함수를 통해서 조합성을 강조하는 이유가
  평가 시점을 다루는 것을 통해서 다양한 로직을 만들고 다양한 이점을 만들기 위해
* 값이 참조되어 변화가 이뤄지거나 부수효과가 있어 외부의 값의 변화에 따라 값이 바뀌면 시점의 문제, 초기 값에 대한 문제 등으로 좋은 프로그래밍이 아니다.

---




