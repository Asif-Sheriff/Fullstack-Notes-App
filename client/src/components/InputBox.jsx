
export function InputBox({add, handleChange, task}){   
    return(

        <div className=" font-mono bg-slate-400 flex justify-between p-3 ">
        <div className=" hidden text-white sm:block  sm:text-3xl">NOTES</div>
        <div className="flex w-full justify-center">

        <form onSubmit={()=>{add({task})}} className="space-x-4">
            <input onChange={handleChange} value={task} type="text" placeholder="Enter task" className=" w-72 rounded-md p-2"/>
            <button className=" bg-slate-500 rounded-md p-2 text-sm "  type="submit">add</button>
        </form>
        <div className=" text-transparent hidden text-white sm:block  sm:text-3xl">NOTES</div>
        
        </div>
        

        </div>

    );
}