const useStyles = makeStyles((theme) => createStyles({
    root: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Example() {
    const classes = useStyles();
    return (
        <header className={classes.root}>Header</header>
    );
}

