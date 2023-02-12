import { Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import jsPDF from 'jspdf';
import React, { useState, useEffect } from 'react'

function Form() {

    const [marketArea, setMarketArea] = useState('');
    const [brandName, setBrandName] = useState('');
    const [moreDetails, setMoreDetails] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rep1, setrep1] = useState("")
    //const [rep2, setrep2] = useState("")
    const [rep2f, setrep2f] = useState("")



    const businessModel = `You are a trend analysis agency. You will answer with a detailed structure (title, subtitle, paragraph) for each point. 1. Size of the Target Market. A. Overview. B. ${brandName} Market Size. 2. Structure of the Target Market. A. Market Segmentation. B. Customer Profile. 3. Characteristics of the Target Market. A. Market Trends. B. Consumer Needs and Behaviors. 4. Potential Risks. A. Compétition. B. Economic Conditions.  Your goal is to do market analysis with the following instructions:  identify the size, structure and characteristics of the target market.Highlight market trends and opportunities as well as consumer needs and behaviors.find the potential risks associated with entering the market.Step-by-step analysis for market and environment: ${marketArea}Specifically, the analysis must put the brand ${brandName} at the center of the analysis.Use all of the following information along with your own research skills to develop an accurate and creative analysis model.Information: ${moreDetails}. Use two dots instead of one everytime you need to go to the line after a sentence.`
    /* 
        async function handleResponse(rep1) {
            // Code pour envoyer la requête à l'API d'OpenAI avec un prompt différent
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: `Use the informations below and do a PESTEL model analyze: ${rep1} `,
                    max_tokens: 1777,
                    n: 1,
                    stop: '',
                    temperature: 0.5,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Request failed with status code: ${response.status}`);
            }
    
            const json = await response.json();
            const generatedText = json.choices[0].text;
    
            setrep2(generatedText)
            let sentences = rep2.split('. ');
            let parsedText = '';
    
            for (let sentence of sentences) {
                parsedText += sentence + '.\n';
            }
    
            setrep2f(parsedText);
        } */
    const [seconds, setSeconds] = useState(45);
    useEffect(() => {
        let timer = null;
        if (isLoading) {
            timer = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    });

    const handleDownload = (inputText) => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });
        const pageWidth = doc.internal.pageSize.width;
        const textAreaWidth = pageWidth - 40;
        const lineHeight = 10;
        const lines = doc.splitTextToSize(inputText, textAreaWidth);
        let y = 10;
        for (const line of lines) {
            if (y + lineHeight > doc.internal.pageSize.height) {
                doc.addPage();
                y = 10;
            }
            doc.text(line, 10, y);
            y += lineHeight;
        }
        doc.save('marketanalyse.pdf');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);



        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: ` ${businessModel} .`,
                max_tokens: 1777,
                n: 1,
                stop: '',
                temperature: 0.5,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status code: ${response.status}`);
        }

        const json = await response.json();
        const generatedText = json.choices[0].text;
        setrep1(generatedText)
        console.log(generatedText);
        setIsLoading(false);
        // do something with the generated
        //handleResponse(generatedText);
        handleDownload(generatedText)
    }



    return (
        <>
            <Grid display='flex' justifyContent='center' direction='column' justifyItems='center' alignItems='center' alignContent="center"  >
                <Paper className="papier" elevation={8} sx={{ display: "flex", justifyContent: "space-around" }}>
                    <form className='formi' onSubmit={handleSubmit}>
                        <Grid p={1}>
                            <TextField
                                sx={{ backgroundColor: "#fff" }}
                                label="Market Area"
                                id="market-area"
                                value={marketArea}
                                required
                                onChange={(event) => setMarketArea(event.target.value)}
                            />
                        </Grid>
                        <Grid p={1}>
                            <TextField
                                sx={{ backgroundColor: "#fff" }}
                                label="Brand Name"
                                id="brand-name"
                                value={brandName}
                                required
                                onChange={(event) => setBrandName(event.target.value)}
                            />
                        </Grid>
                        <Grid p={1}>
                            <TextField
                                sx={{ backgroundColor: "#fff" }}
                                label="More Details"
                                id="more-details"
                                value={moreDetails}
                                onChange={(event) => setMoreDetails(event.target.value)}
                            />
                        </Grid>

                        {isLoading ? <Box> <CircularProgress />
                            <Box
                                sx={{
                                    top: "-2rem",
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Typography variant="caption" color="secondary">
                                    {seconds}
                                </Typography>
                            </Box>
                        </Box> :
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>}
                    </form>
                    <Grid flexDirection="column" display="flex" justifyContent="left" alignItems="center" className={isLoading ? 'grido' : 'gridi'}>
                        <Typography color="primary" variant='h4'>Market Model Machine</Typography>
                        <Typography pb="1rem" color="secondary" variant='overline'>your source for creative and quick market analysis</Typography>
                        {!isLoading ?
                            <Typography textAlign="start" width="70%" variant='body'>
                                To get started, simply target your <span style={{ color: "#1976d2", }}> market area.</span> <br /><br />
                                Then, enter the <span style={{ color: "#1976d2" }}>brand name</span> you'd like to focus on.<br /><br />
                                If you have any <span style={{ color: "#1976d2" }}>additional details</span> or information that could help us analyze the target market, feel free to enter that as well.<br /><br />
                                Once you've <span style={{ color: "green" }}>submitted</span> your information, our app will automatically generate a report.
                            </Typography>
                            :
                            <Typography variant='body2'> Downloading... do not quit the page.</Typography>
                        }

                        {/* <Button onClick={handleDownload}>Download PDF</Button> */}
                    </Grid>
                </Paper>
            </Grid>

        </>
    );
};


export default Form
