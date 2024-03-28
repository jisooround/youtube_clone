# Node.js 프로젝트 시작하기

```
$ npm init
```

- package.json 파일과 index.js파일 두 가지만 있으면 node.js 프로젝트를 시작할 수 있다.
- index.js에 `console.log('Hello Node.js);` 를 입력하고 터미널에 `$ node index.js` 명령어를 치면 콘솔 메시지가 나오는 것을 확인할 수 있다.
- package.json 파일에서 `scripts`에 원하는 실행 내용을 넣어서 실행할 수도 있다.

#### 예시

```json
// package.json 일부
  "scripts": {
    "dev": "node index.js"
  },
```

```
$ npm run dev
```

### 📌 package.json, package-lock.json, node_modules 란?

npm install 을 하는 과정에서 package-lock.json 파일이 생성되지 않아 해결방법을 찾아보던 중, `npm install`시에 저절로 생기는 이 세 개의 파일들에 대해 공부한 내용을 [블로그](https://velog.io/@mudidu/package-lock.json-%EC%95%88-%EC%83%9D%EA%B9%80)에 기록해두었다.

> node_modules 폴더안에는 많은 파일이 있으므로 .gitignore 에 '/node_modules' 추가하여 깃 저장소에 올리지 않는다.

### 📌 devDependencies

패키지를 설치할 때 `--save-dev`를 붙이게 되면 package.json에 devDependencies에 추가가 된다. 여기에 추가되는 패키지는 개발자(사람)에게 필요한 dependencies이다.
</br></br>
반대로 dependencies는 프로젝트가 의존하는 패키지들을 의미한다.
