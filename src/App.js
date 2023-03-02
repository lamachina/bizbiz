import { Button, Grid, ThemeProvider } from '@mui/material';
import './App.css';
import Form from './comp/Form';
import { useState } from 'react';
import { createTheme } from '@mui/material';
import ReactPDF, { PDFViewer, renderToString } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
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




        <Button variant='contained' color='secondary' onClick={handleClick}>
          {ModusB ? "pass in dark mode" : "pass in light mode"}
        </Button>

        {/*    <button onClick={generateSimplePDF}>print</button> */}
        {/* <Form /> */}
        <StepperWithQuestion />


      </ThemeProvider>
    </div>
  );
}

export default App;
