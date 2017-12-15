import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonComponent from './ButtonComponent';

const App = () => (
    <MuiThemeProvider>
        <ButtonComponent/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);