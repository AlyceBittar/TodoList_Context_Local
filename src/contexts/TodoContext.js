import {createContext, useContext} from "react"

// Create a context for managing todos
export const TodoContext = createContext({
    // Default value with an example todo
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    // Define blueprints for functional actions - write functionality in file using context
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// Custom hook to use the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider
