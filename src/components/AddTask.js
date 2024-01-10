import React, { useState } from 'react'
import "./addTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [taskProgress, setTaskProgress] = useState(false);
  const handleChange = (e) => {
    setTaskValue(e.target.value);
  }
  const handleReset = () => {
    setTaskValue("");
    setTaskProgress(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(taskProgress)
    }
    setTasks([...tasks, task]);
    handleReset();
  }
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" value={taskValue} />
        <select value={taskProgress} onChange={(e) => setTaskProgress(e.target.value)}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">Reset</span>
      </form>
      <p>{taskValue}</p>
    </section>
  )
}
