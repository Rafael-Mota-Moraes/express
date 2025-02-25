import express from "express";
import path from "path";
import homeRouter from "./routes/home.js";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";

const app = express();
const PORTA = 8080;
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(
  express.static("public", {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

app.use("/", homeRouter);
app.use("/user", userRouter);

app.listen(PORTA, () => {
  console.log(`Servidor executando em: http://localhost:${PORTA}`);
});
