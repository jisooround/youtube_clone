# express

express 사용에 도움을 주는 라이브러리에 대해 알아보기

### 📌 babel

babel은 자바스크립트 컴파일 도구이다. 우리가 최신 자바스크립트 코드를 작성하면 바벨은 브라우저나 nodeJS가 이해할 수 있는 자바스크립트 코드로 변환해준다.

### 📌 babel 사용하기

#### 설치

```
$ npm install --save-dev @babel/core @babel/node
```

#### 설정

```
$ npm install @babel/preset-env --save-dev
```

```json
// bable.config.json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

presets은 babel을 위한 플러그인이다.

#### 사용

```json
// package.json
"scripts": {
    "dev": "babel-node index.js"
  },
```

## 📌 nodemon

nodemon은 코드가 수정되었는지 감지하여 수정되면 알아서 실행시켜준다.

#### 설치

```
$ npm install nodemon --save-dev
```

#### 사용

```json
// package.json
"scripts": {
    "dev": "nodemon --exec babel-node index.js"
  },
```

```bash
$ npm run dev
// 실행 내용
```

## 📌 express 시작하기

#### 시작하기 (express 앱 만들기)

```js
import express from "express";

const app = express();
```

서버는 무언가 request하기를 기다리는 존재 -> `listen()` 메서드는 Express 애플리케이션을 특정 포트에서 실행하기 위해 사용된다. 이 메서드는 서버를 시작하고 지정된 포트에서 클라이언트의 요청을 수신하며, 서버가 시작될 때 실행할 콜백 함수를 제공할 수 있다.

#### port 열어보기 (서버 생성)

```js
import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
```

## 📌 express 매서드

express에서는 app.get(), app.post(), app.put() 등의 메서드를 사용하여 요청 핸들러를 등록할 수 있다. 이러한 메서드는 경로와 요청 핸들러 함수를 매핑하여 해당 경로의 요청이 발생할 때마다 해당 요청 핸들러 함수가 실행되도록 설정한다.
</br></br>
예를 들어, app.get('/login', handleLogin)와 같은 코드는 /login 경로로의 GET 요청이 발생할 때 handleLogin 함수를 실행하여 요청을 처리한다.

```js
import express from "express";
// express 어플리케이션 생성
const app = express();
const PORT = 4000;

const handlehome = (req, res) => {
  // request 종료
  return res.end();
};
const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

// get요청
app.get("/", handlehome);
app.get("/login", handleLogin);

// 외부 접속 listen
const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
```

express에서는 요청 핸들러(request handler) 함수에 자동으로 req와 res 객체가 전달된다. 이는 Express 내부적으로 미들웨어(middleware) 스택을 통해 요청을 처리하고 핸들러 함수에 필요한 인자를 제공하기 때문이다.

### req (요청 객체)

`req` 객체는 클라이언트로부터의 HTTP 요청 정보를 포함하고 있다. 이 객체를 통해 요청 헤더, 요청 본문(body), 파라미터, 쿼리 문자열 등을 액세스할 수 있다.

### res (응답 객체)

`res` 객체는 클라이언트로의 HTTP 응답을 생성하고 전송하는 데 사용한다. 이 객체를 통해 응답 상태 코드, 헤더, 본문(body) 등을 설정할 수 있다.

### next (다음 미들웨어 호출)

`next` 함수는 현재의 미들웨어에서 다음 미들웨어를 호출하는 데 사용된다. Express 애플리케이션에서 미들웨어는 체인 형태로 연결되어 실행되며, `next`를 호출하여 다음 미들웨어로 제어를 전달한다.
