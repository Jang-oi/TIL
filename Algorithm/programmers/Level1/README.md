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

### 콜라츠 추측

* https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

```javascript
function solution(num, r = 0) {
    while(num !== 1) {
        r++;
        if (r === 500) return -1
        num = num%2 ? num * 3 + 1 : num / 2;
    }
    return r;
}

```

* 삼항연산자 굿

### 키패드 누르기

* https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

```javascript
function solution(numbers, hand, answer = '', l = '*', r = "#") {
    // TODO 좌표값으로 한번 해보자.
    const getDistance = {
        2 : [3,1,0,1,2,1,2,3,2,3,4],
        5 : [2,2,1,2,1,0,1,2,1,2,3],
        8 : [1,3,2,3,2,1,2,1,0,1,2],
        0 : [0,4,3,4,3,2,3,2,1,2,1]
    }
    const leftNum = [1,4,7];
    const rightNum = [3,6,9];
    for (let i = 0; i < numbers.length; i++) {
        if (leftNum.includes(numbers[i])) {
            answer += 'L'
            l = numbers[i];
        } else if (rightNum.includes(numbers[i])) {
            answer += 'R'
            r = numbers[i];
        } else {
            l = l === '*' ? 10 : l;
            r = r === '#' ? 10 : r;
            const distanceL = getDistance[numbers[i]][l]
            const distanceR = getDistance[numbers[i]][r]
            if (distanceL === distanceR) {
                if (hand === 'right') {
                    answer += 'R'
                    r = numbers[i];
                } else {
                    answer += 'L'
                    l = numbers[i];
                }
            } else if (distanceL > distanceR) {
                answer += 'R'
                r = numbers[i];
            } else {
                answer += 'L'
                l = numbers[i];
            }
        }
    }
    return answer;
}
```

### 신고 결과 받기

* https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

```javascript
function solution(id_list, report, k) {

    const reportCount = {};
    // {[신고자 : [신고받은사람1, 신고받은사람2]], [신고자 : [신고받은사람1, 신고받은사람2]]}
    //[신고자1, 신고자2] > k ?
    //[2,2,1,0]
    // 위와 같은 구조로 만들어서 {} 인덱스는 id_list 고 신고받은사람 1,2,3 을 넣어서 리턴해주면 될듯..
    const answer = {};
    const reportObject = {};
    const keyArr = [];
    id_list.map(val => {
        reportObject[val] = [];
        answer[val] = 0;
    })

    const reportSet = new Set(report);
    const reportArr = [...reportSet];

    reportArr.map(val => {
        // reportUser 신고 한 사람
        // reportName 신고 받은 사람
        const [reportUser, reportName] = val.split(' ');
        reportCount[reportName] = (reportCount[reportName]) ? reportCount[reportName] + 1 : 1;
        reportObject[reportUser].push(reportName);
    })

    // reportCount 돌면서 k 이상 신고 당한놈 꺼내.
    for (const key in reportCount) {
        if (reportCount[key] >= k) {
            // k 이상 신고를 어떤 놈이 했는 지 꺼내
            keyArr.push(key);
        }
    }

    for (const reportKey in reportObject) {
        for(let i = 0; i < keyArr.length; i++) {
            if (reportObject[reportKey].includes(keyArr[i])) {
                answer[reportKey]++;
            }
        }
    }
    return Object.values(answer)
}
```

* 중복 제거는 Set 을 이용하자 ... indexOf, filter 로 뻘짓함.
* Object 는 for ... in 으로! 

### [1차] 다트게임

* https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

```javascript
function solution(dartResult) {
    // 다트 한 판씩 배열로 나눔 (ex - [1S, 2D*, 3D#]) 
    // 나눈 배열을 반복하면서 각자 옵션에 대해서 계산함.
    const dartArray = dartResult.match(/[0-9]+[A-Z][/*#]?/g);
    const resultArray = [];
    for (let i = 0; i < dartArray.length; i++) {
        let num = dartArray[i].match(/[0-9]+/g)[0];
        const bonus = dartArray[i].match(/[A-Z]/g)[0];
        const option = dartArray[i].match(/[/*#]/g) && dartArray[i].match(/[/*#]/g)[0];
        switch (bonus) {
            case 'S' :
                num = Math.pow(num, 1);
                break;
            case 'D' :
                num = Math.pow(num, 2);
                break;
            case 'T' :
                num = Math.pow(num, 3);
                break;
            default :
                break;
        }
        if (option === '*') {
            if (i === 0) num = num * 2;
            else {
                num = num * 2;
                resultArray[i - 1] = resultArray[i - 1] * 2;
            }
        }
        if (option === '#') num = num * -1;
        resultArray.push(num);
    }
    return resultArray.reduce((acc, cur) => acc += cur, 0);
}
```

* bonus, option 부분이 좀 아쉬웠다 .. 담엔 더 잘해보자

### 숫자 문자열과 영단어

* https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

```javascript
function solution(s) {
    var numObj = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }

    while (/\D/.test(s)) {
        for (const key in numObj) {
            s = s.replace(key, numObj[key])
        }
    }
    return parseInt(s);
}
```

* 문자로 들어올 경우 숫자로 변경하는 거로 끝 ...

### 실패율

* https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

```javascript
function solution(N, stages) {

    const resultArray = {};

    // 실패율 계산을 위해 각 스테이지에 몇명이 남아있는지에 대한 배열을 구함
    const failArray = new Array(stages.length);
    failArray.fill(0);
    stages.map(val => failArray[val]++)
    console.log(failArray)
    
    // 각 스테이지의 실패율을 계산해서 {단계 : 실패율, 단계 : 실패율, 단계 : 실패율... }로 데이터 생성함.
    // 0단계는 존재하지 않으니까 1 부터 시작함.
    let mom = stages.length;
    for (let i = 1; i <= N; i++) {
        resultArray[i] = failArray[i] / mom
        mom -= failArray[i];
    }
    console.log(resultArray);

    // 실패율에 따라 정렬함
    const sortable = Object.entries(resultArray).sort(([, a], [, b]) => b - a);
    console.log(sortable);

    return sortable.map(([val]) => {return Number(val)});
}
```
### 크레인 인형 뽑기

* https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

```javascript
function solution(board, moves) {
    // [
    //      [0, 0, 0, 0, 0],
    //      [0, 0, 1, 0, 3],
    //      [0 ,2, 5, 0, 1],
    //      [4 ,2, 4, 4, 2],
    //      [3 ,5, 1, 3, 1]
    //  ]

    let answer = 0;
    const numArray = [];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 선택한 칸의 인형이 있는 위치 까지 찾는다.
            // 찾은 뒤 인형이 쌓인 배열 numArray 의 인형과 지금 뽑힌 인형과 같으면
            // numArray 마지막 인형 제거, 인형 두개가 제거 됐으니 2 더함
            if (board[j][moves[i]-1] !== 0) {
                if (numArray[numArray.length-1] === board[j][moves[i]-1]) {
                    numArray.pop();
                    answer += 2;
                    // 쌓여있는 인형과 뽑힌 인형이 다를 경우 쌓인 인형 배열에 추가함
                } else numArray.push(board[j][moves[i]-1]);
                // 뽑힌 인형은 없어졌으니 그 자리에 0으로 변경하면서 반복문 나감
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return answer;
}
```

### [1차] 비밀지도

* https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

```javascript
function solution(n, arr1, arr2) {
    const answer = [];
    const answer2 = [];
    // 10진수를 2진수로 변환
    for (let i = 0; i < arr1.length; i++) answer.push(Number(arr1[i].toString(2))+ Number(arr2[i].toString(2)))

    for (let i = 0; i < answer.length; i++) {
        // n 자리수 만큼 앞에 0을 채워주는 함수 사용.
        const stringData = insertNum(answer[i], n);
        let string = '';
        for (let j = 0; j < stringData.length; j++) {
            // 자리수의 숫자가 0 보다 클 경우 # 추가
            // 아닐 경우 ' ' 추가
            if (stringData[j] > 0) string += '#'
            else string += ' ';
        }
        answer2.push(string);
    }
    console.log(answer2)
    return answer2;
}

const insertNum = (num, len) => {
    let str = '';
    while(len > num.toString().length) {
        str += 0;
        len--;
    }
    return str += num;
}
```