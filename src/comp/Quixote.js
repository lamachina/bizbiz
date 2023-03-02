import React, { useState } from 'react';
import { Button, Card, Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import "./../App.css"
import StepOne from './Stepper/StepOne';
import StepTwo from './Stepper/StepTwo';
import StepThree from './Stepper/StepThree';

function StepperWithQuestion() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const stepOne = () => {
        return (
            <StepOne handleNext={handleNext} />
        );
    };
    const stepTwo = () => {
        return (
            <StepTwo handleNext={handleNext} handleBack={handleBack} />
        );
    };
    const stepThree = () => {
        return (
            <StepThree handleNext={handleNext} handleBack={handleBack} />
        );
    };

    const steps = [
        { label: 'Fundamental', content: stepOne() },
        { label: 'On chain', content: stepTwo() },
        { label: 'Sentiment', content: stepThree() },
    ];

    return (
        <Grid display='flex' flexDirection='column' >
            <Stepper sx={{ background: "#fff", padding: "1rem", width: "20rem" }} activeStep={activeStep} orientation="vertical" className="stepPi">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent className="stepPi">
                            {step.content}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <Card sx={{ padding: '1rem' }}>
                {activeStep === steps.length && (
                    <div>
                        <h2>Finished!</h2>
                        <Button onClick={() => setActiveStep(0)}>Restart</Button>
                    </div>
                )}
            </Card>
        </Grid>
    );
}

export default StepperWithQuestion;
