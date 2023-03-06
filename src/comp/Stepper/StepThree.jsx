import { AnchorTwoTone, Check, CurrencyExchangeTwoTone, Diversity2TwoTone, PhishingTwoTone, ReportTwoTone } from '@mui/icons-material';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'



function StepThree({ handleNext, updateObject, object, handleBack }) {

    const [checkboxValues, setCheckboxValues] = useState({
        cWhale: false,
        cFair: false,
        cComu: false,
        cRedFlag: false,
        // add more checkboxes as needed
    });

    const [inputValues, setInputValues] = useState({
        coinFRcat: "",
        cFees: 0,
        cRevenue: 0,
        cWhale: false,
        cFair: false,
        cComu: false,
        cRedFlag: false,
        // add more checkboxes as needed
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setInputValues({ ...inputValues, [name]: newValue });
        updateObject('stepThree', { ...inputValues, [name]: newValue });
        setCheckboxValues({ ...checkboxValues, [name]: checked });
        console.log(object);
    };

    return (

        <>

            <Typography pb={"1rem"} variant='h5'>Token & onChain</Typography>

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
                    <InputLabel id="demo-simple-select-label">Fees and Revenue category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="coinFRcat"
                        label="Category"
                        onChange={handleChange}
                        name="coinFRcat"
                    >
                        <MenuItem value={"Dexes"}>Dexes</MenuItem>
                        <MenuItem value={"Derivatives"}>Derivatives</MenuItem>
                        <MenuItem value={"Chain"}>Chain</MenuItem>
                        <MenuItem value={"Options"}>Options</MenuItem>
                        <MenuItem value={"Lending"}>Lending</MenuItem>
                        <MenuItem value={"CDP"}>CDP</MenuItem>
                        <MenuItem value={"Rollup"}>Rollup</MenuItem>
                        <MenuItem value={"Prediction"}>Prediction</MenuItem>
                        <MenuItem value={"Oracle"}>Oracle</MenuItem>
                        <MenuItem value={"Yield"}>Yield</MenuItem>
                        <MenuItem value={"Liquid Staking"}>Liquid Staking</MenuItem>
                        <MenuItem value={"Algo-Stables"}>Algo-Stables</MenuItem>
                        <MenuItem value={"Leveraged Farming"}>Leveraged Farming</MenuItem>
                        <MenuItem value={"NFT Marketplace"}>NFT Marketplace</MenuItem>
                        <MenuItem value={"NFT Lending"}>NFT Lending</MenuItem>
                        <MenuItem value={"Cross Chain"}>Cross Chain</MenuItem>
                        <MenuItem value={"Synthetics"}>Synthetics</MenuItem>
                    </Select>
                </FormControl>

                <Stack pt={"1rem"} gap="1rem">
                    <TextField
                        id="cRevenue"
                        label="Revenue (7d)"
                        variant="outlined"
                        onChange={handleChange}
                        name="cRevenue"
                        type={'number'}
                    />
                    <TextField
                        id="cFees"
                        label="Fees (7d)"
                        variant="outlined"
                        onChange={handleChange}
                        name="cFees"
                        type={'number'}
                    />
                </Stack>

                <Stack pt={"2rem"} gap="1rem">
                    <Typography variant='h6'>Confirm all informations you have about the project thrid-party</Typography>
                    <FormControlLabel sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        control={
                            <Checkbox
                                checked={checkboxValues.cWhale}
                                icon={<AnchorTwoTone fontSize='large' />}
                                onChange={handleChange}
                                name="cWhale"
                                checkedIcon={<AnchorTwoTone fontSize='large' color='secondary' />}
                            />
                        }
                        label="Whales or VC invested ?"
                    />
                    <Typography fontFamily='monospace !important' variant='caption'>Single wallet owns +5% of the supply</Typography>
                    <Divider variant='middle' />
                    <FormControlLabel sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        control={
                            <Checkbox
                                checked={checkboxValues.cFair}
                                icon={<CurrencyExchangeTwoTone fontSize='large' />}
                                onChange={handleChange}
                                name="cFair"
                                checkedIcon={<CurrencyExchangeTwoTone fontSize='large' color='warning' />}
                            />
                        }
                        label="Fair initial token distribution ?"
                    />
                    <Typography textAlign='left' fontFamily='monospace !important' variant='caption'>OPTIMAL DISTRIBUTION
                        <br></br>MAX : Team 15% | Advisors 10% | Early investors 25% | Public sale 10% | Marketing 10% | Ecosystem 10% | Liquidity 20%
                        <br></br>
                        MIN : Treasury 15%

                    </Typography>
                    <Divider variant='middle' />
                    <FormControlLabel sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        control={
                            <Checkbox
                                checked={checkboxValues.cComu}
                                icon={<Diversity2TwoTone fontSize='large' />}
                                onChange={handleChange}
                                name="cComu"
                                checkedIcon={<Diversity2TwoTone fontSize='large' color='success' />}
                            />
                        }
                        label="Strong community ?"
                    />
                    <Typography fontFamily='monospace !important' variant='caption'>Over 5000 tweets and transaction per day. Devs are commiting often.</Typography>
                    <Divider variant='middle' />
                    <FormControlLabel sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        control={
                            <Checkbox
                                checked={checkboxValues.cRedFlag}
                                icon={<ReportTwoTone fontSize='large' />}
                                onChange={handleChange}
                                name="cRedFlag"
                                checkedIcon={<ReportTwoTone fontSize='large' color='error' />}
                            />
                        }
                        label="Red Flag ?"
                    />
                    <Typography fontFamily='monospace !important' variant='caption'>Absence of a whitepaper, Lack of a roadmap, background is unknown, no identified target groups, Poor behaviour...</Typography>
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