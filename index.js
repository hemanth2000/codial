const express = require("express");

const router = require("./routes");

const port = 8000;

const app = express();

// use express router
app.use("/", router);

// view engine setup
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error running the server: ${err}`);
    return;
  }
  console.log(`Server opened at: ${port}`);
});
