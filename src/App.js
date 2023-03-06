import { AppBar, Button, Grid, ThemeProvider } from '@mui/material';
import './App.css';
import Form from './comp/Form';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import StepperWithQuestion from "./comp/Quixote"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SDFHome from './comp/SDFHome';
import Tools from './comp/Tools';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0c343d  '
    },
    secondary: {
      main: '#45818e'
    },
  }
});



function App() {


  const [ModusB, setModusB] = useState(true)

  const handleClick = () => {
    ModusB ?
      setModusB(false) :
      setModusB(true)
  }


  return (
    <div className={ModusB ? "App" : "App dark"}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar position='sticky' color='primary' sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", p: "1rem" }}>
            <Link style={{ color: '#f5f7f9' }} to="/" >Home</Link>
            <Link style={{ color: '#45818e' }} to="/about" >Tools</Link>
            <Link style={{ color: '#f5f7f9', textDecoration: 'underline' }} to="/stepper">Get a Report</Link>
            <Button variant='contained' color='secondary' onClick={handleClick}>
              {ModusB ? "light" : "dark"}
            </Button>

          </AppBar>

          <Grid display={"flex"} justifyContent={"center"} width="100%" >
            <Routes>
              <Route exact path="/" element={
                <SDFHome />} />
              <Route path="/about" element={
                <Tools />
              } />
              <Route path="/stepper" element={
                <StepperWithQuestion />
              } />
            </Routes>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
