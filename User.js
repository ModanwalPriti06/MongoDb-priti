const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
street: String,
city: String,
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 120 },
  isAdmin: { type: Boolean, default: false },
  bestFriend: mongoose.SchemaTypes.ObjectId,            //We can reference another document in here
  hobbies: [String],                                    //If empty it can be anything
  address: {
    Street: String,
    City: String,
  },
  address2: addressSchema,
});

userSchema.methods.sayHi = function(){
    console.log(`say hi to ${this.name}`);
}

module.exports = mongoose.model("userInCollection", userSchema)