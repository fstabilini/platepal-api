require("dotenv").config();
const express = require("express");
const cors = require("cors");
const recipesRouter = require("./src/routes/recipes.routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/recipes", recipesRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
