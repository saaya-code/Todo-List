import React from 'react'

export default function todoComp({todo, toggleTodo}) {
    const handleTodoClick = () =>{
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
             <input type="checkbox" checked = {todo.complete} onChange={handleTodoClick} />
             {todo.name}
            </label>
        </div>
    )
}
