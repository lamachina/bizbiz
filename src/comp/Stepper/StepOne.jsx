import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function StepOne({ handleNext }) {

    return (

        <>

            <Typography variant='h5'>Fundamentals</Typography>
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
            <Typography variant='subtitle2' textAlign={"left"}>This can typically be found in the project's white paper, website, Medium posts, <a rel="noreferrer" href='https://blog.hubspot.com/marketing/swot-analysis' target="_blank">Github</a> repository, and social media channels.</Typography>

            <ul>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://blog.hubspot.com/marketing/swot-analysis' rel="noreferrer" target="_blank">SWOT analysis</a> (available soon...) </Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"><a href='https://openai.com/blog/chatgpt' rel="noreferrer" target="_blank">Chat GPT</a> to summarize the White-Paper</Typography>
                </li>

            </ul>

            <Grid p={"1rem"}>
                <Button variant='outlined' onClick={handleNext}>
                    Next
                </Button>
            </Grid>


        </>
    )
}

export default StepOne