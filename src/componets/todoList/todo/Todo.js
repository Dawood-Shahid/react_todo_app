import React, { useContext, useEffect, useState } from 'react';
import {
    Paper,
    Checkbox,
    Typography,
    IconButton,
    TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import './todo.css';
import TodoContext from '../../../context/todoContext/TodoContext';


const Todo = ({ todo }) => {

    const todoContext = useContext(TodoContext);
    const {
        taskAction
    } = todoContext;

    const [checked, setChecked] = useState(todo.isComplete);
    const checkedHandler = (e) => {
        setChecked(!checked);
        setEdit(false);

        const task = {
            key: todo.key,
            isComplete: !todo.isComplete,
            text: todoText
        };

        taskAction(task);
    };

    const [todoText, setTodoText] = useState(todo.text);
    const editTextHandle = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setTodoText(e.target.value);
    };

    const [edit, setEdit] = useState(false);
    const editFlagHandle = () => {
        setEdit(!edit);

        if (edit === true) {
            const task = {
                key: todo.key,
                isComplete: todo.isComplete,
                text: todoText
            };
    
            taskAction(task);
        }
        // console.log();
    };

    const classesArray = [];
    if (checked) {
        classesArray.push('taskDone');
    }

    return (
        <Paper className='paper'>
            <Checkbox
                checked={checked}
                onChange={checkedHandler}
                color="primary"
            />
            <div className='task' >
                {
                    edit ?
                        <TextField
                            value={todoText}
                            onChange={editTextHandle}
                        /> :
                        <Typography
                            variant="p"
                            component="p"
                            className='taskDone'
                            className={classesArray.join(' ')}
                        >
                            {todoText}
                        </Typography>
                }
            </div>
            <IconButton
                aria-label='edit'
                color='primary'
                size='small'
                onClick={editFlagHandle}
                disabled={checked}
            >
                <EditIcon />
            </IconButton>
            <IconButton
                aria-label='remove'
                color='secondary'
                size='small'
            >
                <RemoveIcon />
            </IconButton>
        </Paper>
    );
};

export default Todo;