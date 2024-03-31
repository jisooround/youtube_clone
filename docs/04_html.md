# Returning html

### 📌 pug 라이브러리 사용하기

pug는 자바스크립트 파일로 이루어져있으며, express프로젝트에서 반복적인 html 구조를 쉽게 반환해주는 라이브러리이다.
pug 파일은 html 태그로 변환되어 브라우저가 읽을 수 있게 된다.

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

#### pug 기본사용 법

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

#### pug에서 자바스크립트 기능 사용하기

```pug
doctype html
html(lang="ko")
  head
    title Wetube
  body
        h1 Welcome to Wetube
        footer &copy; #{new Date().getFullYear()} Wetube
```

위와 같이 #{}안에 자바스크립트 매서드를 사용할 수 있다.

#### 반복적인 코드 partials 디렉토리에 분리하고 include로 사용하기

```pug
// src/partials/footer.pug
footer &copy; #{new Date().getFullYear()} Wetube
```

```pug
// src/views/home.pug
doctype html
html(lang="ko")
  head
    title Wetube
  body
        h1 Welcome to Wetube
        include partials/footer.pug
```

#### 상속 개념 사용하기
