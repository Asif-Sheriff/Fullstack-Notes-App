import express, {Router} from "express";
import { deleteTodo, getTodo, saveTodo } from "./controller.js";
import { main } from "./model.js";
import cors from "cors";

const router= Router();
const  app =express();
const port=3000;

//Express.json is used for accessing the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Cors is used to enable support to make api calls
app.use(cors())


main()


//Routes
app.get("/",getTodo);
app.post("/save",saveTodo);
app.post("/delete",deleteTodo);




app.listen(port,(req,res)=>{
    console.log(`Server up at port ${port}`);
});
