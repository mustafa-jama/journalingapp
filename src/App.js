import "./App.css"
import { useState } from "react"

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const [editTask,setEditTask] = useState(null)
  const[isEditActive,setIsEditActive] = useState(false)


  const AddTask = (currentTask) => {
    if (currentTask.length < 1) {
      return
    }
    const newList = [...taskList]
    newList.push(currentTask)
    setTaskList(newList)
    setCurrentTask("")
  }

  const handleDelete = (indexRemove) =>{

      const newList = taskList.filter((_ , index) => index !==  indexRemove)
      setTaskList(newList)

      // const newList = [...taskList]
      // newList.filter((_ , index) => index !==  indexRemove)
      // setTaskList(newList)

  }

  
  const handleEdit = (task , index) =>{

    setEditTask({text:task,index:index})
    console.log(editTask)
    
    setIsEditActive(true)


  }

  const handleConfirm = () =>{

    const newList = [...taskList]
    newList[editTask.index] = editTask.text
    setTaskList(newList)
    setIsEditActive(false)
    console.log(editTask.text)


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
          <Task task={task} key={index} 
          index={index}
          handleDelete={handleDelete}
          handleEdit={handleEdit}/>

        ))}
      </div>

      { isEditActive && (

        <div> 

          <input

            className='editTask'
            type='text'
            onChange={(event) => setEditTask({index: editTask.index, text: event.target.value})}
            value={editTask.text}

          />

        <button 
        onClick={handleConfirm}
        > Confirm </button>

        </div>

      )}

    </div>
  )

  

  


}

const Task = ({ task , index, handleDelete, handleEdit }) => {
  return (
    <div className='taskLayout'>
      <p className='taskColor'> {task} </p>

      <div className='butttonLayout'>
        <button
        onClick={() => handleEdit(task,index)}

        className='editButton'>Edit</button>
        <button 
        onClick={() => handleDelete(index)}
        className='deleteButton'>Delete</button>
      </div>
    </div>
  )
}
