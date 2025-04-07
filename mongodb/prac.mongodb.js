use("sigma")

// db.course.insertOne({
//     name: "MongoDB",
//     price: 100,
//     instructor: "John Doe",})

// db.course.insertMany([
//     { name: "Node.js", price: 200, instructor: "Jane Smith" }, 
//     { name: "React", price: 150, instructor: "Alice Johnson" },
//     { name: "Angular", price: 180, instructor: "Bob Brown" }])

// db.course.updateMany(
//     { price: 100 },
//     { $set: { price: 120 } }
// )
db.course.deleteMany(
    { price: 120 } // delete all documents with price 120
)