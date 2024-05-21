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

```
eg-
db.user_details.find({age:27}).limit(2).sort({name:1})
```

***Below are commonly used commands***

# Query Vs Aggregration pipeline

`>` Query - A query is a request for data from a database that matches certain criteria. It's used to retrieve specific documents that meet a set of conditions. In MongoDB, queries are structured using the find() method or its variations, where you provide a filter to specify the conditions that documents must satisfy in order to be returned in the query result. 
```
db.collection.find({ age: { $gte: 18 } })
```


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

<h2>Standard format for a query</h2>

```
const filterpm = {status: "Approved", projectId: { $in: projectIdArr }};
        const projectionpm = {projectId:1, materials:1, createdAt:1, status:1}
        const optionspm = {}
        const projectmaterials = await projectMaterial.find(filterpm,projectionpm, optionspm)
```


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

<h1>SCHEMA</h1>

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
  address2: addressSchema,                              //Defining a field named "address2" in your schema, and the value of this field should adhere to the structure defined in the "addressSchema".
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

<h2>SCHEMA & MODELS custom Functions+ .select()</h2>

<ol>
Schema Methods:


<li>These methods are available on instances of the model. When you create a document using the model, you can call these methods on that document.</li>
<li>They have access to the specific document's data (i.e., this refers to the document).</li>
<li>Useful for operations that are specific to individual documents.</li>
</ol>

<ol>Static Methods:

<li>These methods are available on the model itself. You call them directly on the model, rather than on a specific document instance.</li>
<li>They do not have access to any specific document's data. They operate at the model level.</li>
<li>Useful for operations that are not tied to a specific document, such as aggregations, finding documents by certain criteria, etc.</li>

</ol>

```
const mongoose = require('mongoose');

const leadsSchema = new mongoose.Schema({
    name: String,
    email: String,
});


// Define a custom method for the SCHEMA
leadsSchema.methods.totalLeadCount = async function() {
    try {
        const count = await this.model('leads').countDocuments();
        return count;
    } catch (error) {
        throw new Error('Error in totalLeadCount method: ' + error);
    }
};

// Define a static method for the MODEL
leadsSchema.statics.totalLeadCount = async function() {
    try {
        const count = await this.countDocuments();
        return count;
    } catch (error) {
        throw new Error('Error in totalLeadCount method: ' + error);
    }
};

// Create the Leads model
const Leads = mongoose.model('leads', leadsSchema);

// Now, you can use the custom method like this:
(async () => {
    try {
        // Create an instance of Leads
        const lead = new Leads({ name: 'John', email: 'john@example.com' });

        // Save the lead to the database
        await lead.save();

        // Call the schema method to get total lead count
        const totalCount = await lead.totalLeadCount();

         // Call the static method to get total lead count
        const totalCount = await Leads.totalLeadCount();

        console.log('Total Lead Count:', totalCount);
    } catch (error) {
        console.error('Error:', error);
    }
})();
```

**Old**

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

```
populate: [{
    path: 'assignTo',
    select: '_id name email mobile teamId departmentId'
}]
```

**The path property specifies the field name in the main document that needs to be populated. In this case, it's 'assignTo'.**

**The select property is used to specify which fields from the referenced document should be populated into the main document. The field names are separated by spaces. So, the code is selecting the following fields from the 'assignTo' document: _id, name, email, mobile, teamId, and departmentId.**

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


a.) Direct field match

```
db.orders.aggregate([
   { $match : { status : "A" } }
])
```

b.) **$nin** (Not In):
   The `$nin` operator checks if the value is not present in an array of values.

   Example:
   To find orders with payment methods that are not 'Credit Card' or 'PayPal':

   ```
   {
     $match: {
       paymentMethod: { $nin: ['Credit Card', 'PayPal'] }
     }
   }
   ```

The `$nin` operator allows you to filter documents based on values that are not present in a specified list of values. This can be particularly useful when you want to exclude documents that match certain values from your results.

c.) **$eq** (Equals):
   The `$eq` operator compares two values and returns true if they are equal.

   Example:
   Suppose you want to find orders with a total amount equal to $500.

   ```
   {
     $match: {
       totalAmount: { $eq: 500 }
     }
   }
   ```

d.) **$ne** (Not Equals):
   The `$ne` operator compares two values and returns true if they are not equal.

   Example:
   To find orders with a total amount not equal to $1000:

   ```
   {
     $match: {
       totalAmount: { $ne: 1000 }
     }
   }
   ```

e.) **$lt** (Less Than) and **$lte** (Less Than or Equal):
   The `$lt` operator checks if the left value is less than the right value, and `$lte` checks if it's less than or equal.

   Example:
   To find orders with a total amount less than $200:

   ```
   {
     $match: {
       totalAmount: { $lt: 200 }
     }
   }
   ```

f.) **$gt** (Greater Than) and **$gte** (Greater Than or Equal):
   The `$gt` operator checks if the left value is greater than the right value, and `$gte` checks if it's greater than or equal.

   Example:
   To find orders with a total amount greater than or equal to $100:

   ```
   {
     $match: {
       totalAmount: { $gte: 100 }
     }
   }
   ```

g.) **$and** (Logical AND) and **$or** (Logical OR):
   The `$and` operator performs a logical AND operation, and `$or` performs a logical OR operation on expressions.

   Example (AND):
   To find orders with a total amount between $100 and $200:

   ```
   {
     $match: {
       $and: [
         { totalAmount: { $gte: 100 } },
         { totalAmount: { $lte: 200 } }
       ]
     }
   }
   ```

   Example (OR):
   To find orders with a total amount less than $50 or greater than $500:

   ```
   {
     $match: {
       $or: [
         { totalAmount: { $lt: 50 } },
         { totalAmount: { $gt: 500 } }
       ]
     }
   }
   ```



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

By default, it doesn't include the entire documents that belong to each group in the output, If you want to retrieve the documents that match each group, you would typically use the $push operator within the $group stage to accumulate the documents in an array. Here's how.

```
const pipeline = [
  {
    $group: {
      _id: '$experienceCenterName',
      documents: { $push: '$$ROOT' } // Accumulate the documents in an array
    }
  }
];

db.getCollection('leads').aggregate(pipeline);
```

the $$ROOT system variable represents the entire document currently being processed. The $push operator creates an array (documents) that holds all the documents belonging to each group.

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

if array is empty it will not include the document at all; i.e d filter it out
//Another example
{
  $unwind:
    {
      path: "$job_activity",
      preserveNullAndEmptyArrays: true
    }
}
```

This will return a new set of documents, with one document for each item in the "items" array field.

8. $lookup: Performs a left outer join with another collection.

The $lookup stage allows you to perform a left outer join with another collection in the same database. This stage is useful when you want to combine data from multiple collections. Here's an example:

```
const result = await MainCollection.aggregate([
  {
    $lookup: {
      from: "projectmaterials",
      localField: "_id",
      foreignField: "projectId",
      as: "projectmaterialsArr",
      pipeline: [         //on the joined documents
        {
          $match: {
            status: "Approved" // You can add any conditions to filter the joined documents
          }
        },
        {
          $project: {
            _id: 0, // Exclude the _id field from the joined documents
            name: 1, // Include the 'name' field from the joined documents
            quantity: 1 // Include the 'quantity' field from the joined documents
          }
        },
        {
          $sort: {
            quantity: -1 // Sort the joined documents by 'quantity' field in descending order
          }
        }
        // You can add more pipeline stages as needed
      ]
    }
  }
]);

console.log(result);

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

<h2>Arithematic Aggregation Methods</h2>

In MongoDB aggregation pipelines, you can perform arithmetic operations using various aggregation operators that are provided by MongoDB. Here are some commonly used arithmetic operators for performing arithmetic operations within aggregation pipelines:

1. **$add**: Adds numbers together or performs date arithmetic.
   
   Example:
   ```
   {
     $add: [ "$field1", "$field2" ] // Adds the values of field1 and field2
   }
   ```

2. **$subtract**: Subtracts one number from another or performs date arithmetic.
   
   Example:
   ```
   {
     $subtract: [ "$field1", "$field2" ] // Subtracts the value of field2 from field1
   }
   ```

3. **$multiply**: Multiplies numbers together.
   
   Example:
   ```
   {
     $multiply: [ "$quantity", "$price" ] // Multiplies the values of quantity and price
   }
   ```

4. **$divide**: Divides one number by another.
   
   Example:
   ```
   {
     $divide: [ "$totalAmount", "$numItems" ] // Divides the value of totalAmount by numItems
   }
   ```

5. **$mod**: Calculates the remainder of the division of two numbers.
   
   Example:
   ```
   {
     $mod: [ "$totalAmount", 10 ] // Calculates the remainder of totalAmount divided by 10
   }
   ```

*USECASE OF ABOVE* - These operators can be used in the `$project` stage of your aggregation pipeline to create new fields or modify existing fields based on arithmetic operations. Here's an example of how you might use them:

```
db.orders.aggregate([
  {
    $project: {
      item: 1,
      totalAmount: { $multiply: [ "$quantity", "$price" ] }, // Calculate totalAmount
      discountedAmount: { $subtract: [ "$totalAmount", "$discount" ] }, // Calculate discountedAmount
      taxAmount: { $multiply: [ "$totalAmount", 0.1 ] } // Calculate taxAmount (assuming 10% tax)
    }
  }
]);
```

In above example, the `$multiply` and `$subtract` operators are used within the `$project` stage to perform arithmetic operations on fields and calculate new values. Adapt this example to match your specific use case and the fields you're working with.

<h2>Conditional Operators, Field Addition and More Aggregation Methods</h2>

1.) **$addFields:** Use this operator to add new field in pipeline; $project: can also kinda do this but differently
```
db.orders.aggregate([
  {
    $lookup: {
      from: 'customers',          // The second collection name
      localField: 'customerId',   // The field in the 'orders' collection
      foreignField: '_id',        // The corresponding field in the 'customers' collection
      as: 'customerInfo'          // Alias for the joined data
    }
  },
  {
    $addFields: {
      customerNames: {                   // customerNames will be an array of names from each object in customerInfo array
        $map: {
          input: '$customerInfo',        // Input array (customerInfo)
          as: 'customer',                // Variable to represent each element
          in: '$$customer.name'          // Access the 'name' field of each customer
        }
      }
    }
  },
  {
    $project: {
      customerInfo: 0  // Remove the 'customerInfo' field if not needed
    }
  }
]);
```

2.) **$cond** - The $cond operator evaluates a condition and returns one of two specified expressions based on the result of the evaluation.

Example:
Suppose you want to categorize orders as "High Value" if the total amount is greater than $1000, otherwise categorize them as "Low Value".

```
{
  $project: {
    orderNumber: 1,
    category: {
      $cond: {
        if: { $gt: ['$totalAmount', 1000] },
        then: 'High Value',
        else: 'Low Value'
      }
    }
  }
}
```

3.) **$switch** - The $switch operator performs conditional logic similar to a switch statement in programming languages.

```
{
  $project: {
    productId: 1,
    category: {
      $switch: {
        branches: [
          { case: { $eq: ['$type1', 'Electronics'] }, then: 'Electronics' },
          { case: { $eq: ['$type2', 'Clothing'] }, then: 'Apparel' },
          { case: { $eq: ['$type3', 'Groceries'] }, then: 'Food' },
          { case: { $eq: ['$type4', 'Books'] }, then: 'Books' },
          { case: { $eq: ['$type5', 'Furniture'] }, then: 'Home' },
          { case: { $eq: ['$type6', 'Sports'] }, then: 'Sports' },
          { case: { $eq: ['$type7', 'Toys'] }, then: 'Toys' }
        ],
        default: 'Other'
      }
    }
  }
}
```

4.) **$ifNull** :
The $ifNull operator checks if the specified expression is null and returns a default value if it is.

Example:
If you want to replace null values in a field with a default value:

```
{
  $project: {
    productName: 1,
    price: { $ifNull: ['$price', 0] }  // Replace null prices with 0
  }
}
```

5.) **$arrayElemAt** - This operator in MongoDB's aggregation pipeline is used to extract an element from an array at a specified index position. Here's an example of how you can use the $arrayElemAt operator:

```
{
  "_id": 1,
  "name": "John Doe",
  "skills": ["Programming", "Communication", "Problem Solving", "Teamwork"]
}

```
Applying $arrayElemAt
```
db.employees.aggregate([
  {
    $project: {
      name: 1,
      thirdSkill: { $arrayElemAt: ["$skills", 2] }
    }
  }
]);
```
Output

```
{
  "_id": 1,
  "name": "John Doe",
  "thirdSkill": "Problem Solving"
}
```

*Example 2*

For Array Of Objects

```
{
  "_id": 1,
  "name": "Alice",
  "subjects": [
    { "name": "Math", "teacher": "Mr. Smith" },
    { "name": "History", "teacher": "Mrs. Johnson" },
    { "name": "Science", "teacher": "Mr. Brown" }
  ]
}
```

```
db.students.aggregate([
  {
    $project: {
      name: 1,
      secondSubject: { $arrayElemAt: ["$subjects.name", 1] }
    }
  }
]);
```
In this example, the $project stage uses the $arrayElemAt operator to extract the name of the second subject from the subjects array of each student. The first argument to $arrayElemAt is the array field you want to extract from ($subjects.name), and the second argument is the index position (0-based) of the element you want to extract (1).

```
{
  "_id": 1,
  "name": "Alice",
  "secondSubject": "History"
}
```

Example 3 - Suppose you want to select the name of the second subject only if the teacher for the second subject is "Mrs. Johnson". Otherwise, you want to select "No Match".

```
db.students.aggregate([
  {
    $project: {
      name: 1,
      selectedSubject: {
        $cond: {
          if: { $eq: [{ $arrayElemAt: ["$subjects.teacher", 1] }, "Mrs. Johnson"] },
          then: { $arrayElemAt: ["$subjects.name", 1] },
          else: "No Match"
        }
      }
    }
  }
]);
```

In this example, the $cond operator evaluates the condition inside its if field. If the condition is met (teacher of the second subject is "Mrs. Johnson"), it selects the name of the second subject using the $arrayElemAt operator in the then field. If the condition is not met, it selects "No Match" in the else field.

```
{
  "_id": 1,
  "name": "Alice",
  "selectedSubject": "History"
}
```

If the teacher of the second subject were not "Mrs. Johnson", the output would be:

```
{
  "_id": 1,
  "name": "Alice",
  "selectedSubject": "No Match"
}
```

6.) **$reduce** - The $reduce operator in MongoDB's aggregation pipeline is used to iteratively reduce an array to a single value. It allows you to apply a user-defined expression to each element of an array and accumulate a single result. The $reduce operator is particularly useful for performing calculations or transformations that involve multiple steps on array elements.

Here's the syntax of the $reduce operator:

```
{
  $reduce: {
    input: <array>,
    initialValue: <initialValue>,
    in: <expression>
  }
}
```
Let's break down each part of the $reduce operator:

input: This is the array you want to iterate over and reduce.
initialValue: This is the starting value of the accumulator. The accumulator is a variable that holds the current accumulated value.
in: This is an expression that combines the current accumulator value with the current element being iterated over. It's essentially the logic you want to apply for each element in the array.

Example-1

```
{
  "_id": 1,
  "name": "Alice",
  "scores": [90, 85, 95, 78, 92]
}
--------------------------------
db.students.aggregate([
  {
    $project: {
      name: 1,
      totalScore: {
        $reduce: {
          input: "$scores",
          initialValue: 0,
          in: { $add: ["$$value", "$$this"] }
        }
      }
    }
  }
]);
```
In this example, the $reduce operator is used inside the $project stage. It iterates over the "scores" array of each student and accumulates the total score using the $add expression. The $$value variable represents the current accumulator value, and $$this represents the current element being iterated over.

Example-2

```
{
  "_id": 1,
  "orderNumber": "ORD123",
  "items": [
    { "name": "Item A", "price": 50 },
    { "name": "Item B", "price": 75 },
    { "name": "Item C", "price": 60 }
  ]
}
-------------------------------------
db.orders.aggregate([
  {
    $project: {
      orderNumber: 1,
      minItemPrice: {
        $reduce: {
          input: "$items",
          initialValue: Number.MAX_VALUE,
          in: { $min: ["$$value", "$$this.price"] }
        }
      }
    }
  }
]);

or

db.orders.aggregate([
  {
    $project: {
      orderNumber: 1,
      minItemPrice: {
        $min: {
          $map: {
            input: "$items",
            as: "item",
            in: "$$item.price"
          }
        }
      }
    }
  }
]);

```
The $min operator finds the minimum value from that array.

Example-3 Nested reduce i.e reduce on a document field containing arrays of array

```
{
  MATERIAL: {
    $reduce : {
      input: '$projectmaterialsArr',
      initialValue : 0,
      in : {
        $add : ['$$value', {$reduce: {
          input: '$$this.materials',
          initialValue : 0,
          in : {$add : ["$$value", '$$this.quantity']}
        }}]
      }
    }
  }
}
```
7.) **$filter** - To filter an item from an array in the MongoDB aggregation pipeline, you can use the $filter operator. The $filter operator allows you to create a new array that only contains the elements that match a specified condition. Here's how you can do it:

```
{
  "_id": 1,
  "orderNumber": "ORD123",
  "items": [
    { "name": "Item A", "price": 50 },
    { "name": "Item B", "price": 75 },
    { "name": "Item C", "price": 60 }
  ]
}

-------------------------------------

db.orders.aggregate([
  {
    $project: {
      orderNumber: 1,
      filteredItems: {
        $filter: {
          input: "$items",
          as: "item",
          cond: { $ne: ["$$item.name", "Item B"] }
        }
      }
    }
  }
]);
```


<h1>Mongoose Commands</h1>

1. `mongoose.connect(uri, [options])`: Connects to a MongoDB database using the specified connection string. Example:

```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database', err));
```

2. `mongoose.connection`: Represents the current connection to the database. You can use this object to register event listeners and perform other actions. Example:

```
const connection = mongoose.connection;

connection.on('connected', () => console.log('Connected to database'));
connection.on('disconnected', () => console.log('Disconnected from database'));
```

3. `mongoose.Schema(definition, [options])`: Defines a schema for a collection. A schema specifies the structure of the documents and the data types of their fields. Example:

```
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: { type: String, enum: ['Male', 'Female', 'Other'] }
});

const Model = mongoose.model('Model', schema);
```

4. `model.save([options], [callback])`: Saves the current document to the database. Example:

```
const doc = new Model({ name: 'John', age: 25, gender: 'Male' });

doc.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Document saved');
  }
});
```

5. `Model.create(doc(s), [callback])`: Creates one or more documents and saves them to the database. Example:

```
Model.create([
  { name: 'John', age: 25, gender: 'Male' },
  { name: 'Jane', age: 30, gender: 'Female' }
], (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Documents saved');
  }
});
```

6. `Model.find(conditions, [projection], [options], [callback])`: Finds all documents that match the given conditions and returns them as an array of Mongoose documents. You can specify a projection to select only the fields you want to retrieve. Example:

```
Model.find({ gender: 'Male' }, 'name age', (err, docs) => {
  if (err) {
    console.error(err);
  } else {
    console.log(docs);
  }
});
```

7. `Model.find({}).sort(sort).skip(skip).limit(limit).exec(callback)`: Finds all documents in the collection and applies the specified sort, skip, and limit options. The `exec` method executes the query and returns the results as an array of Mongoose documents. Example:

```
Model.find({}).sort({ name: 'asc' }).skip(10).limit(5).exec((err, docs) => {
  if (err) {
    console.error(err);
  } else {
    console.log(docs);
  }
});

------------------------------------------------------------------------------------
   
db.user_details.find({age:{$gt:10}},{name:1, age:1, _id:0},{limit:6, sort:{age:-1}})
```

8. `Model.findByIdAndDelete(id, [options], [callback])`: Finds a single document by its `_id` field, deletes it from the database, and returns the deleted document. Example:

```
Model.findByIdAndDelete('60a7c534aa88b72fb7b8c1e1', (err, doc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
```

9. `Model.findOneAndDelete(conditions, [options], [callback])`: Finds a single document that matches the given conditions, deletes it from the database, and returns the deleted document. Example:

```
Model.findOneAndDelete({ name: 'John' }, (err, doc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
```

10. `Model.findByIdAndUpdate(id, update, [options], [callback])`: Finds a single document by its `_id` field, updates it with the specified fields and values, and returns the updated document. Example:

```
Model.findByIdAndUpdate('60a7c534aa88b72fb7b8c1e1', { age: 26 }, { new: true }, (err, doc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
```

11. `Model.findOneAndUpdate(conditions, update, [options], [callback])`: Finds a single document that matches the given conditions, updates it with the specified fields and values, and returns the updated document. Example:

```
Model.findOneAndUpdate({ name: 'John' }, { age: 26 }, { new: true }, (err, doc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
```

12. `Model.updateMany(conditions, update, [options], [callback])`: Updates all documents that match the given conditions with the specified fields and values. Example:

```
Model.updateMany({ isMinor: true }, { isMinor: false }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Documents updated');
  }
});
```

13. `Model.countDocuments(conditions, [callback])`: Counts the number of documents that match the given conditions. Example:

```
Model.countDocuments({ gender: 'Male' }, (err, count) => {
  if (err) {
    console.error(err);
  } else {
    console.log(count);
  }
});
```

14. `Model.distinct(field, [conditions], [callback])`: Finds all unique values for the given field that match the given conditions. Example:

```
Model.distinct('gender', { age: { $gte: 18 } }, (err, values) => {
  if (err) {
    console.error(err);
  } else {
    console.log(values);
  }
});
```

15. `Model.exists(conditions, [callback])`: Checks if at least one document exists that matches the given conditions. Example:

```
Model.exists({ name: 'John' }, (err, exists) => {
  if (err) {
    console.error(err);
  } else {
    console.log(exists);
  }
});
```

16. `Model.populate(path, [select], [model], [match], [options])`: Populates the specified field with documents from another collection. Example:

```
const schema1 = new mongoose.Schema({
  name: String,
  model2: { type: mongoose.Schema.Types.ObjectId, ref: 'Model2' }
});

const schema2 = new mongoose.Schema({
  field: String
});

const Model1 = mongoose.model('Model1', schema1);
const Model2 = mongoose.model('Model2', schema2);

Model1.find().populate('model2', 'field').exec((err, docs) => {
  if (err) {
    console.error(err);
  } else {
    console.log(docs);
  }
});
```

17. `Model.distinct(field, [conditions], [callback])`: Returns an array of distinct values for the given field across all documents in the collection. Example:

```
Model.distinct('name', (err, distinctValues) => {
  if (err) {
    console.error(err);
  } else {
    console.log(distinctValues);
  }
});
```

18. `Model.findOneAndRemove(conditions, [options], [callback])`: Finds a single document that matches the given conditions, removes it from the database, and returns the removed document. Example:

```
Model.findOneAndRemove({ name: 'John' }, (err, doc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(doc);
  }
});
```

19. `Model.insertMany(docs, [options], [callback])`: Inserts an array of documents into the database. Example:

```
const docs = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];

Model.insertMany(docs, (err, docs) => {
  if (err) {
    console.error(err);
  } else {
    console.log(docs);
  }
});
```

20. `Model.deleteOne(conditions, [callback])`: Deletes the first document that matches the given conditions. Example:

```
Model.deleteOne({ name: 'John' }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Document deleted');
  }
});
```

21. `Model.deleteMany(conditions, [callback])`: Deletes all documents that match the given conditions. Example:

```
Model.deleteMany({ age: { $gte: 18, $lte: 25 } }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Documents deleted');
  }
});
```

22. `Model.watch([pipeline], [options])`: Opens a change stream on the collection, which allows you to watch for changes to the data in real time. Example:

```
const changeStream = Model.watch();

changeStream.on('change', (change) => {
  console.log(change);
});
```

23. `Model.createIndexes()`: Creates indexes on all fields that have been marked as indexed in the schema. Example:

```
Model.createIndexes((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Indexes created');
  }
});
```

24. `Model.collection.drop([callback])`: Drops the entire collection from the database. Example:

```
Model.collection.drop((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Collection dropped');
  }
});
```

25. `Model.count([conditions], [callback])`: Counts the number of documents in the collection. Example:

```
Model.count((err, count) => {
  if (err) {
    console.error(err);
  } else {
    console.log(count);
  }
});
```

26. `Model.ensureIndexes([callback])`: Ensures that all indexes on the collection are up to date with the schema definition. Example:

```
Model.ensureIndexes((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Indexes ensured');
  }
});
```

27. `Model.geoNear(point, [options], [callback])`: Performs a geospatial search on the collection, returning documents in order of proximity to the specified point. Example:

```
const point = {
  type: 'Point',
  coordinates: [-73.97, 40.77]
};

Model.geoNear(point, { maxDistance: 1000, spherical: true }, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});
```

28. `Model.geoSearch(conditions, [options], [callback])`: Searches for documents within a specified geographic area. Example:

```
Model.geoSearch({
  type: 'Polygon',
  coordinates: [[[-122.508, 37.708], [-122.358, 37.708], [-122.358, 37.818], [-122.508, 37.818], [-122.508, 37.708]]]
}, {
  near: [37.7749, -122.4194],
  maxDistance: 10
}, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});
```

In the `geoSearch` example, we are searching for documents within a polygonal region defined by the `coordinates` array, and we are specifying that we only want to return results that are within 10 miles of the point `[37.7749, -122.4194]`.

29. `Model.updateMany(conditions, update, [options], [callback])`: Updates all documents that match the given conditions with the specified update. Example:

```
Model.updateMany({ age: { $gte: 18, $lte: 25 } }, { isAdult: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Documents updated');
  }
});
```

30. `Model.watch([pipeline], [options])`: Opens a change stream on the collection, which allows you to watch for changes to the data in real time. Example:

```
const changeStream = Model.watch();

changeStream.on('change', (change) => {
  console.log(change);
});
```
   
<h2>Options</h2>

In Mongoose, `[options]` is an optional parameter that can be passed to many of the different query and update methods. This parameter allows you to specify various options that modify the behavior of the query or update operation. Here are some of the most commonly used options:

- `lean`: If set to `true`, the query will return plain JavaScript objects instead of Mongoose documents. This can improve performance, since you won't have to convert the documents to plain objects yourself. Example:

  ```
  Model.find({}).lean().exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```

- `select`: Specifies which fields to include or exclude from the query results. You can either include the fields you want, or exclude the fields you don't want. Example:

  ```
  Model.find({}).select('name age').exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```

- `sort`: Specifies the order in which to sort the query results. You can either sort in ascending order (1) or descending order (-1). Example:

  ```
  Model.find({}).sort({ age: -1 }).exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```

- `limit`: Specifies the maximum number of documents to return in the query results. Example:

  ```
  Model.find({}).limit(10).exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```

- `skip`: Specifies the number of documents to skip before returning the query results. Example:

  ```
  Model.find({}).skip(10).exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```

- `new`: If set to `true`, the update methods (`update`, `findOneAndUpdate`, etc.) will return the updated document instead of the original document. Example:

  ```
  Model.updateOne({ name: 'John' }, { age: 30 }, { new: true }, (err, doc) => {
    if (err) {
      console.error(err);
    } else {
      console.log(doc);
    }
  });
  ```

- `upsert`: If set to `true`, the update methods will create a new document if no document is found that matches the query criteria. Example:

  ```
  Model.updateOne({ name: 'John' }, { age: 30 }, { upsert: true }, (err, doc) => {
    if (err) {
      console.error(err);
    } else {
      console.log(doc);
    }
  });
  ```

- `populate`: Populates referenced documents with their actual contents (useful for populating a referenced document in a one-to-one or one-to-many relationship). Example:

  ```
  Model.find({}).populate('friends').exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  ```
- `distinct`: gives distinct values taken up by a field inside the whole collection

  ```
  db.getCollection("projects").distinct('status')
  ==>
  "Completed",
    "Factory",
    "IMOS",
    "Ready for dispatch",
    "Scoping",
    "Site QC",
    "Under Execution",
    "Under Procurement",
    "Under Production - Fixing",
    "Under Production - Machine"
  ```

  <h2>Mongoose Middleware - PRE & POST functions</h2>

**Schema File => Middleware functions are applied here on schema level, BEFORE making a model, if you want to apply it on model/document level, you can add those in the routing file/enviornment**

```
async function dateFeederMiddleware(next) {
    const update = this.getUpdate(); // Access the update object
    if (update && update.$set && update.$set.imosStage) {
    const updatedStatus = update.$set.imosStage;

    if(updatedStatus === 'Assign To IMOS User' || updatedStatus === 'Assign To IMOS User & Site BOM In-progress'){
        update.$set.siteQcCompletedDate = new Date();
        update.$set.imosStartDate = new Date();
    }
    else if(updatedStatus === 'IMOS Completed' || updatedStatus === 'IMOS Completed & Site BOM In-progress') {
    update.$set.imosCompletedDate = new Date();
    }
  }


  if (update && update.$set.currentStage) {
    const document = await this.findOne();
    const updatedStatus = update.$set.currentStage;
    console.log(updatedStatus,"updatedStatus");

    if(updatedStatus === "Assign To IMOS User & Site BOM Completed" || updatedStatus === "IMOS Completed & Site BOM Completed" || updatedStatus === "IMOS Completed & Site BOM In-progress" || updatedStatus === "Under Procurement & Site BOM In-progress"){
        update.$set.factoryBomStartDate = new Date();
    }
    if(updatedStatus === 'Under Procurement' || updatedStatus === 'Under Procurement & Site BOM In-progress'){
        update.$set.factoryBomCompletedDate = new Date();
    }
  }
    next();
}
LeadSchema.pre('findOneAndUpdate', dateFeederMiddleware);
LeadSchema.pre('updateOne', dateFeederMiddleware);
LeadSchema.pre('updateMany', dateFeederMiddleware);
LeadSchema.pre('update', dateFeederMiddleware);
LeadSchema.pre('save', dateFeederMiddleware);

const Lead = module.exports = mongoose.model('Lead', LeadSchema);
```

**Route file**

```
const ModelMiddleware = require('../models/modelMiddlewareCheck');
const express = require('express');
const router = express.Router();

router.put('/', async (req, res) => {
  try {
    console.log('req received as', req.body);
    const newDoc = new ModelMiddleware();
    newDoc.stage = 'stage1';
    newDoc.stageChangeDate= null;
    await newDoc.save();
    return res.status(200).send('stage1 created successfully');
  } catch (err) {
    console.log(err);
    res.status(400).send('unsuccessful operation');
  }
});

router.put('/changestage', async (req, res) =>{
    try{
    const id = req.query.id;
    const filter = {'_id': id};
    const update = {$set: {stage: 'stage2'}};
    ModelMiddleware.findOneAndUpdate(filter,update).then(updatedDocument => {
        if (!updatedDocument) {
          // Handle case when document is not found
          console.log('Document not found.');
        } else {
        //   console.log('Document updated:', updatedDocument);
        }
      })
      .catch(error => {
        console.error('Error updating document:', error);
      });

    res.status(200).send('succefully updated')
    }
    catch (err) {
        console.log(err);
        res.status(400).send('unsuccsefull')
    }
})

router.put('/deleteAll', async (req, res) => {
    ModelMiddleware.deleteMany({}).then(() => res.status(200).send('succefully deleted'))
})

module.exports = router;
```

<h2>Middleware with change to another model and an api call</h2>

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constants = require('../constant/constant');
const Project = require('./project');
const express = require('express');
const router = express.Router();
const async = require('async');
const axios = require('axios');

const QueueProcessSchema = new Schema({
    projectId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    status: {
        type: String,
        enum: constants.processStatus
    },
    version: {
        type: String
    },
    quality: {
        type: String
    },
    sceneName: {
        type: String
    },
    startingTime: {
        type: Date
    },
    endingTime: {
        type: Date
    },
    command: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId
    },
    skpPath: {
        type: String
    },
    jsonPath: {
        type: String
    },
    outputPath: {
        type: String
    },
    uuid_val: {
        type: String
    },
    orgId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true,
        default: false
    }
});

QueueProcessSchema.plugin(require('mongoose-timestamp'));
QueueProcessSchema.plugin(require('mongoose-delete'), {
    overrideMethods: true,
    deletedAt: true
});

async function dataFeederMiddleware(next) {
    const update = this.getUpdate(); // Access the update object
    // update.$set && update.$set.imosStage
    // update.$set.imosStartDate = new Date();
    const document = await this.findOne();
    const UUID = document.uuid_val;
    if(update.$set.status && update.$set.status == 'Completed'){

        const apiUrl = `http://localhost:5000/api/query/addImageLinkToProjectDb?UUID=${UUID}`
        axios.post(apiUrl).then((response) => {
            console.log('------------------------GUTSANDGLORY------------------------',response);
        }).catch((error) => {
            console.log('------------------------GUTSANDGLORY------------------------',error);
        });
    }
    next();
}
QueueProcessSchema.pre('findOneAndUpdate', dataFeederMiddleware);
QueueProcessSchema.pre('updateOne', dataFeederMiddleware);
QueueProcessSchema.pre('updateMany', dataFeederMiddleware);
QueueProcessSchema.pre('update', dataFeederMiddleware);
// QueueProcessSchema.pre('save', dataFeederMiddlewareSave);


const QueueProcess = module.exports = mongoose.model('QueueProcess', QueueProcessSchema);

```

![Dark_pages-to-jpg-0001](https://user-images.githubusercontent.com/108695777/231220392-11314396-21f9-47c0-88f3-2602c0954630.jpg)
![Dark_pages-to-jpg-0002](https://user-images.githubusercontent.com/108695777/231220470-755aec9b-f81c-4d55-a57c-e417ce0ab685.jpg)
![Dark_pages-to-jpg-0003](https://user-images.githubusercontent.com/108695777/231220557-02bc337d-4b86-42df-ade2-e55b79ac5ac1.jpg)
![Dark_pages-to-jpg-0004](https://user-images.githubusercontent.com/108695777/231220599-ac2920e6-bc6b-4603-93b7-9fd87280c79a.jpg)


**Pipeline Examples**

```
[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        status: {
          $nin: ["Completed", "Site QC"],
        },
      },
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        projectNumber: 1,
        clientName: 1,
      },
  },
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "projectmaterials",
        localField: "_id",
        foreignField: "projectId",
        as: "projectmaterialsArr",
        pipeline: [
          {
            $match: {
              status: "Approved",
            },
          },
          {
            $project: {
              projectId: 1,
              materials: 1,
              createdAt: 1,
              status: 1,
            },
          },
        ],
      },
  },
  {
    $addFields: {
      MATERIAL: {
        $reduce: {
          input: "$projectmaterialsArr",
          initialValue: 0,
          in: {
            $add: [
              "$$value",
              {
                $reduce: {
                  input: "$$this.materials",
                  initialValue: 0,
                  in: {
                    $add: [
                      "$$value",
                      "$$this.quantity",
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "procurements",
        localField: "_id",
        foreignField: "projectId",
        as: "procurements",
        pipeline: [
          {
            $project: {
              materials: 1,
              projectId: 1,
            },
          },
        ],
      },
  },
  {
    $addFields: {
      PROCUREMENT: {
        $reduce: {
          input: "$procurements",
          initialValue: 0,
          in: {
            $add: [
              "$$value",
              {
                $reduce: {
                  input: "$$this.materials",
                  initialValue: 0,
                  in: {
                    $add: [
                      "$$value",
                      "$$this.requestedQuantity",
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "serviceorders",
        localField: "_id",
        foreignField: "projectId",
        as: "serviceorders",
        pipeline: [
          {
            $project: {
              materials: 1,
              projectId: 1,
            },
          },
        ],
      },
  },
  {
    $addFields: {
      SERVICEORDER: {
        $reduce: {
          input: "$serviceorders",
          initialValue: 0,
          in: {
            $add: [
              "$$value",
              {
                $reduce: {
                  input: "$$this.materials",
                  initialValue: 0,
                  in: {
                    $add: [
                      "$$value",
                      "$$this.requestedQuantity",
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "materialtransfers",
        localField: "_id",
        foreignField: "projectId",
        as: "materialtransfers",
        pipeline: [
          {
            $project: {
              materials: 1,
              projectId: 1,
            },
          },
        ],
      },
  },
  {
    $addFields: {
      MATERIALTRANSFER: {
        $reduce: {
          input: "$materialtransfers",
          initialValue: 0,
          in: {
            $add: [
              "$$value",
              {
                $reduce: {
                  input: "$$this.materials",
                  initialValue: 0,
                  in: {
                    $add: [
                      "$$value",
                      "$$this.requestedQuantity",
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    $lookup: {
      from: "leads",
      localField: "_id",
      foreignField: "erpProjectId",
      as: "leads",
      pipeline: [
        {
          $project: {
            customerDesignSignOffDate: {
              $cond: {
                if: {
                  $eq: [
                    "$customerDesignSignOffDate",
                    null,
                  ],
                },
                then: "$missingDateValue",
                // Provide a default value when the date is missing
                else: "$customerDesignSignOffDate",
              },
            },
            currentStage: 1,
          },
        },
        // Add more stages to the pipeline if needed
      ],
    },
  },
  {
    $addFields:
      /**
       * newField: The new field name.
       * expression: The new field expression.
       */
      {
        leads: {
          $arrayElemAt: ["$leads", 0],
        },
      },
  },
  {
    $addFields:
      /**
       * newField: The new field name.
       * expression: The new field expression.
       */
      {
        customerDesignSignOffDate:
          "$leads.customerDesignSignOffDate",
        currentStage: "$leads.currentStage",
      },
  },
  {
    $lookup: {
      from: "sitebomprojects",
      localField: "_id",
      foreignField: "projectId",
      as: "sitebomprojects",
      pipeline: [
        {
          $project: {
            createdAt: {
              $cond: {
                if: {
                  $eq: ["$createdAt", null],
                },
                then: "$missingDateValue",
                // Provide a default value when the date is missing
                else: "$createdAt",
              },
            },
          },
        },
        // Add more stages to the pipeline if needed
      ],
    },
  },
  {
    $addFields:
      /**
       * newField: The new field name.
       * expression: The new field expression.
       */
      {
        sitebomprojects: {
          $arrayElemAt: ["$sitebomprojects", 0],
        },
      },
  },
  {
    $addFields:
      /**
       * newField: The new field name.
       * expression: The new field expression.
       */
      {
        assignedDate:
          "$sitebomprojects.createdAt",
      },
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        projectmaterialsArr: 0,
        procurements: 0,
        serviceorders: 0,
        materialtransfers: 0,
        sitebomprojects: 0,
        leads: 0,
      },
  },
  {
    $addFields: {
      percentCompletion: {
        $multiply: [
          {
            $divide: [
              {
                $add: [
                  {
                    $ifNull: ["$PROCUREMENT", 0],
                  },
                  {
                    $ifNull: ["$SERVICEORDER", 0],
                  },
                  {
                    $ifNull: [
                      "$MATERIALTRANSFER",
                      0,
                    ],
                  },
                ],
              },
              {
                $cond: [
                  {
                    $eq: [
                      {
                        $ifNull: ["$MATERIAL", 0],
                      },
                      0,
                    ],
                  },
                  1,
                  "$MATERIAL",
                ],
              },
            ],
          },
          100,
        ],
      },
    },
  },
  {
    $addFields: {
      dateDifferenceInDays: {
        $divide: [
          {
            $subtract: [
              new Date(),
              "$assignedDate",
            ],
          },
          // Difference in milliseconds
          1000 * 60 * 60 * 24, // Milliseconds in a day
        ],
      },
    },
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        dateDifferenceInDays: -1,
      },
  },
]
```

<h3>Find Query to search on an array field</h3>

```
db.collectionName.find({
  type: {
    $not: {
      $elemMatch: { $eq: "store" } // Replace "store" with the value you want to exclude
    }
  }
});
```

<h3>Using aggregation stage match in node</h3>

```
router.get('/getFromLeads', async (req, res)=>{
    try{
        const data = await Lead.aggregate([
            {
                $match:{designToExecutionLogsStatus: "Sent For Approval",
                    designStages: "Design Sign-off",
                    departmentId: mongoose.Types.ObjectId("5cb70b89ffa4965f53aa22d8")
                }
            }
        ])
        console.log('data is',data.length);
        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
```

<h3 href='https://www.mongodb.com/docs/manual/changeStreams/'>Change Stream</h3>

Change streams allow applications to access real-time data changes, Applications can use change streams to subscribe to all data changes on a single collection {db.collection.watch()}, a database {db.watch()}, or an entire deployment {mongo.watch()}, and immediately react to them. Because change streams use the aggregation framework, applications can also filter for specific changes or transform the notifications at will.

```
const { MongoClient } = require('mongodb');
const config = require('../config/database');

module.exports = function () {
    MongoClient.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            console.log("Connected to MongoDB");

            const db = client.db('inventory_tool');

            if (db) {
                console.log("Database object obtained successfully");
                // Now you can work with the database
                const collection = db.collection('chmtickets');

                // Create a change stream
                // const changeStream = collection.watch();   //monitor a collection
                const changeStream = db.watch();              //monitor the db

                // Listen for changes
                changeStream.on('change', change => {
                    console.log("Change occurred:", change);
                    // Handle the change here
                });
            } else {
                console.log("Failed to obtain the database object");
            }

        })
        .catch(err => console.error('Error in connection', err));
}

```
