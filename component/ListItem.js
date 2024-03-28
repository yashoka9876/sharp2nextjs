import React, { useContext } from 'react'
import classes from './ListItem.module.css'
import { MyContext } from '../Context/Context'
const ListItem = (props) => {
    console.log(props.toDoList);
    const{toDoList,updatesetCompletedTask,}=useContext(MyContext)
  return (
    <>
        <ul className='list-group w-25 mx-auto' style={{listStyle:'none'}}>
        <h4 className=' text-center '>To Do List</h4>
        {props.toDoList.length===0 && <p className='border'>No do list added,yet. Add please</p>}
        {
            props.toDoList.map((item, index) => (
            <li className='list-group-item' key={index} onClick={() => updatesetCompletedTask(index)}>
                <input type="checkbox" checked={item.checked} readOnly />
                <span>{item.name}</span>
            </li>
            ))
        }
        </ul>
    </>
  )
}

export default ListItem