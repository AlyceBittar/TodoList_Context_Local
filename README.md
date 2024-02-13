# Todo App README

## Overview
This Todo App allows users to manage their todos efficiently by utilizing **Context API** to provide features like adding, updating, deleting, and marking todos as completed.

## Table of Contents
1. [Features](#features)
2. [Usage](#usage)
3. [Context Functionality](#context-functionality)
4. [Implementation of Context API](#implementation-of-context-api)
5. [Project Setup](#project-installation-and-setup)
6. [License](#license)

## Features
- Add new todos.
- Update existing todos.
- Delete unwanted todos.
- Mark todos as completed.
- Responsive design for various screen sizes.

## Context Functionality
The context (`TodoContext`) in this application provides centralized state management and functions for managing todos. Here's a brief overview of its functionality:
- **todos**: An array of todos containing objects with `id`, `todo`, and `completed` properties.
- **addTodo**: A function to add a new todo to the list.
- **updateTodo**: A function to update an existing todo based on its ID.
- **deleteTodo**: A function to delete a todo from the list based on its ID.
- **toggleComplete**: A function to toggle the completion status of a todo.

## Implementation of Context API
The Todo App uses the Context API to manage state and provide todo-related functions to its components. Here's how the context is implemented:
- **Creation**: The `createContext` function from React is used to create the `TodoContext`.
- **Provider**: The `TodoProvider` component is exported to provide the `TodoContext` to the component tree.
- **useTodo Hook**: The `useTodo` custom hook is created to access the `TodoContext` and its provided values within components.
- **Value**: The `TodoProvider` component wraps around the top-level component (`App`) to provide the context and its values (`todos`, `addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`) to all nested components.

## Usage
Once the Todo App is running, you can use the following functionalities:
- **Add Todo**: Enter a new todo message in the input field and press the "Add" button.
- **Update Todo**: Click on the edit icon (✏️) next to a todo to edit its message. Press the save icon (📁) or Enter to save the changes.
- **Delete Todo**: Click on the delete icon (❌) next to a todo to delete it.
- **Complete Todo**: Click on the checkbox next to a todo to mark it as completed. The completed todos will have a strikethrough effect on their text.

## Project Installation and Setup
To run the Todo App locally, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```
4. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
