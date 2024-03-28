import React, { useContext, useEffect } from 'react'
import ListItem from '../../component/ListItem'
import Form from '../../component/Form'
import { MyContext } from '../../Context/Context'
import { MongoClient } from 'mongodb'

const index = (props) => {
    const{toDoList,updatesetCompletedTask,updatesetToDoList}=useContext(MyContext);

  return (
    <div>
      <ListItem toDoList={props.meetups}/>
      <Form/>
     
    </div>
  )
}
export async function getServerSideProps(){
    //fetch data from an API
    
    // 'mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/meeetups?retryWrites=true&w=majority&appName=Cluster0'
    
    const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   
        const db=client.db('Todo_List');
  
        const meetupsCollection=db.collection('ToDo_list_Items');
  
        const meetups=await meetupsCollection.find().toArray();
  
        client.close();
  
        //htis
        
      return {
          props:{
              meetups:meetups.map((item)=>({
                name:item.name,
                description:item.description,
                checked:item.checked,
                id:item._id.toString()
              }))
          },
          
      };
  }
export default index
