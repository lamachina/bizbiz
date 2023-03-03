import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import Form from './comp/Form';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import jsPDF from 'jspdf';
import StepperWithQuestion from "./comp/Quixote"
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
  function generateSimplePDF() {
    const doc = new jsPDF();
    doc.text("Hello World !!!", 10, 10);

    doc.setFont("courier")

    doc.setFontSize(50)

    doc.text("There is more text", 10, 50);

    doc.save("Document.pdf");
  }
  return (
    <div className={ModusB ? "App" : "App dark"}>
      <ThemeProvider theme={theme}>




        <Button sx={{ position: "relative", left: "33%" }} variant='contained' color='secondary' onClick={handleClick}>
          {ModusB ? "dark" : "light"}
        </Button>

        {/*    <button onClick={generateSimplePDF}>print</button> */}
        {/* <Form /> */}
        <StepperWithQuestion />


      </ThemeProvider>
    </div>
  );
}

export default App;
