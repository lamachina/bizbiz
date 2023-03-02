import { Button } from '@mui/material'
import React from 'react'

function StepTwo({ handleNext }) {

    return (

        <>
            <h3>Step One</h3>
            <p>Select an option:</p>


            <Button onClick={handleNext}>
                Next
            </Button>

        </>
    )
}

export default StepTwo