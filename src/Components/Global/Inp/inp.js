import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '350px',
            color: '#4F4F4F'
        },
    },
}));

export default function ColorTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-secondary"
                label="Outlined secondary"
                variant="outlined"
                color="#4F4F4F"
            />
        </form>
    );
}
