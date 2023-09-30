// import mongoose from "mongoose";
import { todoTask } from "./model.js";

export async function getTodo(req,res){
    todoTask.find()
    .then((data)=>{res.send(data);});    

}

export async function saveTodo(req,res){
    const { task,date }=req.body;
    console.log({ task,date });

   

    todoTask.create({ task,date })
    .then(()=>{console.log("Added task successfully");}) 

}

export async function deleteTodo(req,res){
    // const { text }=req.body;
    // console.log({ text });

    todoTask.deleteMany()
    .then(()=>{console.log("Deleted successfully");}) 

}
