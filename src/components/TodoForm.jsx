import React from 'react'
import { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"

function TodoForm() {
    const [todo, setTodo] = useState(""); // State for todo and setter function
    const { addTodo } = useTodo(); // Destructuring addTodo function from useTodo hook


    const add = (e) => { // Function to handle adding todo
        e.preventDefault(); // Prevent default form submission behavior
        if (!todo) return; // Check if todo is empty, if so, do nothing
        addTodo({ todo, completed: false }); // Add todo with completed status as false
        setTodo(""); // Clear todo input after adding
    };
    
    return (
        <form onSubmit={add} className='flex'>
            <input type="text" 
            placeholder='Write Todo...'
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            value={todo}
            onChange={(e) => setTodo(e.target.value)} // Update todo state on input change
            />

            {/* Button to submit todo */}
            <button type="submit"
            className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
            >Add</button>
        </form>
      )
}
        
export default TodoForm