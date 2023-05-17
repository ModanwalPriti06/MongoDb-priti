const mongoose = require("mongoose"); //importing mongoose module
mongoose.connect("mongodb://0.0.0.0/newdb"); //database link(local or online url)

const UserModel = require("./User"); //importing model
run()
async function run() {
  try{
  const user = new UserModel({                        //Method 1 => create instance of model
    name: "john",
    email: "john@example.com",
    age: 22,
    address:{
      Street: "street",
      City: "city"
    }
  });
  const user2 = await UserModel.create({                    //Method 2 => create instance of model, this returns a promise so needs to be used with await keyword
    name: "kyle",
    email: "kyle@example.com",
    age: 23,
    address2:{
      Street: "street2",
      City: "city2"
    }
  })

  await user2.save()
  await user.save()
  await console.log("this should be my last output"+user2);
}
catch(e){
  console.log("error message is ",e.message)                                    // e.message gives just the message
}
}
