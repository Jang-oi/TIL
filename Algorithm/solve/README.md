### K 번째 수
 
* https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
```javascript
function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++ ) {
        const test = array.slice(commands[i][0]-1, commands[i][1])
        test.sort(function (a, b) {
            return a - b;
        })
        answer.push(test[commands[i][2]-1])
    }
    return answer;
}
```
* sort 할 때 compareFunction 이 제공되지 않으면 문자열로 정렬함.
* 숫자를 비교할 땐 sort 함수에 정렬 순서를 정의! 

### 완주하지 못한 선수

* https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
```javascript
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    const size = participant.length;
    for (let i = 0; i < size; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
```
* arr.length 같은 경우 매번 루프 때 마다 사용하니 변수로 선언 하는게 효율적임.
* forEach 같은 경우 안에서 return 하면 undefined 값 나옴.

### 가운데 글자 가져오기

* https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
```javascript
function solution(s) {

    let answer = '';
    const test = s.length;
    if (test % 2 == 0) {
        answer = s.substring(test/2 - 1, test/2 + 1);
    } else {
        answer = s.substring(test/2, test/2 + 1);
    }
    return answer 
}
```

* 술 취한 상태에서 생각없이 품.
* substring 잘 쓰자.

### 서울에서 김서방 찾기

* https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript
```javascript
function solution(seoul) {
    let answer = '';
    seoul.forEach(function(data, index) {
        if(data === 'Kim') {
            answer =  '김서방은 ' + index + '에 있다'
        }
    })
    return answer;
}
```

* indexOf 를 활용 해보자. ex) return '김서방은 ' + seoul.indexOf('Kim') + '에 있다'; 로 끝남.

### 핸드폰 번호 가리기

* https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

```javascript
function solution(phone_number) {
    var answer = phone_number.substring(0, phone_number.length-4);
    var answer2 = phone_number.substr(phone_number.length-4,4);

    return answer.replace(/[0-9]/gi, '*').concat(answer2);
}
```

* 정규식 공부하자 ... 

### 두 개 뽑아서 더하기

* https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

```javascript
function solution(numbers) {
    const len = numbers.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    const set = new Set(arr)
    const answer = [...set]
    answer.sort(function (a, b) {
        return a - b;
    })
    return answer;
}
```

* Set - 중복을 제거한 값들의 집합
* Spread 연산자 공부하자 ex) [...set] 을 사용해서 set 객체를 answer 라는 배열에 담음. 

### 2016년 

* https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

```javascript
function solution(a, b) {
    const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date('2016', a-1, b).getDay()
    return arr[date];
}
```

* Date 짱