import React, { useContext, useEffect, useRef, useState } from 'react';

import Form from '../component/Form';
import ListItem from '../component/ListItem';
import { MyContext } from '../Context/Context';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router=useRouter();
  const{toDoList,updatesetToDoList,showForm,updatesetShowForm}=useContext(MyContext)
  
  // function toggleCheckbox(index){
  //   
    
  // }

  function submitHandler(e){
    e.preventDefault();
    let obj={
      name:name.current.value,
      description:description.current.value,
      checked:false
    }
    setToDoList((item)=>[...item,obj])
  }
  function moveToRoutePage(){
    router.push('/today')
  }
  return (
    <div>
      <ListItem toDoList={toDoList}/>
      <button onClick={()=>moveToRoutePage()} className='btn btn-primary border-1 mx-auto d-block' >Add To DO</button>
     
    </div>
  )
}

export default HomePage