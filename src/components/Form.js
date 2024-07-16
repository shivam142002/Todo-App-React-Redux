import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo ,handleEditSubmit} from '../redux/todoapp/actions';

// Form component for adding new todos

export const Form = ({editFormVisibility,editTodo, cancelUpdate}) => {
 // Initialize the dispatch function
  const dispatch = useDispatch();

  // State to hold the value of the new todo input
  const [todoValue, setTodoValue]=useState('');

  // State to hold the value of the edit todo input
const [editValue,setEditValue]=useState('');

  // Update the edit value when the editTodo changes
 useEffect(()=> {
   setEditValue(editTodo.todo)
 },[editTodo])


 
 // Handle form submission for adding a new todo
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();

  // Create a new todo object  
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
   // Clear the input field after submission   
      setTodoValue('');
   // Dispatch the action to add the new todo   
      dispatch(addTodo(todoObj))
  }


    // Handle form submission for editing an existing todo
  const editSubmit =(e)=> {
    e.preventDefault();
    let editedObj={
      id:editTodo.id,
      todo:editValue,
      completed:false
    }


  // Dispatch the action to edit the todo
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
    {editFormVisibility===false?(

    <form className='form-group custom-form' onSubmit={handleSubmit}>
      <label>Add your todo-items</label>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required
          value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(e) }} />
        <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
      </div>
    </form> 
  ):(
    <form className='form-group custom-form'onSubmit={editSubmit}>
    <label>Update your todo-items</label>
    <div className='input-and-btn'>
      <input type="text" className='form-control' required value={editValue} onChange={(e)=>setEditValue(e.target.value)} />
      <button type="submit" className='btn btn-secondary btn-md'>UPDATE</button>
    </div>
    <button type="button" className="btn btn-primary btn-md back-btn"
    onClick={cancelUpdate}>BACK</button>
  </form> 

  )}
  </>
  )
}