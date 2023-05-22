const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter=require("./routes/auth");
const usersRouter=require("./routes/users");
const moviesRouter=require("./routes/movies");
const listsRouter=require("./routes/lists");
dotenv.config();
//mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex:true,
  })
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log(err));
  app.use(express.json());
  app.use("/api/auth",authRouter);
  app.use("/api/users",usersRouter);
  app.use("/api/movies",moviesRouter);
  app.use("/api/lists",listsRouter);

app.listen(8000, () => {
  console.log("Backend Server is running");
});
