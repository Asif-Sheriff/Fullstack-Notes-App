import { useState } from 'react'
import { InputBox } from './InputBox';
import { Task } from './Task'


function App() {
  let [tasks, setTasks] = useState([]);
  // let[taskContent,setTaskContent]=useState("");
  let [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
    
  }

  function addTask(event) {
    setTasks((prev) => {
      return ([...prev, task]);
    });

    setTask("");
    event.preventDefault();

  }

  function deleteTask(id){
    setTasks((prev)=>{
      return prev.filter((item,index)=>{
        return index!==id;
      })
    })
  }


  return (
    <>
      <InputBox handleChange={handleChange} add={addTask} task={task} />
      {/* <Task taskTitle="ABC" taskContent="xyz" /> */}
      {tasks.map((item,index) => {
        return (
          <Task key={index} id={index} taskContent={item} deleteTask={deleteTask} />
        )
      })}
    </>
  )
}

export default App
