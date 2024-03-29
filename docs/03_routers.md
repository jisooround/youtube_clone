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
