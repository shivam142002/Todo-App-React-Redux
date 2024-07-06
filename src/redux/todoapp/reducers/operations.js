/* eslint-disable array-callback-return */
import { ADD_TODO, DELETE_ALL ,REMOVE_TODO,UPDATE_TODO,UPDATE_CHECKBOX} from "../actions";

// Initial state of the todos
const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];


// Reducer function to handle todo operations
export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
         // Add a new todo
        case ADD_TODO:
            return [...state, action.payload];

            // Delete all todos
        case DELETE_ALL:
            return [];

      // Remove a specific todo
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;

          // Update a specific todo   
            case UPDATE_TODO:
                let data = action.payload;
                const updatedArray=[];
                state.map((item)=>{
                    if(item.id===data.id) {
                        item.id = data.id
                        item.todo = data.todo
                        item.completed = data.completed;
                    }
                    updatedArray.push(item)
                })
                return updatedArray;

         // Toggle the completed state of a specific todo       
          case UPDATE_CHECKBOX: 
          let todoArray=[];
          state.map((item)=>{
            if(item.id===action.payload) {
                item.completed = !item.completed;
            }
            todoArray.push(item)
          })
          return todoArray;

    // Return the current state by default  
        default: return state;
    }
}