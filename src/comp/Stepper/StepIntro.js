import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'

function StepIntro({ handleNext, updateObject }) {


    const [inputValues, setInputValues] = useState({
        coinName: "",
        coinShortName: "",
        coinCategory: ""
        // add more checkboxes as needed
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        updateObject('stepIntro', { ...inputValues, [name]: value });
    };


    const validation = (inputValues) => {
        return (inputValues.coinName === '' || inputValues.coinShortName === '' || inputValues.coinCategory === '')
    }


    return (

        <>

            <Typography p={"1rem"} variant='h5'>Overview</Typography>

            <Typography variant='subtitle2' textAlign={"left"}>Fill the basics :</Typography>

            <Grid justifyContent={"center"} display="flex" p={"1rem"} flexDirection="column">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="coinCategory"
                        label="Category"
                        onChange={handleChange}
                        name="coinCategory"
                    >
                        <MenuItem value={"LAYER 1"}>LAYER 1</MenuItem>
                        <MenuItem value={"LAYER 2"}>LAYER 2</MenuItem>
                        <MenuItem value={"LAYER 0"}>LAYER 0</MenuItem>
                        <MenuItem value={"LSD"}>LSD</MenuItem>
                        <MenuItem value={"DERIVATIVES/OPTIONS"}>DERIVATIVES / OPTIONS</MenuItem>
                        <MenuItem value={"DEX"}>DEX</MenuItem>
                        <MenuItem value={"GAMING"}>GAMING</MenuItem>
                        <MenuItem value={"AI"}>AI</MenuItem>
                        <MenuItem value={"NFT"}>NFT</MenuItem>
                        <MenuItem value={"PRIVACY"}>PRIVACY</MenuItem>
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


            </Grid>
            {!validation(inputValues) &&
                <Grid display={"flex"} justifyContent="space-evenly" p={"1rem"} >

                    <Button variant='outlined' onClick={handleNext}  >
                        Next
                    </Button>
                </Grid>
            }


        </>
    )
}

export default StepIntro