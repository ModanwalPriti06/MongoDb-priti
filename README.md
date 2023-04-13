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

databse=> many collections together in one db => One collection(eg-users) is an Array of documents(record) => one document is collection of fields => one field is eg;- name:"user1"


#MONGOOSE

**It is a wrapper around MongoDb, all the commands of MongoDb are available in Mongoose**

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
```
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("userInCollection", userSchema)  // A collection with the name "userInCollection" will be added to the database we use it in.
```

<h3>Index.js file</h3>

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

  await user2.save()
  await user.save()
  await console.log("this should be my last output"+user2);
}
catch(e){
  console.log(e)
}
}

```

<h3>More on Schema</h3>

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 120 },
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
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
