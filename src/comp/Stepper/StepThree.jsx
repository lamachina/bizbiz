import { Button } from '@mui/material'
import React from 'react'

function StepThree({ handleNext }) {

    return (

        <>
            <h3>Step Three</h3>
            <p>Select an option:</p>


            <Button onClick={handleNext}>
                Next
            </Button>

        </>
    )
}

export default StepThree