import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import './TodoList.css';
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';

interface Todo {
    id: number,
    title: string

}
const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [value, setValue] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!value) {
            return;
        };
        const newTodo = {
            id: Date.now(),
            title: value,

        }
        setTodos([...todos, newTodo]);
        setValue('');
    }


    return (
        <div className="todo-box">
            <h1 className="todo-box__title">Tasks</h1>
            <ul className="todo-box__tasks">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Checkbox sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }} />
                        {todo.title}
                    </li>
                ))}
            </ul>
            <form
                onSubmit={handleSubmit}
                className="todo-box__form">
                <textarea className="todo-box__text" value={value} placeholder="Add your task.." onChange={(e => setValue(e.target.value))} />
                <Button type="submit" variant="contained" color="success" size="small">Add</Button>
            </form>
        </div>
    )
}
export default TodoList;
