import { Button, Grid, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
function StepThree({ handleNext, handleBack }) {

    return (

        <>

            <Typography variant='h5'>Token & onChain</Typography>

            <Typography variant='subtitle2' textAlign={"left"}>Identify if Whales or VC's have shown interest for the project</Typography>



            <ul>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://defillama.com/raises' rel="noreferrer" target="_blank">DefiLlama</a> for the raises.</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left">Find the best in this list of <a href='https://messari.io/governor/tools' rel="noreferrer" target="_blank">tools</a> used by DAO's</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://dune.com/browse/dashboards' rel="noreferrer" target="_blank">Dune</a> for the last infos</Typography>
                </li>
                <li>
                    <Typography variant='body2' textAlign="left"> <a href='https://app.artemis.xyz/developers/on-chain' rel="noreferrer" target="_blank">Artemis</a> helps to compare the Mainnet Deployments</Typography>
                </li>


            </ul>

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

export default StepThree