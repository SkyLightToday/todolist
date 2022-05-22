import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodoField from "../CreateTodoField";

const data = [
    {
        _id: 'wefw23',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: 'wefw23232',
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id: 'wefw2qwefcev3',
        title: 'Send the finished assignment',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }
    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))
    // const addTodo = (title) => {
    //     setTodos([{
    //         _id: new Date(),
    //         title, // title: title
    //         isCompleted: false,
    //     },
    //     ...todos,
    // ])
    // }
    // window.addTodo = addTodo тестирование функции
    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo For Junior</h1>
            {todos.map(todo => (<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
};

export default Home;