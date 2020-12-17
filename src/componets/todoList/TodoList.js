import React, { useContext, useEffect } from 'react';
import TodoContext from '../../context/todoContext/TodoContext';
import Todo from '../todoList/todo/Todo';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import './todoList.css';

function TodoList() {

    
    const todoContext = useContext(TodoContext);
    const {
        todos,
        getData,
    } = todoContext;
    
    useEffect(() => {
        // console.log('Todo App')
        // getData();
    })

    const todosArray = Object.keys(todos);

    return (
        <div className='listBody'>
            {
                todosArray.length >= 1 ?
                    todosArray.map(todo => {
                        // console.log( todos[todo])
                        return (
                            <Todo key={todo} todo={todos[todo]} />
                        )
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
