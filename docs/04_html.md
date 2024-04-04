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

### 📌 변수 사용하기

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

### 📌 변수 사용하기 2

```pug
// src/views/base.pug

doctype html
html(lang="ko")
  head
    // 변수를 다른 텍스트와 함께 사용할 경우
    title #{pageTitle} | Project!
  body
    // 변수를 단독으로 사용할 경우
    h1=pageTitle
        h1 Welcome to the home page.🐭
        include partials/footer.pug
```

위와 같이 변수를 단일로 사용할 경우엔 `#{}`문법을 사용하지 않고 태그에 `=`를 붙여서 사용한다.

### 📌 객체 데이터 받아서 반복하여 표시하기 (Iteration & mixin)

객체 데이터를 받아 같은 내용을 반복적으로 표시하기 위해선 공통 UI를 컴포넌트화 시킨후, 변수에 해당 인덱스의 데이터를 넣어 보여주는 것이 효과적이다.
</br></br>
이 때, 컴포넌트화 시킬 때에는 mixin 기능을,</br>
반복 할 때엔 `each in else` 를 사용하여 Iteration하면 된다.

#### 01. 원하는 데이터 객체를 전달한다.

데이터 객체는 컨트롤러에서 전달

```js
// src/controllers/videoController.js
export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 34,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 34,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 34,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
```

#### 02. 데이터를 표시할 UI를 Mixin 디렉토리에 정리한다.

```pug
// src/views/mixins

// 받을 데이터를 최상단에 아래와 같이 적어준다.
mixin video(info)
  div
      h4=info.title
      ul
        li #{info.rating}/5
        li #{info.comments} comments.
        li Posted  #{info.createdAt}.
        li #{info.views} views.
```

#### 03. 반복문과 함께 Mixin 파일 사용

위에 include로 mixin파일을 참조해준 후, 반복문을 돌린 후 `+mixin(데이터)` 이렇게 사용한다.

```pug
// src/views/home.pug

extends base.pug
// mixin파일 경로를 써줌으로써 video mixin파일을 참조할 수 있게 됨
include mixins/video

block content
    h2 Welcome to the home page.🐭
    // 반복문: each {객체의 아이템(임의로 네이밍)} in {컨트롤러에서 전달받은 실제 데이터 객체}
    // else는 위에 each문이 성립되지 않을 때 else의 내용이 실행
    each data in videos
    // 믹스인 사용: +{UI 믹스인}(객체의 현재 아이템)
        +video(data)
    else
        li Sorry nothing found.
```
