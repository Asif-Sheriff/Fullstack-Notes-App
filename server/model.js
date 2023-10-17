import mongoose from "mongoose";

// Making the schema for the application
const todoSchema = new mongoose.Schema({
  task: String,
  date: String
});


// Making a model for the database and exporting it
export const todoTask =mongoose.model('todos', todoSchema);


//This function starts the database
export async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
  .then(()=>{console.log("Connected to DB");});
    
}
 