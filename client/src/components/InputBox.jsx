
export function InputBox({add, handleChange, task}){   
    return(
        <form onSubmit={()=>{add({task})}} className="inputBox">
            <input onChange={handleChange} value={task} type="text" placeholder="Enter task" />
            <button className="add-button" type="submit">add</button>
        </form>

    );
}