import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal,toggle,updateTask,taskobj}) => {
    const[taskName,setTaskName] = useState('');
    const[description,setDescription] = useState('');

    const handleChange = (e)=>{

       const{name,value} =e.target
       if(name==="taskName"){
        setTaskName(value)
       }else{
        setDescription(value)
       }
    }


    useEffect(()=>{
        setTaskName(taskobj.Name)
        setDescription(taskobj.Description)
    },[])

    const handleupdate = () =>{
        const tempObj ={}
        tempObj['Name']=taskName
        tempObj['Description'] = description
        updateTask(tempObj)
         
    }


  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form action="">
                <div className='form-group'>
                    <label>Task Name</label>
                    <input type="text" className='form-control' value={taskName} onChange={handleChange} name='taskName' />
                </div>
                <div className='form-group mt-2'>
                    <label>Description</label>
                    <textarea rows="5" className='form-control' value={description} onChange={handleChange} name='description' ></textarea>
                </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleupdate}>
          Update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
    </Modal>
  )
}

export default EditTask