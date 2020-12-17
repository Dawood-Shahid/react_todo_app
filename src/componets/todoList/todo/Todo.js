import React, {useEffect, useState} from 'react'
import {
    Paper,
    Checkbox,
    Typography,
    IconButton,
    TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import './todo.css'


const Todo = ({ todo }) => {
    
    // console.log(todo)

    // useEffect(() => {
    //     console.log('todo component')
    // })

    const [checked, setChecked] = useState(todo.isComplete)
    const handleChecked = (e) => {
        setChecked(!checked)
        setEdit(false)
    }

    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }

    const classesArray = [];
    if (checked) {
        classesArray.push('taskDone');
    }

    return (
        <Paper className='paper'>
            <Checkbox
                checked={checked}
                onChange={handleChecked}
                color="primary"
            />
            <div className='task' >
                {
                    edit ?
                        <TextField
                            value={todo.text}
                        /> :
                        <Typography
                            variant="p"
                            component="p"
                            className='taskDone'
                            className={classesArray.join(' ')}
                        >
                            {todo.text}
                        </Typography>
                }
            </div>
            <IconButton
                aria-label='edit'
                color='primary'
                size='small'
                onClick={handleEdit}
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
}

export default Todo