import { Box, Button, Grid, Rating, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
function getLabelText(value) {
    return `${value} RocketLaunch${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function StepOne({ handleNext, updateObject, object }) {
    const [hover, setHover] = React.useState(-1);
    const [numi, setnumi] = React.useState(2);

    const handleChange = (event, value) => {
        updateObject('stepOne', value);
        console.log(object);
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
            <Grid justifyContent={"center"} display="flex" flexDirection={"row"} flexWrap="wrap" alignItems="center">
                <Typography variant='overline' fontSize={"80%"} >What is your first opinion about the project ?</Typography>
                <Box
                    p={"0.5rem"}
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="hover-feedback"
                        value={object}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={handleChange}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        icon={<RocketLaunchIcon style={{ opacity: 1 }} fontSize="large" />}
                        emptyIcon={<RocketLaunchIcon style={{ opacity: 0.8 }} fontSize="large" />}
                    />
                    {numi !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : numi]}</Box>
                    )}
                </Box>
            </Grid>
            <Grid p={"1rem"}>
                <Button variant='outlined' onClick={handleNext}>
                    Next
                </Button>
            </Grid>


        </>
    )
}

export default StepOne