# MongoDb
<ol>
<li>MongoDB is a NoSQL database management system designed to store and manage unstructured and semi-structured data in a document-oriented format.</li>

<li>MongoDB uses a flexible data model that allows for dynamic schema, making it easier to handle changing data structures.</li>

<li>MongoDB is highly scalable and can handle large amounts of data and high levels of traffic through a technique called sharding.</li>

<li>MongoDB has a flexible query language and provides various tools and services for indexing, aggregation, and more.</li>

<li>MongoDB is widely used in web and mobile applications, as well as in big data and analytics environments.</li>

<li>MongoDB is open source and has a large and active community of developers contributing to its ongoing development and improvement.</li>

<li>MongoDB provides support for various programming languages, including Python, Java, Node.js, and more.</li>

<li>MongoDB also provides enterprise-grade features, such as security, backup and recovery, and more, through MongoDB Enterprise.

<li>MongoDB Atlas is a cloud-based managed database service provided by MongoDB that offers automated provisioning and scaling of MongoDB databases in the cloud.</li>

<li>MongoDB is known for its high performance and ease of use, making it a popular choice for developers looking for a flexible and scalable database solution.</li>
</ol>


![Dark_pages-to-jpg-0001](https://user-images.githubusercontent.com/108695777/231220392-11314396-21f9-47c0-88f3-2602c0954630.jpg)
![Dark_pages-to-jpg-0002](https://user-images.githubusercontent.com/108695777/231220470-755aec9b-f81c-4d55-a57c-e417ce0ab685.jpg)
![Dark_pages-to-jpg-0003](https://user-images.githubusercontent.com/108695777/231220557-02bc337d-4b86-42df-ade2-e55b79ac5ac1.jpg)
![Dark_pages-to-jpg-0004](https://user-images.githubusercontent.com/108695777/231220599-ac2920e6-bc6b-4603-93b7-9fd87280c79a.jpg)

<ul>
    <li>Model.deleteMany()</li>
    <li>Model.deleteOne()</li>
    <li>Model.find()</li>
    <li>Model.findById()</li>
    <li>Model.findByIdAndDelete()</li>
    <li>Model.findByIdAndRemove()</li>
    <li>Model.findByIdAndUpdate()</li>
    <li>Model.findOne()</li>
    <li>Model.findOneAndDelete()</li>
    <li>Model.findOneAndRemove()</li>
    <li>Model.findOneAndReplace()</li>
    <li>Model.findOneAndUpdate()</li>
    <li>Model.replaceOne()</li>
    <li>Model.updateMany()</li>
    <li>Model.updateOne()</li>
</ul>

databse=> many collections together in one db => One collection(eg-users) is an Array of documents(record) => one document is collection of fields => one field is eg;- name:"user1"


#MONGOOSE

**It is a wrapper shell around MongoDb terminal, all the commands of MongoDb are available in Mongoose**

```
Terminal
npm init -y
npm i mongoose
npm install --save-dev nodemon
------------------------------------------------------------------------
```

<ol>
<li>A Schema is a blueprint(like class) for your database to your data. Schema definition: Mongoose provides a simple and intuitive way to define the structure of your data using a schema. You can define the data types, properties, and validations for each field in your schema.</li>
<li>A model is a schema in actual form that you can use & have stored in database(like an object from a class blueprint)</li>
</ol>

<h3>Basic Schema/User Model</h3>

[Mongo](https://mongoosejs.com/docs/guide.html)

[Schema and Models](https://www.codingninjas.com/codestudio/library/mongoose-schema-and-models)

```
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

userSchema.methods.sayHi = function(){
    console.log(`say hi to ${this.name}`);
}
//now we can use this in index.js, Eg- user1.sayHi()

userSchema.statics.findByName = function(name) {
return this.where({ name: new RegExp(name, 'i'})
}
//now we can use this on collection, not just document, Eg- UserModel.findByName("kyle")

userSchema.query.byName = function (name) {
return this.where({ name: new RegExp(name,'i'})
}
//now we can use this on query functions, Eg- UserModel.find().byName("kyle")

userSchema.virtual("namedEmail").get(function(){return `${this.name} <${this.email}>`})}

userSchema.pre('save', function(next){         //pre means before you update in db, post means after
this.updatedAt = Date.now()
next();
})

userSchema.post('save', function(doc,next){         //post means happens after you update in db
doc.sayHi()
next();
})
// we only use normal functions here
module.exports = mongoose.model("userInCollection", userSchema)  // A collection with the name "userInCollection" will be added to the database we use it in.
```

**url m db, schema creation m collection name, then use schema as class for documents**

<h3>Using in Index.js file</h3>

```
const mongoose = require("mongoose"); //importing mongoose module
mongoose.connect("mongodb://0.0.0.0/newdb"); //database link(local or online url)

const UserModel = require("./User"); //importing model
run()
async function run() {
  try{
  const user = await new UserModel({                        //Method 1 => create instance of model
    name: "john",
    age: 22,
  });
  const user2 = await UserModel.create({                    //Method 2 => create instance of model
    name: "kyle",
    age: 23,
  })

  await user2.save()                                        //Saving updates the values in db
  await user.save()
  await console.log("this should be my last output"+user2);
  
  //You can also update by using findById&Update() method but that will skip validation, validation only works for .save() method
  //So you should do User.findById().save()
  const users = await User.find({name: "kyle"})
  const users = await User.where("name").equals("kyle")
  const users = await User.where("age").gt("12").where("name").equals("kyle").select("address")
}
catch(e){
  console.log(e.message)                                    // e.message gives just the message
}

}


```

<h3>More on Schema</h3>

```
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
street: String,
city: String,
})

//If a validation is not met we get error while using this schema

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },                //required validation
  email: { type: String, required: true, unique: true }, //unique validation
  age: { type: Number, min: 18, max: 120,                
        validate: {
        validator: v=> v%2===0,
        message: props => `${props.value} is not an even number`
        }
  },                                                     //min max validation + custom validator
  isAdmin: { type: Boolean, default: false },            //default is taken as false
  bestFriend: mongoose.SchemaTypes.ObjectId,            //We can reference another document in here
  hobbies: [String],                                    //If empty it can be anything
  address: {
    Street: String,
    City: String,
  },
  address2: addressSchema,                              //Link to another schema
  email2: {type String, lowercase:true},                //string will be converted into lowercase before being saved
  createdAt: {
  immutable:true,                                       //It cannot be changed once set
  default:()=> Date.now(),                              //When a document is created, current date is taken by default
});

const User = mongoose.model('User', userSchema);
//    class             collection name, schema
```


<h3><Creating a document</h3>

```
//in index.js
const user = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 25,
  isAdmin: true
});

user.save()
  .then(() => console.log('User created!'))
  .catch(err => console.error('Error creating user:', err));

```

<h3>Retrieving documents</h3>
    
```
User.find({ age: { $gte: 18 } })
  .then(users => console.log(users))
  .catch(err => console.error('Error retrieving users:', err));
```

<h3>Real world example</h3>

```
const mongoose = require("mongoose")

const {Schema}=mongoose

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location :{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

},{versionKey:false})

module.exports=mongoose.model("users",UserSchema)
```

<h2>Adding custom functions to schema model + .select()</h2>

```
const Person = module.exports = mongoose.model('Person', PersonSchema);


Person.findByEmailAndMobile = function (email, contact_no, Person_no) {
    return Person.findOne({ email })
        .then((user) => {
            if (user) return Promise.reject('Email already exists.');
            return Person.findOne({ contact_no })
        })
        .then((user) => {
            if (user) return Promise.reject('Contact no already exists.');
            return Person.findOne({ customer_no })
        })
        .then((user) => {
            if (user) return Promise.reject('Person no already exists.');
        });
}

Person.findPersonById = function (id) {
    return Person.findById(id)
        .select('name email contact_no address person_no')   //select() returns the specific fields we require
        .then((person) => {
            if (person) return person;
            reject('Person not found.');
        });
}
```
