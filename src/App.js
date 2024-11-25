import "./App.css"
import { useState } from "react"

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const AddTask = (currentTask) => {
    if (currentTask.length < 1) {
      return
    }
    const newList = [...taskList]
    newList.push(currentTask)
    setTaskList(newList)
    setCurrentTask("")
  }

  return (
    <div className='App'>
      <h1 className='todolit_header'> To Do List</h1>

      <div className='header'>
        <input
          className='task'
          type='text'
          placeholder='enter task'
          onChange={(event) => setCurrentTask(event.target.value)}
          value={currentTask}
        />

        <button
          onClick={() => AddTask(currentTask)}
          className='addButton'
        >
          +
        </button>
      </div>

      <div>
        {taskList.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
    </div>
  )
}

const Task = ({ task }) => {
  return (
    <div className='taskLayout'>
      <p  className='taskColor'> {task} </p>

      <div className='butttonLayout'>
        <button className='editButton'>Edit</button>
        <button className='deleteButton'>Delete</button>
      </div>
    </div>
  )
}
