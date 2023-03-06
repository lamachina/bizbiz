import { Box, Button, Divider, Grid, Rating, Slider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function StepOne({ handleNext, handleBack, updateObject, object }) {

    const handleChange = (event, value) => {
        updateObject('overviewDesc', event.target.value);
        console.log(event.target.value);
    };

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
            <Divider variant='middle' />
            <Grid justifyContent={"center"} display="flex" flexDirection={"column"} flexWrap="wrap" alignItems="center">
                <Typography pt={"1rem"} variant='overline' fontSize={"80%"} >Explain what is the project about</Typography>

                <Stack pt={"1rem"} gap="1rem" width={"100%"}>
                    <TextField
                        id="overviewDesc"
                        label="Overview"
                        variant="outlined"
                        onChange={handleChange}
                        name="overviewDesc"
                        multiline
                        rows={5}
                        fullWidth
                    />
                </Stack>
            </Grid>
            <Grid display={"flex"} justifyContent="space-evenly" p={"1rem"}>
                <Button variant='outlined' onClick={handleBack}>
                    Back
                </Button>
                <Button variant='outlined' onClick={handleNext}>
                    Next
                </Button>
            </Grid>


        </>
    )
}

export default StepOne