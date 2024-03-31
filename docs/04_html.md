# Returning html

## pug 라이브러리 사용하기

```bash

// 설치
$ npm i pug
```

```js
// server.js

// pug 라이브러리 사용하기 위한 기본 세팅
app.set("view engine", "pug");

// views 디렉토리를 생성한 곳이 최상단이 아니라면 아래와 같이 경로를 추가로 작성해주면 된다.
app.set("views", process.cwd() + "/src/views");
```

위와 같이 pug라이브러리를 사용하겠다고 최상단 파일인 server.js에 세팅을 해주면 pug 라이브러리가 '/views'디렉토리를 찾아 필요한 파일을 사용한다.

### 사용 법

1. /src/views 디렉토리를 생성한다.
2. 생성한 디렉토리 안에 'home.pug'와 같이 pug 파일을 생성한다.
3. pug 파일 작성

```pug
doctype html
html(lang="ko")
  head
    title Wetube
  body
        h1 Welcome to Wetube
        footer &copy; 2024 Wetube
```

4. 이 pug 파일을 원하는 위치에서 .render() 매서드를 사용하여 호출한다.

```js
// videoController.js
export const trending = (req, res) => {
  res.render("home");
};
```
