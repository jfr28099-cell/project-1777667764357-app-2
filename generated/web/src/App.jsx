import React, { useEffect, useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/api/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.task} {todo.completed ? '(Completed)' : ''}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;