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

--- 

# 2일차

---

### 몽고DB

### mongoose

* 몽고DB를 편하게 사용할수 있는 툴
* npm install mongoose --save
* 아래와 같이 express 가 추가 됨
```javascript
package.json(파일명)
"dependencies": {
    "mongoose": "^5.12.2"
}
```
--- 

# 3일차

---

### Model

* Schema 를 감싸주는 역할

### Schema

* 어떤 상품에 관련된 글을 작성한다면 그 글을 작성한 사람이 누구인지
작성을 할 때 포스트의 이름이 무엇인지 포스트의 이름이 스트링인지 몇글자인지를 지정해 줄 수 있는 것

--- 

# 4일차

---

### GIT

* 분산 버전 관리 시스템
* 여러명이 한 사이트를 위해 코드를 작업 한다면 여러명이 GIT 을 통해 합칠 수 있고 관리를 할 수 있다.

### 순서

* Working Directory 에서 add 하면 Staging Area 에 넣어줌.
* Staging Aera 에 있는 파일들을 commit 해서 git repository(저장소)에 올림
* push 해서 git hub 에서 봄.

--- 

# 5일차

---

### WEB 동작 

* Client - Server
* 클라이언트에서 보내는 값(ID, EMAIL, PW)을 서버로 전송함.  
* Body-parser Dependency (npm install body-parser --save)를 통해 req.body로 출력

--- 

# 5일차

---

### NODE MON

* 소스를 변경할 때 그걸 감지해서 자동으로 서버를 재 시작 해주는 Tool
* npm install nodemon --save-dev
* 시작할 때 nodemon 으로 설정 package.json 에 작성.