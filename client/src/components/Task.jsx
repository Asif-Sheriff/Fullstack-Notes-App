export function Task({ id, deleteTask, taskContent, setTasks }) {
    return (
       
        <div className=" font-mono flex justify-between w-80 ite sm:flex-col sm:justify-between sm:w-40 h-40 bg-slate-600">
            <div className="m-2">

            <p className=" text-2xl sm:text-sm text-white">{taskContent}</p>
            </div>
            <button className="bg-black text-white" onClick={() => { deleteTask(id, setTasks) }}>delete</button>
        </div>

    );
}