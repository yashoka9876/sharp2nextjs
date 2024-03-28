import React, { useContext } from 'react'
import classes from './ListItem.module.css'
import { MyContext } from '../Context/Context'
const ListItem = (props) => {
    console.log(props.toDoList);
    const updateHandler=(id)=>{
        console.log(typeof id);
        

        //here we are calling thsi stuff here brother let's see what happen further.
        async function fetchData() {
            try {
              const response = await fetch('/api/update-todo', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
              });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data); // Handle the response data
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
          fetchData();

    }
    const deleteToDo=(id)=>{
      console.log(typeof id);
        

      //here we are calling thsi stuff here brother let's see what happen further.
      async function fetchData() {
          try {
            const response = await fetch('/api/delete-todo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: id }),
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data); // Handle the response data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
    }
  return (
    <>
        <ul className='list-group w-25 mx-auto' style={{listStyle:'none'}}>
        <h4 className=' text-center '>To Do List</h4>
        {props.toDoList.length===0 && <p className='border'>No do list added,yet. Add please</p>}
        {
            props.toDoList.map((item, index) => (
            <li className='list-group-item' key={item.id} onClick={() => updateHandler(item.id)}>
                <input type="checkbox" checked={item.checked} readOnly />
                <span>{item.name}</span>
                <button onClick={()=>deleteToDo(item.id)} className='btn btn-danger'>del</button>
            </li>
            ))
        }
        </ul>
    </>
  )
}

export default ListItem