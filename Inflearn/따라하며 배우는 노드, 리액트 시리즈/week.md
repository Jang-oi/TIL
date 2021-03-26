# 1일차

---

* BOILER PLATE - 항상 쓰이는 기능을 모듈화 해두어 만들어두는 것?

### NODE JS

* node.js 등장 이후 JavaScript 가 서버사이드에서 사용 가능

### EXPRESS JS

* node.js 가 자동차의 엔진이라면 엔진을 가지고 자동차의 바퀴, 브레이크 시스템 등 자동차(웹 페이지)를 만들기 쉽게 해주는 프레임워크라고 생각

### npm

* Node Package Manager의 약자
* 자바스크립트 패키지 매니저, node.js 에서 사용 하는 모듈들들 패키지화 하여 모아둔 저장소
* npm install express --save를 통해 express.js 도 추가
* 아래와 같이 express 가 추가 됨
```javascript
package.json(파일명)
"dependencies": {
    "express": "^4.17.1"
}
```

### package.json

* 설치한 패키지들을 관리하는 파일 node로 프로젝트를 시작한다면 가장 먼저 만들어야할 파일 (npm init 명령어를 통해 생성)
