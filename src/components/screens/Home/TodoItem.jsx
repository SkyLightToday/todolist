import React from 'react';
import Check from './Check';
import {BsTrash} from 'react-icons/bs';


const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-neutral-500 p-5 w-full'>
            <button className='flex items-center' onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
            <span className={`${todo.isCompleted ? 'line-through':''}`}>
               {todo.title}
            </span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrash size={22} className='text-neutral-400 hover:text-white transition-colors ease-in-out duration-300 font-weight:bold' />
            </button>
        </div>
    )
}

export default TodoItem;