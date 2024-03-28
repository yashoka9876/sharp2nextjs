import React, { useContext } from 'react'
import ListItem from '../../component/ListItem'
import Form from '../../component/Form'
import { MyContext } from '../../Context/Context'

const index = () => {
    const{toDoList,updatesetCompletedTask}=useContext(MyContext)
  return (
    <div>
      <ListItem toDoList={toDoList}/>
      <Form/>
     
    </div>
  )
}

export default index