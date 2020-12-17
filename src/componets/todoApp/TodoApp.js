import React, { useEffect } from 'react';
import {
    Typography
} from '@material-ui/core';
import TextArea from '../textArea/TextArea';
import './todoApp.css';
import TodoList from '../todoList/TodoList';
import TodoState from '../../context/todoContext/TodoState';

function TodoApp() {
    useEffect(() => {
        console.log('Todo App')   
    })

    return (
        <TodoState>
            <div className='body' >
                <Typography
                    variant="h4"
                    component="h1"
                    style={{
                        margin: '10px 0 10px',
                        textAlign: 'center'
                    }}
                >
                    TODO APP
            </Typography>
                <TextArea />
                <TodoList />
            </div>
        </TodoState>
    );
}

export default TodoApp;
