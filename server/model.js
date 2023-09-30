import mongoose from "mongoose";
// main().catch(err => console.log(err));

// Making the schema for the application
const todoSchema = new mongoose.Schema({
  task: String,
  date: String
});

export const todoTask =mongoose.model('todos', todoSchema);

export async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
  .then(()=>{console.log("Connected to DB");});  

  //Making a model for the schema 
  // const todoTask = mongoose.model('todos', todoSchema);

  // const task = new todoTask({ task: 'Build app', date: "26-Aug" });

  // task.save();
  // use `await mongoose.connect('mongoDB://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 