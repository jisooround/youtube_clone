# routers

### 📌 라우팅 기본

nodeJS에서는 크게 Server, Routers, Controller 이렇게 세 개로 나누어 관리하는 것이 깔끔하게 관리하는 방법이다.
</br></br>
최상단 파일인 server.js에서 먼저 app.use()를 이용하여 페이지를 선언(?)해준다.

```js
// src/server.js

// 라우터 선언 (첫번째 경로 지정)
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```

이렇게 되면 첫 번째 인자로 들어간 경로에서 두 번째 인자로 들어간 컨트롤러가 실행되는 것이다.
</br></br>
그 다음 'routers'디렉토리를 만든 후 router별로 파일을 생성한다. router파일 안에는 또 controller를 분리하고, import하여 사용한다.

```js
// src/routers/userRouter.js

import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
```

```js
// src/controllers/userController.js

export const join = (req, res) => {
  res.send("Join");
};

export const edit = (req, res) => {
  res.send("Edit User");
};

export const remove = (req, res) => {
  res.send("Remove User");
};
```

```
// 디렉토리 구조

app
├── README.md
├── babel.config.json
├── package-lock.json
├── package.json
└── src
    ├── controllers
    │   ├── userController.js
    │   └── videoController.js
    ├── routers
    │   ├── globalRouter.js
    │   ├── userRouter.js
    │   └── videoRouters.js
    └── server.js
```

### 📌 parameter를 이용한 라우팅

```js
// src/routers/userRouter.js

import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", see);

export default userRouter;
```

url parameter를 사용할 경우엔 위 예시처럼 `:`를 붙여서 parameter를 전달할 수 있다.

```js
// src/controllers/userController.js
export const see = (req, res) => {
  console.log(req.params);
  res.send("see");
};

// console.log
// { id: 'jisooround' }
```

#### 주의사항

parameter를 전달하는 라우터를 사용할 경우에는 다른 라우터보다 아래에 작성해야한다.</br>
다른 라우터보다 밑에 작성할 경우에 기존 경로도 파라미터로 전달되기 때문!

```js
// src/controllers/userController.js

// 이렇게 사용 X
userRouter.get("/:id", see);
userRouter.get("/remove", remove);

// 이렇게 사용 O
userRouter.get("/remove", remove);
userRouter.get("/:id", see);
```

-> 이런 문제를 정규식으로 조건을 부여하여 parameter 취급되지 않도록 해결할 수 있다.

```js
// src/controllers/userController.js

// 정규식으로 숫자만 id로 인식하도록 함
userRouter.get("/:id(\\d+)", see);
userRouter.get("/remove", remove);
```
