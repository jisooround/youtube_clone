import express from "express";
// express 어플리케이션 생성
const app = express();
const PORT = 4000;

// get요청
const handlehome = (req, res) => {
  // request
  return res.send("<h1>I still love you</h1>");
};
const handleLogin = (req, res) => {
  console.log("I love middleware");
  return res.send({ message: "Login here." });
};
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleProteted = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handlehome);
app.get("/login", handleLogin);
app.get("/protected", handleProteted);

// 외부 접속 listen
const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
