

export function Task({ id, deleteTask, taskContent }) {
    return (
        <div className="task-component">
            <p>{taskContent}</p>
            <button onClick={() => { deleteTask(id) }}>delete</button>
        </div>

    );
}