import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouters";

// express 어플리케이션 생성
const app = express();
const PORT = 4000;

// 직접 만든 로그 미들웨어
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// morgan을 사용한 로그 미들웨어
const loggerMiddleware = morgan("dev");

app.use(loggerMiddleware);

// 라우터
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// 외부 접속 listen
const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
