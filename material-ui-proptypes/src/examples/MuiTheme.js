import {
    ThemeProvider,
    useTheme,
    createMuiTheme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF9800",
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

// const theme = createMuiTheme({
//     overrides: {
//         MuiButton: {
//             text: {
//                 color: 'white',
//             },
//         },
//     },
// });

export default function Example() {
    const [value, setValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <TextField
                style={{ margin: "20px" }}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={value}
                onChange={handleChange}
            />
            <SomeNestedChild />
            <Fab variant="extended">Click</Fab>
        </ThemeProvider>
    );
}

function SomeNestedChild() {
    const theme = useTheme();
    return (
        <Button
            style={{
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
            }}
        >
            Text
        </Button>
    );
}

<Button
    classes={{
        root: newClasses.root,
        label: newClasses.label,
    }}
>
    ButtonLabel
</Button>