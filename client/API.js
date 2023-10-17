import axios from "axios";

const baseURL="http://localhost:3000/"


// Gets the tasks from the DB and displays them

export function getTasks(setTodo){    
    axios.get(baseURL)
    .then(({data})=>{               
        data.map((obj)=>{
            console.log(obj.task);            
            setTodo((prev)=>{
                return ([...prev, {task:obj.task,id:obj._id}]);
            });        
        });            
    });    
}

//Saves tasks to the database by making a post request to /save route

export function addTask(task){
    console.log(task);
    axios.post(baseURL+"save",task)
    .then(()=>{
        console.log("Post req to /save successfull");
    })
    .catch(()=>{
        console.log("could'nt post to /save");
    })    
}

//Deletes tasks from the database by making a post request to /delete route
export function deleteTask(id,setTodo){
    console.log(`Bout to dlete task with id: ${id}`);
    axios.post(baseURL+"delete",{"id":id})
    .then(()=>{
        console.log("Post req to /delete successfull");
    })
    .catch(()=>{
        console.log("could'nt post to /delete");
    })

    //Rerenders the remaining tasks after deleting
    setTodo((prev)=>{
        return prev.filter((item,index)=>{
            return item.id!==id;
        })
    })
}

