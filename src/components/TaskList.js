import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = () => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, name: "Megha", completed: false },
        { id: 2, name: "Neeram", completed: false },
        { id: 3, name: "Shreyas", completed: true }
    ])


    function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));
    }
    return (
        <section className='tasklist'>
            <h1>Task List </h1>
            <button className='trigger' onClick={() => setShow(!show)} >{show? "hide" : "show"}</button>
            <ul>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul>
            <BoxCard result="success">
                <p className="title">This is success</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, animi!</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className="title">This is warning</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, animi!</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className="title">This is Alert !!!</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem at quae veniam ipsam nisi.</p>
            </BoxCard>
        </section>
    )
}
