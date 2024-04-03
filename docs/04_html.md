# Returning html

### 📌 pug 라이브러리

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

### 📌 pug 기본 사용

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

### 📌 pug에서 자바스크립트 기능 사용하기

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

### 📌 pug 반복코드 개선하기

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

### 📌 pug 상속 개념 사용하기 (block)

지금까지는 html 구조를 반복하여 사용했다. 이 반복되는 html 구조를 상속 개념을 사용하여 개선해보자.
`extends` : 확장할 수 있는 pug 언어

1. layout으로 사용하고 싶은 코드를 extends를 사용하여 확장한다.

```pug
// src/views/base.pug
doctype html
html(lang="ko")
  head
    title Wetube
  body
        h1 BASE
        include partials/footer.pug
```

```pug
// src/views/home.pug

extends base.pug
```

2. `block`을 사용하여 상속받은 layout에 원하는 내용 넣기

- block 이라는 창문을 만들고,
- 그 block 안에 내용을 넣는다고 생각하면 쉽다.

```pug
// src/views/base.pug

doctype html
html(lang="ko")
  head
    title Wetube
  body
        // 'title'이라는 블록 생성
        block title
        include partials/footer.pug
```

```pug
// src/views/home.pug

extends base.pug
// 생성한 'title' block에 원하는 내용 넣기
block title
  h1 Welcome to the home page.🐭
```

### 📌 block에 변수 넣기

- block 기능을 쓰다가 block 전체가 아닌, 일부만 변경하고 싶을 때는 이 방법으로 변수를 할당하면 된다.

```pug
// src/views/base.pug

doctype html
html(lang="ko")
  head
    // pageTitle 이라는 변수가 생성되었다.
    title #{pageTitle} | Project!
  body
        h1 Welcome to the home page.🐭
        include partials/footer.pug
```

```js
// videoController.js

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};
```

- pug를 참조하는 render에 두번째 인자로 변수의 값을 넣어주면 변수가 전달된다.
