import React, { createContext, useState } from 'react';

// Create a new context
export const MyContext = createContext();

// Create a context provider component
export const MyContextProvider = ({ children }) => {
  
    const [toDoList,setToDoList]=useState([]);
    const [completeTask,setCompletedTask]=useState([]);
    const [showForm,setShowForm]=useState(false);
  

  const updatesetToDoList = async(data) => {
    setToDoList(data);
    
  };

  const updatesetCompletedTask = (index) => {
    let newtoDoList=[...toDoList];
    newtoDoList[index]={name:toDoList[index].name,
    description:toDoList[index].description,
    checked:true};
    setToDoList([...newtoDoList]);

    //here we will call one function whcih remove item after one second and then add to a
    //anotehr state which is complete this one will show that stuff here.
    setCompletedTask([...completeTask,newtoDoList[index]])
    localStorage.setItem('CompletedTask',JSON.stringify([...completeTask,newtoDoList[index]]))
    let updatedtodolist=toDoList.filter((item,indx)=>indx!==index);
    setTimeout(()=>{
      setToDoList([...updatedtodolist]);
    },1000)
  };

  const modifiedCompletedTask=(data)=>{
    setCompletedTask(data);
  }
  
  const updatesetShowForm = () => {
    setShowForm(bool);
  };

  return (
    <MyContext.Provider value={{modifiedCompletedTask,toDoList,updatesetToDoList,updatesetCompletedTask,completeTask,showForm,updatesetShowForm}}>
      {children}
    </MyContext.Provider>
  );
};