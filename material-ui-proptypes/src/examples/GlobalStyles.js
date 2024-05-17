import { createStyles, makeStyles } from '@material-ui/core';

const useGlobalStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%'
            },
            '#root': {
                height: '100%',
                width: '100%'
            }
        }
    })
);

const GlobalStyles = () => { useGlobalStyles(); return null; };

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <GlobalStyles />
            <AnyComponents />
        </MuiThemeProvider>
    );
};