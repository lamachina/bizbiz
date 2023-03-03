import { Button, Grid, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function StepTwo({ handleBack, handleNext, updateObject, object }) {

    const handleChange = (event, value) => {
        updateObject('stepTwo', value);
        console.log(object);
    };



    return (

        <>

            <Typography variant='h5'>Sentiment</Typography>

            <Typography variant='subtitle2' textAlign={"left"}>Target the audience and review the popularity with :</Typography>



            <ul>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://www.perplexity.ai/sql' rel="noreferrer" target="_blank">Perplexity</a> to get all infos about Tweets. (ex : “Most liked tweets about $TEST since 2023”)</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://lunarcrush.com/global-coin-metrics' rel="noreferrer" target="_blank">Lunarcrush</a> for the Global metrics like Social Mentions/Engagements</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://app.santiment.net/' rel="noreferrer" target="_blank">Santiment</a> for detailed infos</Typography>
                </li>


            </ul>
            <Grid justifyContent={"center"} display="flex" >
                <Stack width="63%" alignItems={"center"} alignContent="center">
                    <Typography variant='subtitle2' textAlign={"left"}>Rate the overall sentiment of the audience:</Typography>
                    <Stack width={"100%"} direction="row" gap={"1rem"} alignItems="center">
                        <ThumbDownAltIcon color='error' />
                        <Slider
                            value={object}
                            onChange={handleChange}
                            min={0}
                            max={100}
                            step={1}
                            valueLabelDisplay="auto"
                        />
                        <ThumbUpAltIcon color='success' />
                    </Stack>
                </Stack>
            </Grid>
            <Grid display={"flex"} justifyContent="space-evenly" p={"1rem"} >
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

export default StepTwo