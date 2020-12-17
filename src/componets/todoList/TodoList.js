import React, { useContext, useEffect } from 'react';
import TodoContext from '../../context/todoContext/TodoContext';
import Todo from '../todoList/todo/Todo';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import './todoList.css';

function TodoList() {

    useEffect(() => {
        console.log('Todo List');
    });

    const todoContext = useContext(TodoContext);
    const {
        todos
    } = todoContext;

    const todosArray = Object.keys(todos);

    return (
        <div className='listBody'>
            {
                todosArray.length >= 1 ?
                    todosArray.map(todo => {
                        return (
                            <Todo key={todos[todo].key} todo={todos[todo]} />
                        );
                    }) :
                    <Paper className='paper'>
                        <Typography
                            variant="h6"
                            component="p"
                        >
                            Add some todo first
                        </Typography>
                    </Paper>
            }
        </div>
    );
}

export default TodoList;
