import React, { useState } from 'react';
import { Button, Grid, Stepper, Step, StepLabel, StepContent, Stack } from '@mui/material';
import "./../App.css"
import StepOne from './Stepper/StepOne';
import StepTwo from './Stepper/StepTwo';
import StepThree from './Stepper/StepThree';
import StepIntro from './Stepper/StepIntro';
import MainToPdf from './MainToPdf';
import StepMetrics from './Stepper/StepMetrics';

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
    };


    const stepIntro = () => {
        return (
            <StepIntro handleNext={handleNext} updateObject={updateObject} object={object.stepIntro} />
        );
    };
    const stepOne = () => {
        return (
            <StepOne handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object.stepOne} />
        );
    };
    const stepTwo = () => {
        return (
            <StepTwo handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object} />
        );
    };
    const stepThree = () => {
        return (
            <StepThree handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object.stepThree} />
        );
    };
    const stepMetrics = () => {
        return (
            <StepMetrics handleNext={handleNext} handleBack={handleBack} updateObject={updateObject} object={object.stepMetrics} />
        );
    };

    const steps = [
        { label: 'Intro', content: stepIntro() },
        { label: 'Fundamental', content: stepOne() },
        { label: 'Token', content: stepThree() },
        { label: 'Metrics', content: stepMetrics() },
        { label: 'Sentiment', content: stepTwo() },

    ];



    return (
        <Grid width={"90%"} display='flex' flexDirection='column' alignItems="center" justifyContent={"space-evenly"} gap="3rem" >
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

                    <>
                        <MainToPdf collectedData={object} />
                        <Stack sx={{ p: '1rem' }}>
                            <Button variant='contained' onClick={() => { setActiveStep(0); setobject({}); }}>Restart</Button>

                        </Stack>
                    </>

                )
            }
        </Grid>

    );
}

export default StepperWithQuestion;
