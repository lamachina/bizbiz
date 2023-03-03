import React, { useState } from 'react';
import { Button, Card, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import "./../App.css"
import StepOne from './Stepper/StepOne';
import StepTwo from './Stepper/StepTwo';
import StepThree from './Stepper/StepThree';

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
        updateObject()
        console.log(object);
    };

    const handleBack = (value) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        updateObject()
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

    return (
        <Grid display='flex' flexDirection='column' width={"90%"} height={"80%"} alignItems="center" justifyContent={"space-evenly"}  >
            <Stepper sx={{ background: "#fff", padding: "1rem", width: "100%", borderRadius: "1rem", flexDirection: "column-reverse" }} activeStep={activeStep} orientation="vertical" className="stepPi">
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
                        <Button onClick={() => { setActiveStep(0); setobject({}) }}>Restart</Button>

                    </Card>
                )
            }
        </Grid>

    );
}

export default StepperWithQuestion;
