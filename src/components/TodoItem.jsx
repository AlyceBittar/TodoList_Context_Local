import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false); // State for todo editing mode
    const [todoMsg, setTodoMsg] = useState(todo.todo); 

    const { updateTodo, deleteTodo, toggleComplete } = useTodo(); // Destructuring functions from useTodo hook

    const editTodo = () => { // Function to handle editing todo
        updateTodo(todo.id, { ...todo, todo: todoMsg }); 
        setIsTodoEditable(false); // Exit editing mode
    };

    const toggleCompleted = () => { // Function to toggle todo completion status
        toggleComplete(todo.id); 
    };

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 
    shadow-sm shadow-white/50 duration-300  text-black 
    ${todo.completed ? "bg-[#ccbed7]" : "bg-[#c6e9a7]"}`} // Dynamic background color based on completion status
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted} // Toggle completion status on checkbox change
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)} // Update todo message on input change
        readOnly={!isTodoEditable} // Set input to read-only if not in edit mode
        />
        <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={() => {
                if (todo.completed) return; // If todo is completed, do nothing
                if (isTodoEditable) { // If in edit mode, edit todo
                    editTodo(); 
                } else setIsTodoEditable((prev) => !prev); // Toggle edit mode
            }}
            disabled={todo.completed} // Disable button if todo is completed
        >
            {/* Render different icon based on edit mode */}
            {isTodoEditable ? "📁": "✏️"}</button> 
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default TodoItem