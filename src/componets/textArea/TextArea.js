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
    
    // useEffect(() => {
    //     console.log('Text Area')    
    // })

    const todoContext = useContext(TodoContext);
    const {
        addTodo
    } = todoContext;

    const [todoText, setTodoText] = useState('');
    const todoTextHandler = (e) => {
        e.preventDefault();
        setTodoText(e.target.value)
    };
    
    const addTodoHandler = (e) => {
        e.preventDefault();
        addTodo(todoText);
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
            >
                <AddIcon />
            </IconButton>
            <IconButton aria-label='delete' color='secondary'>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </form>
    );
}

export default TextArea;
