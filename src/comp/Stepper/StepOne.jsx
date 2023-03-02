import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function StepOne({ handleNext }) {

    return (

        <>

            <Typography variant='body1'>Fundamentals</Typography>
            <ul>
                <li>
                    <Typography variant='body2' textAlign="left">The narrative. </Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left">The architecture and governance structure.</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left">The value proposition and the concurrence</Typography>
                </li>
            </ul>
            <Typography variant='subtitle2' textAlign={"left"}>This can typically be found in the project's white paper, website, Medium posts, Github repository, and social media channels.</Typography>

            <Grid p={"1rem"}>
                <Button variant='outlined' onClick={handleNext}>
                    Next
                </Button>
            </Grid>


        </>
    )
}

export default StepOne