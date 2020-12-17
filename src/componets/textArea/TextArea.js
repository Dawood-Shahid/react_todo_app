import React, { useContext, useEffect, useState } from 'react';
import {
    createStyles,
    makeStyles,
    TextField,
    IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TodoContext from '../../context/todoContext/TodoContext';

function TextArea() {
    
    const todoContext = useContext(TodoContext);
    const {
        addTodo,
        removeTaskList
    } = todoContext;

    const [todoText, setTodoText] = useState('');
    const todoTextHandler = (e) => {
        e.preventDefault();
        setTodoText(e.target.value)
    };
    
    const addTodoHandler = (e) => {
        e.preventDefault();

        if (todoText.length >= 3) {
            // console.log('addTodo trigered')
            addTodo(todoText)
        }

        setTodoText('');
    }

    const useStyles = makeStyles((theme) =>
        createStyles({
            textArea: {
                width: '300px',
                alignItems: 'center',
                justifyItems: 'center',
                padding: '5px',
                display: 'flex',
                margin: '0 auto',
                // border:'1px solid'
            },
        }),
    );

    const classes = useStyles();

    return (
        <form
            className={classes.textArea}
            noValidate autoComplete="off"
            onSubmit={addTodoHandler}
        >
            <TextField
                fullWidth={true}
                label="Write your todo"
                value={todoText}
                onChange={todoTextHandler}
            />
            <IconButton
                aria-label='add'
                color='primary'
                onClick={addTodoHandler}
                disabled={todoText.length <= 3}
            >
                <AddIcon />
            </IconButton>
            <IconButton
                aria-label='delete'
                color='secondary'
                onClick={removeTaskList}
            >
                <DeleteIcon fontSize="small" />
            </IconButton>
        </form>
    );
}

export default TextArea;
