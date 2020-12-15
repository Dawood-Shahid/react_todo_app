import React, {useState} from 'react'
import {  createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Checkbox,
    Typography,
    IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';


const Todo = () => {
    const useStyles = makeStyles((theme) =>
        createStyles({
            paper: {
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                margin: '5px 0',
            },
            task: {
                width: '100%',
                margin: '0 5px',
            }

        }),
    );

    const classes = useStyles();

    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setChecked(!checked)
    }

    return (
        <Paper className={classes.paper}>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                color="primary"
            />
            <div className={classes.task} >
                <Typography
                    variant="h6"
                    component="p"
                >
                    My todo task
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="p"
                >
                    Complete before: Date
                </Typography>
            </div>
            <IconButton aria-label='add' color='primary'
                // size='small'
            >
                <EditIcon />
            </IconButton>
            <IconButton aria-label='add' color='secondary'
                // size='small'
            >
                <RemoveIcon />
            </IconButton>
        </Paper>
    );
}

export default Todo