import React from 'react'
import {
    makeStyles,
    TextField,
    IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function TextArea() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                // border:'1px solid red'
            },
            width: '100%',
            paddingRight: '10px',
            // border: '1px solid',
            // minWidth: '400px'
        },
        textArea: {
            // backgroundColor: 'whiteSmoke',
            // border: '1px solid',
            display: 'flex',
            alignItems: 'center',
            padding: '0 5px'
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.textArea}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField fullWidth='true' label="Write your todo" />
            </form>
            <IconButton aria-label='add' color='primary'>
                <AddIcon />
            </IconButton>
            <IconButton aria-label='delete' color='secondary'>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    )
}

export default TextArea
