import React, { useState } from 'react';
import { Button, Card, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import "./../App.css"
import StepOne from './Stepper/StepOne';
import StepTwo from './Stepper/StepTwo';
import StepThree from './Stepper/StepThree';

function StepperWithQuestion() {
    const [activeStep, setActiveStep] = useState(0);
    const [values, setValues] = useState({});

    const handleNext = (value) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setValues((prevValues) => ({ ...prevValues, [activeStep]: value }));
    };

    const handleBack = (value) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setValues((prevValues) => ({ ...prevValues, [activeStep]: value }));
    };


    const stepOne = () => {
        return (
            <StepOne handleNext={handleNext} value={values[0]} setValue={(value) => setValues({ ...values, [activeStep]: value })} />
        );
    };
    const stepTwo = () => {
        return (
            <StepTwo handleNext={handleNext} handleBack={handleBack} value={values[1]} setValue={(value) => setValues({ ...values, [activeStep]: value })} />
        );
    };
    const stepThree = () => {
        return (
            <StepThree handleNext={handleNext} handleBack={handleBack} value={values[2]} setValue={(value) => setValues({ ...values, [activeStep]: value })} />
        );
    };

    const steps = [
        { label: 'Fundamental', content: stepOne() },
        { label: 'Sentiment', content: stepTwo() },
        { label: 'Token', content: stepThree() },
    ];

    return (
        <Grid display='flex' flexDirection='column' width={"90%"} height={"80%"} alignItems="center" justifyContent={"space-evenly"} >
            <Stepper sx={{ background: "#fff", padding: "1rem", width: "100%", borderRadius: "1rem" }} activeStep={activeStep} orientation="vertical" className="stepPi">
                {steps.map((step, index) => (
                    <Step key={step.label}>
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
                        <Button onClick={() => { setActiveStep(0); setValues({}) }}>Restart</Button>

                    </Card>
                )
            }
        </Grid>

    );
}

export default StepperWithQuestion;
