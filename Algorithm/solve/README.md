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