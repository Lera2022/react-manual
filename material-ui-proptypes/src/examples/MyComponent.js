import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
        color: props => props.color,
    },
});

export default function MyComponent(props) {
    const classes = useStyles(props);
    return <div className={classes.root} />;
}