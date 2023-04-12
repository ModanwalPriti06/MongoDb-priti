const mongoose = require("mongoose"); //importing mongoose module
mongoose.connect("mongodb://localhost/testdb"); //database link(local or online url)

const UserModel = require("./User"); //importing model

async function run() {
  const user = new UserModel({
    name: "john",
    age: 22,
  });
  await user.save();
  console.log(user);
}
run()
