import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import Form from './comp/Form';
import { useState } from 'react';
import { createTheme } from '@mui/material';

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
        <Button variant='contained' color='secondary' onClick={handleClick}>
          {ModusB ? "pass in dark mode" : "pass in light mode"}
        </Button>
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;
