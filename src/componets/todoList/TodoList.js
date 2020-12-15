import React from 'react'
import Todo from '../todoList/todo/Todo';
import './todoList.css'

function TodoList() {
    return (
        <div className='listBody'>
            <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo /> 
            {/* <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo /> 
            <Todo />  */}
        </div>
    )
}

export default TodoList
