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

<h1>MongoDB vs Compass vs Mongosh</h1>
<ul>
<li>MongoDB is a NoSQL document database used to store and manage data in a flexible JSON-like format.</li>
<li>Compass is a GUI tool for MongoDB that provides a visual interface to explore data, build queries, and manage databases.</li>
<li>Mongosh is an interactive command-line shell and scripting environment for MongoDB that allows users to perform database operations, run queries, and automate tasks using JavaScript.</li>
</ul>

<h2> Heirarchy in mongo </h2>
databse => </br> many collections together in one db => </br> One collection(eg-users) is an Array of documents(record) => </br> one document is collection of fields => </br> one field is eg;- name:"user1" </br>


<h2>Using Mongosh terminal => getting started</h2>

```
use newlocal2                                       //use newlocal2 db, makes one if not present
db.createCollection('newcollection')                //make a collection
db.newcollection.insertOne({name:"user1"})          //insert a document
```


<h1> MongoDB commands </h1>

Sure, here are some examples of these commands:

<h3>Query Commands:</h3>
1. `db.collection.find(query, projection)` - finds documents in a collection that match a specified query.

```
db.users.find({age: {$gt: 30}}, {name: 1, age: 1, _id: 0})
```

This query will find all documents in the "users" collection where the "age" field is greater than 30 and return only the "name" and "age" fields (excluding the "_id" field).

2. `db.collection.findOne(query, projection)` - finds and returns the first document that matches a specified query.

```
db.users.findOne({name: "John Doe"})
```

This query will find the first document in the "users" collection where the "name" field is "John Doe".

3. `db.collection.count(query)` - returns the count of documents in a collection that match a specified query.

```
db.users.count({age: {$gt: 30}})
```

This query will count the number of documents in the "users" collection where the "age" field is greater than 30.

4. `db.collection.aggregate(pipeline)` - performs aggregation operations on a collection, such as grouping and sorting.

```
db.orders.aggregate([
   { $match: { status: "completed" } },
   { $group: { _id: "$product", total: { $sum: "$quantity" } } },
   { $sort: { total: -1 } }
])
```

This query will first filter the documents in the "orders" collection where the "status" field is "completed", then group the documents by the "product" field and calculate the total quantity for each product, and finally sort the results by the total quantity in descending order.

<h3>Update Commands:</h3>
1. `db.collection.updateOne(filter, update, options)` - updates a single document that matches the specified filter.

```
db.users.updateOne(
   { name: "John Doe" },
   { $set: { age: 35 } }
)
```

This command will update the first document in the "users" collection where the "name" field is "John Doe" and set the "age" field to 35.

2. `db.collection.updateMany(filter, update, options)` - updates multiple documents that match the specified filter.

```
db.users.updateMany(
   { age: {$lt: 18} },
   { $set: { status: "minor" } }
)
```

This command will update all documents in the "users" collection where the "age" field is less than 18 and set the "status" field to "minor".

3. `db.collection.replaceOne(filter, replacement, options)` - replaces a single document that matches the specified filter.

```
db.users.replaceOne(
   { name: "John Doe" },
   { name: "Jane Doe", age: 35 }
)
```

This command will replace the first document in the "users" collection where the "name" field is "John Doe" with a new document that has the "name" field set to "Jane Doe" and the "age" field set to 35.

4. `db.collection.update(filter, update, options)` - updates one or more documents that match the specified filter.

```
db.users.update(
   { name: "John Doe" },
   { $set: { age: 35 } },
   { multi: true }
)
```

This command will update all documents in the "users" collection where the "name" field is "John Doe" and set the "age" field to 35.

<h3>Other Important Commands:</h3>
1. `db.collection.insertOne(document)` - inserts a single document into a collection.

```
db.users.insertOne(
   { name: "John Doe", age: 30, status: "active" }
)
```

This command will insert a new document into the "users" collection with the fields "name", "age", and "status" set to "John Doe", 30, and "active", respectively.

2. `db.collection.insertMany(documents)` - inserts multiple documents into a collection.

```
db.users.insertMany([
   { name: "Jane Doe", age: 25, status: "active" },
   { name: "Bob Smith", age: 40, status: "inactive" }
])
```

This command will insert two new documents into the "users" collection, one with the fields "name", "age", and "status" set to "Jane Doe", 25, and "active", respectively, and the other with the fields "name", "age", and "status" set to "Bob Smith", 40, and "inactive", respectively.

3. `db.collection.deleteOne(filter)` - deletes a single document that matches the specified filter.

```
db.users.deleteOne({ name: "John Doe" })
```

This command will delete the first document in the "users" collection where the "name" field is "John Doe".

4. `db.collection.deleteMany(filter)` - deletes multiple documents that match the specified filter.

```
db.users.deleteMany({ status: "inactive" })
```

This command will delete all documents in the "users" collection where the "status" field is "inactive".

Note: Please note that these are just some basic examples and the actual query and update commands may vary depending on your specific use case and requirements.


<ul>
    <li>Model.findById()</li>
    <li>Model.findByIdAndDelete()</li>
    <li>Model.findByIdAndRemove()</li>
    <li>Model.findByIdAndUpdate()</li>
    <li>Model.findOneAndDelete()</li>
    <li>Model.findOneAndRemove()</li>
    <li>Model.findOneAndReplace()</li>
    <li>Model.findOneAndUpdate()</li>
    <li>Model.replaceOne()</li>
</ul>

<h1>MONGOOSE in Node</h1>

**It is a wrapper shell around MongoDb terminal, all the commands of MongoDb are available in Mongoose**

**Run below commands to get started**


```
Terminal
npm init -y
npm i mongoose
npm install --save-dev nodemon
------------------------------------------------------------------------
```


•select() is a method of Mongoose that is used to select document fields that are to be returned in the query result. It is used to include or exclude document fields that are returned from a Mongoose query. The select() method performs what is called query projection.

```
// return only fields a and b
query.select("a b")

// same as the one above
query.select({a: 1, b: 1})
```



<h2>2 ways to execute Queries</h2>

**mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.**

**A query also has a .then() function, and thus can be used as a promise.**



```
//With callback

Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function(err, person) {
  if (err) return handleError(err);   
  console.log(person.name.first, person.name.last,person.occupation);           // Prints "Space Ghost is a talk show host".
});
```


```
//Without callback

const query = Person.findOne({ 'name.last': 'Ghost' });

query.select('name occupation');                            // selecting the `name` and `occupation` fields

query.exec(function(err, person) {                          // execute the query at a later time
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last,person.occupation);  // Prints "Space Ghost is a talk show host."
});
```

<ol>
<li>A Schema is a blueprint(like class) for your database to your data. Schema definition: Mongoose provides a simple and intuitive way to define the structure of your data using a schema. You can define the data types, properties, and validations for each field in your schema.</li>
<li>A model is a schema in actual form that you can use & have stored in database(like an object from a class blueprint)</li>
</ol>

<h3>Basic Schema/User Model (Making in node.js)</h3>

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

<h2>Populate</h2>
    
<ul>
    
<li>In MongoDB, Population is the process of replacing the specified path in the document of one collection with the actual document from the other collection.</li>

<li>Need of Population: Whenever in the schema of one collection we provide a reference (in any field) to a document from any other collection, we need a populate() method to fill the field with that document.</li>

<li>Example: In the following example, we have one userSchema and another postSchema, in the postSchema we have one field postedBy which references a document from the User model.</li>

</ul>
    
Example Schema with reference to another schema
    
```
    const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = {
    Source, Destination, User, Post
}
```

Using with and without populate method
    
```
    // Query to find and show all the posts
Post.find()
    .then(p => console.log(p))
    .catch(error => console.log(error));
-------------------------------------------------------------------
    
Post.find()
.populate("postedBy")
.then(p=>console.log(p))
.catch(error=>console.log(error));
```

How to poluate multiple entities

```
array syntax:               let results = await OrderModel.find().populate(['user', 'meal']);

Chaining Method:            OrderModel.find().populate('user').populate('meal')
                            .exec(function (err, results) {
                                // callback
                            });

Simple method:              OrderModel.find().populate('user meal')
                            .exec(function (err, results) {
                                 // callback
                            });
```
    
<h2>Aggregation pipeline</h2>
    
**In MongoDB, the aggregation pipeline is a framework for performing data processing and analysis on collections of documents. It allows you to perform complex data operations on a set of documents and return the results in a structured way.**

The aggregation pipeline consists of a set of stages that are processed in sequence. Each stage takes in a set of documents as input, performs a specific operation on them, and outputs the result to the next stage. The output of one stage becomes the input to the next stage, and so on, until the final stage produces the final result.

**Some examples of stages in the aggregation pipeline include:**
Sure, here's an explanation of all the stages in the MongoDB aggregation pipeline, along with examples for each stage:

1. $match: Filters documents in the collection based on specified criteria.

The $match stage is similar to the "find" method in MongoDB. It allows you to filter the documents in the collection based on specified criteria. The $match stage takes in a query expression that specifies the criteria to match against. Here's an example:

```
db.orders.aggregate([
   { $match : { status : "A" } }
])
```

This will return all the documents in the "orders" collection that have a "status" field equal to "A".

2. $project: Selects and transforms fields in the documents.

The $project stage allows you to select a subset of fields from the documents in the collection and transform them in various ways. You can use this stage to rename fields, add new fields, or remove fields altogether. Here's an example:

```
db.orders.aggregate([
   { $project : { _id: 0, amount: 1 } }
])
```

This will return a new set of documents with only the "amount" field, and without the "_id" field.

3. $group: Groups documents together based on a specified key and calculates aggregate values for each group.

The $group stage allows you to group the documents in the collection based on a specified key, and calculate aggregate values for each group. You can use this stage to perform operations such as sum, count, and average on the grouped documents. Here's an example:

```
db.orders.aggregate([
   { $group : { _id : "$status", totalAmount: { $sum: "$amount" } } }
])
```

This will group the documents in the "orders" collection by the "status" field, and calculate the total amount for each group.

4. $sort: Sorts the documents in the collection based on a specified field or set of fields.

The $sort stage allows you to sort the documents in the collection based on a specified field or set of fields. You can use this stage to sort the documents in ascending or descending order. Here's an example:

```
db.orders.aggregate([
   { $sort : { amount : -1 } }
])
```

This will return all the documents in the "orders" collection, sorted by the "amount" field in descending order.

5. $limit: Limits the number of documents in the output.

The $limit stage allows you to limit the number of documents that are returned in the output. Here's an example:

```
db.orders.aggregate([
   { $limit : 10 }
])
```

This will return the first 10 documents in the "orders" collection.

6. $skip: Skips a specified number of documents in the input.

The $skip stage allows you to skip a specified number of documents in the input. Here's an example:

```
db.orders.aggregate([
   { $skip : 10 },
   { $limit : 10 }
])
```

This will skip the first 10 documents in the "orders" collection, and return the next 10 documents.

7. $unwind: Deconstructs an array field into multiple documents.

The $unwind stage allows you to deconstruct an array field in the documents into multiple documents, each containing a single value from the array field. Here's an example:

```
db.orders.aggregate([
   { $unwind : "$items" }
])
```

This will return a new set of documents, with one document for each item in the "items" array field.

8. $lookup: Performs a left outer join with another collection.

The $lookup stage allows you to perform a left outer join with another collection in the same database. This stage is useful when you want to combine data from multiple collections. Here's an example:

```
db.orders.aggregate([
   {
      $lookup:
         {
           from: "customers",
           localField: "customer_id",
           foreignField: "_id",
           as: "customer_details"
         }
   }
])
```

This will perform a left outer join with the "customers" collection, using the "customer_id" field in the "orders" collection and the "_id" field in the "customers" collection as the keys for the join. The resulting documents will contain an additional "customer_details" field, which will contain an array of matching documents from the "customers" collection.

9. $out: Writes the results of the aggregation pipeline to a collection.

The $out stage allows you to write the results of the aggregation pipeline to a new collection in the same database. Here's an example:

```
db.orders.aggregate([
   { $match : { status : "A" } },
   { $out : "processed_orders" }
])
```

This will create a new collection called "processed_orders" and write the results of the aggregation pipeline to that collection.

These are the main stages in the MongoDB aggregation pipeline. By combining these stages in various ways, you can perform complex data processing and analysis on your MongoDB collections.
    
<ul>
<li>$match: Filters documents in the collection based on specified criteria.</li>
<li>$group: Groups documents together based on a specified key and calculates aggregate values for each group.</li>
<li>$sort: Sorts the documents in the collection based on a specified field or set of fields.</li>
<li>$project: Selects and transforms fields in the documents.</li>
</ul>

The aggregation pipeline is a powerful tool for performing complex data analysis and processing in MongoDB. It allows you to combine multiple operations into a single query, which can improve performance and reduce the amount of data transferred between the database and the client.

    
    
    
![Dark_pages-to-jpg-0001](https://user-images.githubusercontent.com/108695777/231220392-11314396-21f9-47c0-88f3-2602c0954630.jpg)
![Dark_pages-to-jpg-0002](https://user-images.githubusercontent.com/108695777/231220470-755aec9b-f81c-4d55-a57c-e417ce0ab685.jpg)
![Dark_pages-to-jpg-0003](https://user-images.githubusercontent.com/108695777/231220557-02bc337d-4b86-42df-ade2-e55b79ac5ac1.jpg)
![Dark_pages-to-jpg-0004](https://user-images.githubusercontent.com/108695777/231220599-ac2920e6-bc6b-4603-93b7-9fd87280c79a.jpg)

