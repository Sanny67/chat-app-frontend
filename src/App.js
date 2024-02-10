import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import useStyles from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Card } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/index.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ab90'
    },
  },
});

const App = () => {
    const classes = useStyles();
    
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Router>
                    <div className={classes.body}>
                        <Card className={classes.container}>
                            <Routes>
                                <Route path='/login' element={<Login/>} />
                                <Route path='/register' element={<Register/>} />
                                <Route path='/chat' element={<Chat/>} />
                            </Routes>
                        </Card>
                    </div>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
