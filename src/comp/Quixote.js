import React, { useState } from 'react';
import { Button, Card, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import "./../App.css"
import StepOne from './Stepper/StepOne';
import StepTwo from './Stepper/StepTwo';
import StepThree from './Stepper/StepThree';
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";

function StepperWithQuestion() {
    const [activeStep, setActiveStep] = useState(0);
    const [object, setobject] = useState({});

    const updateObject = (object, value) => {
        setobject(prevState => ({
            ...prevState,
            [object]: value
        }));
    };

    const handleNext = (value) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(object);
    };

    const handleBack = (value) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const stepOne = () => {
        return (
            <StepOne handleNext={handleNext} updateObject={updateObject} object={object.stepOne} />
        );
    };
    const stepTwo = () => {
        return (
            <StepTwo handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object.stepTwo} />
        );
    };
    const stepThree = () => {
        return (
            <StepThree handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object.stepThree} />
        );
    };

    const steps = [
        { label: 'Fundamental', content: stepOne() },
        { label: 'Sentiment', content: stepTwo() },
        { label: 'Token', content: stepThree() },
    ];

    var props = {
        outputType: OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 53.33, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Business Name",
            address: "Albania, Tirane ish-Dogana, Durres 2001",
            phone: "(+355) 069 11 11 111",
            email: "email@example.com",
            email_1: "info@example.al",
            website: "www.example.al",
        },
        contact: {
            label: "Invoice issued for:",
            name: "Client Name",
            address: "Albania, Tirane, Astir",
            phone: "(+355) 069 22 22 222",
            email: "client@website.al",
            otherInfo: "www.website.al",
        },
        invoice: {
            label: "Invoice #: ",
            num: 19,
            invDate: "Payment Date: 01/01/2021 18:12",
            invGenDate: "Invoice Date: 02/02/2021 10:17",
            headerBorder: false,
            tableBodyBorder: false,
            invDescLabel: "Invoice Note",
            invDesc: object.stepOne,
            additionalRows: [{
                col1: 'Total:',
                col2: '145,250.50',
                col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            {
                col1: 'VAT:',
                col2: '20',
                col3: '%',
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'SubTotal:',
                col2: '116,199.90',
                col3: 'ALL',
                style: {
                    fontSize: 10 //optional, default 12
                }
            }],
        },

        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    function generateSimplePDF() {
        const pdfObject = jsPDFInvoiceTemplate(props);
    }


    return (
        <Grid width={"90%"} display='flex' flexDirection='column' alignItems="center" justifyContent={"space-evenly"}  >
            <Stepper sx={{ background: "#fff", padding: "1rem", width: "100%", borderRadius: "1rem", flexDirection: "column" }} activeStep={activeStep} orientation="vertical" className="stepPi">
                {steps.map((step, index) => (
                    <Step key={step.label} >
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent className="stepPi">
                            {step.content}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>

            {
                activeStep === steps.length && (

                    <Card sx={{ p: '1rem' }}>
                        <Button onClick={generateSimplePDF}> Generate PDF</Button>
                        <Button onClick={() => { setActiveStep(0); setobject({}) }}>Restart</Button>

                    </Card>
                )
            }
        </Grid>

    );
}

export default StepperWithQuestion;
