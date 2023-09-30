import express, {Router} from "express";
import { deleteTodo, getTodo, saveTodo } from "./controller.js";
import { main } from "./model.js";

const router= Router();
const  app =express();
const port=3000;
app.use(express.json())



main()

app.get("/",getTodo);
app.post("/save",saveTodo);
app.post("/delete",deleteTodo);




app.listen(port,(req,res)=>{
    console.log(`Server up at port ${port}`);
});
