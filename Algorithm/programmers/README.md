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

### 나누어 떨어지는 숫자 배열

* https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

```javascript
function solution(arr, divisor) {
    var answer = [];
    arr.forEach(function(item){
        if(item % divisor === 0) {
            answer.push(item)
        }
    })
    if(answer.length === 0) {
        answer.push(-1)
    }
    return answer.sort(function (a, b) {
        return a-b;
    });
}
```

* ES6 를 배워서 활용해봐야하나 ...
* filter, =>, 삼항 연산자 등 활용도를 높일 것.

### 문자열 내 p와 y의 개수

* https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

```javascript
function solution(s){
    let test = 0;
    let test2 = 0;
    for(let i = 0; i < s.length; i++) {
        const a = s.charCodeAt(i);
        if (a == 112 || a == 80) {
            test++;
        } else if (a == 121 || a == 89) {
            test2++;
        }
    }
    return test == test2 ? true : false;
}
```

* match, split 을 생각했으면 ...

### 같은 숫자는 싫어

* https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

```javascript
function solution(arr)
{
    let answer = arr.filter((data, index) => {
        return data != arr[index+1]
    })
    return answer
}

```

* filter 를 더 공부하자.

### 신규 아이디 추천

* https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

```javascript
function solution(new_id) {
    const answer =
        new_id.toLowerCase()
            .replace(/[~!@#$%^&*()=+\[{\]}:?,<>\/]/g, '')
            .replace(/\.+/g, '.')
            .replace(/^\.|\.$/g, '')
            .replace(/^$/, 'a')
            .substring(0,15)
            .replace(/\.$/,'')
    return answer.padEnd(3, answer.charAt(answer.length-1))
}
```

* 정규식, padEnd, padStart 굿

### 제일 작은 수 제거하기

* https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

```javascript
function solution(arr) {
    let min = arr[0];
    arr.forEach((val, index) => {
        if(arr[index] < min) {
            min = arr[index];
        }
    })
    let answer = arr.filter((data) => {
        return data != min;
    })
    return arr.length == 1 ? [-1] : answer;
}
```

* Math.min.apply() 사용 하면 끝..

### 문자열 내 마음대로 정렬하기

* https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

```javascript
function solution(strings, n) {

    strings.forEach((val, index) => {
        strings[index] = strings[index][n] + strings[index];
    })
    strings.sort();

    strings.forEach((val, index) => {
        strings[index] = val.slice(1)
    })

    return strings;
}
```

* sort 를 직접 옵션? 을 준다면 .. 더 효율적인 방법이 나올듯

### 모의고사

* https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

```javascript
function solution(answers) {
    const answer = [];
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let val = [0, 0, 0];
    answers.forEach((value, index) => {
        if (arr[index % 5] == answers[index]) {
            val[0]++;
        }
        if (arr2[index % 8] == answers[index]) {
            val[1]++;
        }
        if (arr3[index % 10] == answers[index]) {
            val[2]++;
        }
    })
    const max = Math.max.apply(null, val);
    val.forEach((value, index) => {
        if (max === value) {
            answer.push(index + 1)
        }
    })
    return answer;
}
```

* 담엔 간지나게 filter 로... 

### 124 나라의 숫자

* https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

```javascript

```