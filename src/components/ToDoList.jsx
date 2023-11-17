import React,{useState} from 'react'
import CreateTask from '../modals/CreateTask'
import { List } from 'reactstrap';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const[taskList,setTaskList] = useState([])
    const toggle = () => setModal(!modal);
    const saveTask=(taskobj)=>{
        const tempList = taskList
        tempList.push(taskobj)
        setTaskList(tempList)
        setModal(false)
    }

  return (
    <>
        <div className='header text-center'>
            <h3>Todo List</h3>
            <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
            {taskList.map((obj)=><li>{obj.Name}</li>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save ={saveTask} />
    </>
  )
}

export default ToDoList