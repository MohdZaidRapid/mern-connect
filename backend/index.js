import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("usercruds", UserSchema);

app.get("/getUsers", async (req, res) => {
  res.json(await UserModel.find());
});

app.get("/getData", (req, res) => {
  res.send(`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, enim nec congue faucibus, risus nisl facilisis libero, eu cursus lorem est id leo. Vivamus efficitur rutrum ultrices. In non ante sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam posuere nisi sed quam volutpat, a venenatis nibh accumsan. Nullam luctus est ante, nec feugiat magna maximus vel. Donec euismod dictum commodo. In in eleifend tellus, sit amet auctor odio. Maecenas quis felis facilisis, cursus ligula ac, mattis lectus. Mauris sed semper justo. Donec feugiat nec mauris et lobortis. In hac habitasse platea dictumst.`);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
