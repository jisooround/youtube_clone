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

---

## 📌 express 시작하기

#### 시작하기

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
