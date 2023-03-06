import { AnchorTwoTone, Check, CurrencyExchangeTwoTone, Diversity2TwoTone, PhishingTwoTone, ReportTwoTone } from '@mui/icons-material';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState, useEffect } from 'react'



function StepMetrics({ handleNext, updateObject, object, handleBack }) {


    const [inputValues, setInputValues] = useState({
        coinMC: 0,
        coinFDV: 0,
        coinTVL: 0,
        // add more checkboxes as needed
    });
    const [ratios, setRatios] = useState({
        coinMCbyTVL: 0,
        coinFDVbyTVL: 0,
        // add more ratios as needed
    });
    useEffect(() => {
        const { coinMC, coinFDV, coinTVL } = inputValues;

        // Calculate coinMCbyTVL ratio
        const coinMCbyTVL = coinTVL !== 0 ? Math.round((coinMC / coinTVL) * 100000) / 100000 : 0;

        // Calculate coinTVLbyFDV ratio
        const coinFDVbyTVL = coinTVL !== 0 ? Math.round((coinFDV / coinTVL) * 100000) / 100000 : 0;

        // Update the ratios state
        setRatios({ coinMCbyTVL, coinFDVbyTVL });

        // Update the object state
        updateObject('stepMetrics', { ...inputValues, ...ratios });
    }, [inputValues]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputValues({ ...inputValues, [name]: value });
        updateObject('stepMetrics', { ...inputValues, [name]: value });
        console.log(object);
    };

    return (

        <Grid className='bgtwo'>

            <Typography pb={"1rem"} variant='h5'>Metrics</Typography>

            <Typography sx={{ background: '#fff' }} width='fit-content' variant='subtitle2' textAlign={"left"}>Report the basics metrics</Typography>

            <ul>
                <li>
                    <Typography sx={{ background: '#fff' }} width='fit-content' variant='body2' textAlign="left"> <a href='https://coinmarketcap.com/' rel="noreferrer" target="_blank">Coin Market Cap</a> </Typography>
                </li>

                <li>
                    <Typography sx={{ background: '#fff' }} width='fit-content' variant='body2' textAlign="left"> <a href='https://www.dextools.io/app/en/ether' rel="noreferrer" target="_blank">Dextools</a></Typography>
                </li>


            </ul>
            <Grid justifyContent={"center"} display="flex" p={"1rem"} flexDirection="column">
                <Stack pt={"1rem"} gap="1rem" display='flex' flexDirection={'row'} flexWrap='wrap' justifyContent={'center'} >
                    <TextField
                        sx={{ background: '#fff' }}
                        id="coinMC"
                        label="Market capitalization"
                        variant="outlined"
                        onChange={handleChange}
                        name="coinMC"
                        type={'number'}
                    />
                    <TextField
                        sx={{ background: '#fff' }}
                        id="coinFDV"
                        label="Fully diluted valuation"
                        variant="outlined"
                        onChange={handleChange}
                        name="coinFDV"
                        type={'number'}
                    />
                    <TextField
                        sx={{ background: '#fff' }}
                        id="coinTVL"
                        label="Total value locked"
                        variant="outlined"
                        onChange={handleChange}
                        name="coinTVL"
                        type={'number'}
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

        </Grid>
    )
}

export default StepMetrics