import { todoTask } from "./model.js";


//This function gets all the tasks from the database
export async function getTodo(req, res) {
    todoTask.find()
        .then((data) => { res.send(data); });

}

//This function adds tasks to the database
export async function saveTodo(req, res) {
    const { task } = req.body;    
    todoTask.create({ task })
        .then(() => { console.log("Added task successfully"); })
}

//this function deletes tasks form the DB
export async function deleteTodo(req, res) {

    // console.log("delete todo was called");-->use for debugging
    const { id } = req.body;  

    todoTask.findByIdAndDelete(id)
        .then(() => { console.log("Deleted task successfully"); })

}
