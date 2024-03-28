import React, { useContext, useEffect } from 'react'
import ListItem from '../../component/ListItem'
import { MyContext } from '../../Context/Context'

const completed = () => {
    const{completeTask,modifiedCompletedTask}=useContext(MyContext);
    useEffect(()=>modifiedCompletedTask(JSON.parse(localStorage.getItem('CompletedTask'))),[])
    if(completeTask===null){
        return <h1>fuck you</h1>
    }
  return (
    <div>
        <ListItem toDoList={completeTask}/>
    </div>
  )
}

export default completed