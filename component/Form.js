import React, { useContext, useEffect, useRef } from 'react'
import classes from './Form.module.css'
import { MyContext } from '../Context/Context';
import { useRouter } from 'next/router';
const Form = (props) => {
    const router=useRouter();
    const name=useRef();
    const description=useRef();
    ///this funcitn call on submti the button 
    function submitHandler(e){
        e.preventDefault();
        let obj={
          name:name.current.value,
          description:description.current.value,
          checked:false
        }
        async function sendata(){
            const response=await fetch('/api/new-meetup',{
                method:'POST',
                body:JSON.stringify(obj),
                headers:{
                  'Content-Type':'application/json'
                }
              });
        
              const data=await response.json();
              console.log(data);
        }
        sendata();
        name.current.value='';
        description.current.value='';

        router.push('/today')
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