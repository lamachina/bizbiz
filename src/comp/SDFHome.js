import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

function SDFHome() {
    return (
        <Grid display='flex' justifyContent='center' flexDirection='column' justifyItems='center' alignItems='center' alignContent="center"  >
            <Paper className="papier" elevation={8} sx={{ display: "flex", justifyContent: "space-around" }}>

                <Grid m={"1rem"} display="flex" flexDirection={"column"} alignItems="center">
                    <Typography color="primary" variant='h4'>Shitcoin Delta Force</Typography>
                    <Typography pb="1rem" color="secondary" variant='overline'>your source for creative and quick shitcoin analysis</Typography>

                    <Typography textAlign="start" width="90%" variant='body'>
                        Our primary objective is to evaluate blockchain-based projects using a rigorous and systematic process that comprises various steps.<br /><br />
                        Our process involves :
                        <ul>
                            <li>
                                <span style={{ color: "#a0b4c7" }}> fundamental analysis  </span>
                            </li>
                            <li>
                                <span style={{ color: "#a9c7a0" }}> sentiment research  </span>
                            </li>
                            <li>
                                <span style={{ color: "#c7a0a0" }}> tokenomics </span>
                            </li>
                            <li>
                                <span style={{ color: "#c7c5a0" }}> wallet tracking  </span>
                            </li>
                        </ul>
                        If you have any <span style={{ color: "#5d5c65" }}>additional details</span> or information that could help us analyze the target market, feel free to reach us to discuss.<br /><br />
                        Once you've submitted your information, our app will automatically generate a report.
                    </Typography>


                </Grid>
            </Paper>
        </Grid>
    )
}

export default SDFHome