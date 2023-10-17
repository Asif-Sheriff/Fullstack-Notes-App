export function Task({ id, deleteTask, taskContent, setTasks }) {
    return (
        <div className="task-component">
            <p>{taskContent}</p>
            <button onClick={() => { deleteTask(id, setTasks) }}>delete</button>
        </div>

    );
}