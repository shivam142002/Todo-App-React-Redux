// Action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

// Action creator for adding a new todo
export const addTodo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

// Action creator for deleting all todos
export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}

// Action creator for removing a specific todo
export const removeTodo=(payload)=> {
    return {
        type: REMOVE_TODO,
        payload
    }
}

// Action creator for updating a specific todo
export const handleEditSubmit=(payload)=> {
    return {
        type: UPDATE_TODO,
        payload
    }
}

// Action creator for updating the checkbox state of a specific todo
export const handleCheckbox=(payload)=> {
    return {
        type: UPDATE_CHECKBOX,
        payload
    }
}