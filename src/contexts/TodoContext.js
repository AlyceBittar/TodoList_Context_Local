import {createContext, useContext} from "react"

export const TodoContext = createContext({
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

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
