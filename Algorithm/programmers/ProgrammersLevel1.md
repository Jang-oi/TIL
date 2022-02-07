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

### 시저 암호

* https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

```javascript
function solution(s, n) {
    let answer = '';
    let length = s.length;
    for (let i = 0; i < length; i++) {
        if (s.charCodeAt(i) == 32) {
            answer += ' ';
            continue;
        }
        if (s.charCodeAt(i) < 91) {
            if (s.charCodeAt(i) + n > 90) {
                answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
            } else {
                answer += String.fromCharCode(s.charCodeAt(i) + n);
            }
        } else if (s.charCodeAt(i) > 96) {
            if (s.charCodeAt(i) + n > 122) {
                answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
            } else {
                answer += String.fromCharCode(s.charCodeAt(i) + n);
            }
        }
    }
    return answer;
}
```

* 졸려서 대충 품 효율성 제로일듯

### 문자열을 정수로 바꾸기

* https://programmers.co.kr/learn/courses/30/lessons/12925?language=javascript

```javascript
function solution(s) {
    return parseInt(s)
}
```

* 풀면됐찌

### 이상한 문자 만들기 

* https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

```javascript
function solution(s) {
    const wordArr = s.split(" ");
    let word = "";
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j++) {
            j % 2 == 0 ? word += wordArr[i][j].toUpperCase() : word += wordArr[i][j].toLowerCase()
        }
        if (i != wordArr.length-1) word += " ";
    }
    return word;
}
```

* 생각나는대로 풀어봄.

### 124 나라의 숫자

* https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

```javascript

```

### 정수 제곱근 판별

* https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

```javascript
function solution(n) {
    let answer = n / 2;

    for (let i = 1; i < n / 2; i++) {
        answer -= i;
        if (answer < 0) {
            return (answer + i) * 2 === i ? (i + 1) * (i + 1) : -1;
        }
    }
    return -1;
}
```

* 나눗셈과 뺄셈만으로 제곱근을 구할 수 있는 홍길주의 숙수념에 나오는 방식

### 위클리챌린지 1주차_부족한 금액 계산하기

* https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

```javascript
function solution(price, money, count) {
    let answer = 0;
    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }
    return answer > money ? answer - money : 0;
}
```

* 간단한 문제 ...

### 두 정수 사이의 합

* https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

```javascript
function solution(a, b) {
    let result = 0;

    const min = Math.min(a, b);
    const max = Math.max(a, b)
    for (let i = min; i <= max; i++) result += i;

    return result;
}
```

* 복잡하게 생각안하고 간단하게 품...

### x만큼 간격이 있는 n개의 숫자

* https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

```javascript
function solution(x, n, s =[]) {
    for (let i = 1; i <= n; i++) s.push(x * i);
    return s;
}
```

* 간단하게 ... 품 

### 행렬의 덧셈

* https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

```javascript
function solution(arr1, arr2, r = []) {
    for (let i = 0; i < arr1.length; i++) {
        r.push([]);
        for (let j = 0; j < arr1[i].length; j++) {
            r[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return r;
}
```

### 하샤드 수

* https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

```javascript
function solution(x) {

    const xx = x.toString();
    let sum = 0;
    for (let i = 0; i < xx.length; i++) sum += Number(xx[i]);

    return x%sum === 0;
}
```

### 평균 구하기

* https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

```javascript
function solution(arr) {
    return arr.reduce((prev, curr) => prev + curr)/arr.length;
}
```

* reduce 사용! 간지나게 한줄로... 


