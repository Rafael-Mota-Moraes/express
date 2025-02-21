import express from "express";
import path from "path";
import homeRouter from "./routes/home.js";

const app = express();
const PORTA = 8080;

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

app.listen(PORTA, () => {
  console.log(`Servidor executando em: http://localhost:${PORTA}`);
});
