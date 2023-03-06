import { Button, Grid, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { AddShoppingCartTwoTone, ProductionQuantityLimitsTwoTone } from '@mui/icons-material';

function StepTwo({ handleBack, handleNext, updateObject, object }) {

    const handleChange = (event, value) => {
        updateObject('stepTwo', value);
    };
    const coinName = object.stepIntro.coinShortName
    console.log(coinName);


    return (

        <>

            <Typography variant='h5'>Sentiment</Typography>

            <Typography variant='subtitle2' textAlign={"left"}>Target the audience and review the popularity with :</Typography>

            <ul>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://www.perplexity.ai/sql' rel="noreferrer" target="_blank">Perplexity</a> to get all infos about Tweets. (ex : “Most liked tweets about $SDF since 2023”)</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://lunarcrush.com/global-coin-metrics' rel="noreferrer" target="_blank">Lunarcrush</a> for the Global metrics like Social Mentions/Engagements</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://app.santiment.net/' rel="noreferrer" target="_blank">Santiment</a> for detailed infos</Typography>
                </li>


            </ul>
            <Grid justifyContent={"center"} display="flex" pt={"1rem"} >
                <Stack width="73%" alignItems={"center"} alignContent="center">
                    <Typography variant='body2' textAlign={"left"}>A portfolio of 100 points is dedicated to this project and these competitors.<br></br>How many points would you allocate to ${coinName} ?</Typography>
                    <Stack width={"100%"} direction="row" gap={"1rem"} alignItems="center">
                        <ProductionQuantityLimitsTwoTone color='secondary' />
                        <Slider
                            value={object.stepTwo}
                            onChange={handleChange}
                            min={0}
                            max={100}
                            step={1}
                            valueLabelDisplay="auto"
                        />
                        <AddShoppingCartTwoTone color='primary' />
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