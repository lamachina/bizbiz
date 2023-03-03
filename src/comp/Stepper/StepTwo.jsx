import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function StepTwo({ handleNext }) {

    return (

        <>

            <Typography variant='h5'>Sentiment</Typography>

            <Typography variant='subtitle2' textAlign={"left"}>Target the audience and review the popularity with the below tools :</Typography>



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

            <Grid p={"1rem"}>
                <Button variant='outlined' onClick={handleNext}>
                    Next
                </Button>
            </Grid>


        </>
    )
}

export default StepTwo