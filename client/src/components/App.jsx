import { useState, useEffect } from 'react'
import { getTasks, addTask, deleteTask } from '../../API';
import { InputBox } from './InputBox';
import { Task } from './Task'


function App() {
  let [tasks, setTasks] = useState([]);

  // let[taskContent,setTaskContent]=useState("");
  let [task, setTask] = useState("");

  useEffect(() => {
    getTasks(setTasks); // Call getTasks when the component is first mounted
  }, []); // The empty dependency array ensures this effect runs only once

  function handleChange(event) {
    setTask(event.target.value);

  }

  return (
    <>
      <InputBox handleChange={handleChange} add={addTask} task={task} />      
      {tasks.map((item, index) => {
        return (
          <Task key={index} id={item.id} taskContent={item.task} deleteTask={deleteTask} setTasks={setTasks} />
        )
      })}
    </>
  )
}

export default App
