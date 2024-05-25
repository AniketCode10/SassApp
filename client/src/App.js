
import {Routes,Route} from "react-router-dom";
import { useMemo } from 'react';
import {CssBaseline,ThemeProvider, createTheme} from "@mui/material";
import { createMuiTheme } from '@mui/material';
import { themeSettings } from './theme';
import RegisterScreen from './components/screens/RegisterScreen';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import Navbar from './components/Navbar';

function App() {
  const theme = useMemo(()=>createTheme(themeSettings()),[]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='register'  element={<RegisterScreen/>}/>
     
    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
