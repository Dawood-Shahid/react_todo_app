import React from 'react';
import {
    createStyles,
    makeStyles,
    TextField,
    IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function TextArea() {
    const useStyles = makeStyles((theme) =>
        createStyles({
            textArea: {
                width: '300px',
                alignItems: 'center',
                justifyItems:'center',
                padding: '5px',
                display: 'flex',
                margin: '0 auto',
                // border:'1px solid'
            },
        }),
    );

    const classes = useStyles();

    return (
            <form className={classes.textArea} noValidate autoComplete="off">
                <TextField fullWidth={true} label="Write your todo" />
                <IconButton aria-label='add' color='primary'>
                    <AddIcon />
                </IconButton>
                <IconButton aria-label='delete' color='secondary'>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </form>
    );
}

export default TextArea;
