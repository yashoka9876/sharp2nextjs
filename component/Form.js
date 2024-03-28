import React, { useContext, useRef } from 'react'
import classes from './Form.module.css'
import { MyContext } from '../Context/Context';
const Form = () => {
    const{toDoList,updatesetToDoList}=useContext(MyContext)
    const name=useRef();
    const description=useRef();
    function submitHandler(e){
        e.preventDefault();
        let obj={
          name:name.current.value,
          description:description.current.value,
          checked:false
        }
        updatesetToDoList([...toDoList,obj])
      }
  return (
    <>
    <form className={classes.form} onSubmit={submitHandler}>
        <h3>Add List</h3>
        <input className='form-control' ref={name} type='text' placeholder='to do name'/>
        <textarea placeholder='enter about your task' className='form-control' ref={description}></textarea>
        <button className='btn btn-primary '>Add</button>
      </form>
    </>
  )
}

export default Form