import { Button, Checkbox, Grid, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';



function StepThree({ handleNext, updateObject, object, handleBack }) {
    const [checkboxValues, setCheckboxValues] = useState({
        cOne: false,
        cTwo: false,
        cThree: false,
        // add more checkboxes as needed
    });
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxValues({ ...checkboxValues, [name]: checked });
        updateObject('stepThree', { ...checkboxValues, [name]: checked });
    };

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
            <Typography variant='subtitle2' textAlign={"left"}>Metrics</Typography>
            <Stack flexDirection={"row"} flexWrap="wrap" >
                <ul> <li>
                    <Stack flexDirection={"row"} alignItems="center">
                        <Typography variant='overline' >Market capitalization (MC)</Typography>
                        <Checkbox value={object} name="cOne" onChange={handleChange} icon={<RocketLaunchIcon />} checkedIcon={<RocketLaunchIcon color='success' />} />
                    </Stack>
                </li>
                    <li>
                        <Stack flexDirection={"row"} alignItems="center">
                            <Typography variant='overline' >Total value locked (TVL)</Typography>
                            <Checkbox name="cTwo" onChange={handleChange} icon={<RocketLaunchIcon />} checkedIcon={<RocketLaunchIcon color='success' />} />
                        </Stack>
                    </li>
                    <li>
                        <Stack flexDirection={"row"} alignItems="center">
                            <Typography variant='overline' >Fully diluted valuation (FDV)</Typography>
                            <Checkbox name="cThree" onChange={handleChange} icon={<RocketLaunchIcon />} checkedIcon={<RocketLaunchIcon color='success' />} />
                        </Stack>
                    </li>
                </ul>
            </Stack>
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