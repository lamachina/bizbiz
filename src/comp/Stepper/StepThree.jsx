import { Check } from '@mui/icons-material';
import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'



function StepThree({ handleNext, updateObject, object, handleBack }) {
    const [inputValues, setInputValues] = useState({
        coinMC: "",
        cWhale: false,
        coinCategory: "",
        // add more checkboxes as needed
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        updateObject('stepThree', { ...inputValues, [name]: value });
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
            <Grid justifyContent={"center"} display="flex" p={"1rem"} flexDirection="column">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Total Market Cap</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="coinMC"
                        label="Market Cap"
                        onChange={handleChange}
                        name="coinMC"
                    >
                        <MenuItem value={"< 300k$"}>under 300k$</MenuItem>
                        <MenuItem value={"< 1M$"}>between 300k$ and 1M$</MenuItem>
                        <MenuItem value={"< 10M$"}>between 1M$ and 10M$</MenuItem>
                        <MenuItem value={"< 50M$"}>between 10M$ and 50M$</MenuItem>
                        <MenuItem value={"< 500M$"}>between 50M$ and 500M$</MenuItem>

                    </Select>
                </FormControl>
                <Stack pt={"1rem"} gap="1rem">
                    <TextField
                        id="coinName"
                        label="Name"
                        variant="outlined"
                        onChange={handleChange}
                        name="coinName"
                    />
                    <TextField
                        id="coinShortName"
                        label="Symbole"
                        variant="outlined"
                        onChange={handleChange}
                        name="coinShortName"
                    />
                </Stack>
                <Stack flexDirection={"row"} flexWrap="wrap" >
                    <ul> <li>
                        <Stack flexDirection={"row"} alignItems="center">
                            <Typography variant='overline' >Whales invested </Typography>
                            <Checkbox name="cWhale" onChange={handleChange} icon={<Check />} checkedIcon={<Check color='success' />} />
                        </Stack>
                    </li>
                        <li>
                            <Stack flexDirection={"row"} alignItems="center">
                                <Typography variant='overline' >Lot of concurrent</Typography>
                                <Checkbox name="cTwo" onChange={handleChange} icon={<Check />} checkedIcon={<Check color='success' />} />
                            </Stack>
                        </li>
                        <li>
                            <Stack flexDirection={"row"} alignItems="center">
                                <Typography variant='overline' >Fully diluted valuation (FDV)</Typography>
                                <Checkbox name="cThree" onChange={handleChange} icon={<Check />} checkedIcon={<Check color='success' />} />
                            </Stack>
                        </li>
                    </ul>
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

export default StepThree