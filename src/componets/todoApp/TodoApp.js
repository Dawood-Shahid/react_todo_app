import React from 'react'
import {
    Typography
} from '@material-ui/core'
import TextArea from '../textArea/TextArea';
import './todoApp.css'
import TodoList from '../todoList/TodoList';

function TodoApp() {
   
    return (
        <div className='body' >
            <Typography 
                variant="h4"
                component="h1"
                style={{
                    margin: '20px 0 10px',
                    textAlign: 'center'
                }}
            >
                TODO APP
            </Typography>
            <TextArea />
            <TodoList />
        </div>
    )
}

export default TodoApp
