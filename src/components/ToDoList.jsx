import React,{useEffect, useState} from 'react'
import CreateTask from '../modals/CreateTask'
import { List } from 'reactstrap';
import Card from './Card';


const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const[taskList,setTaskList] = useState([])





    useEffect(()=>{
        const arr = localStorage.getItem("taskList")
        if(arr){
            const opj=JSON.parse(arr)
            setTaskList(opj)
        }
    })



    const deleteTask =(index)=>{
        const tempList=taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList" , JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const updateListArray = (obj,index)=>{
        const tempList = taskList
        tempList[index]= obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => setModal(!modal);
    const saveTask=(taskobj)=>{
        const tempList = taskList
        tempList.push(taskobj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
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
            {taskList.map((obj , index)=><Card taskobj = {obj} index = {index} deleteTask ={deleteTask} updateListArray = {updateListArray}/>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save ={saveTask} />
    </>
  )
}

export default ToDoList