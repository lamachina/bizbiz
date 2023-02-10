import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import React, { useState } from 'react'

function Form() {
    const [marketArea, setMarketArea] = useState('');
    const [brandName, setBrandName] = useState('');
    const [moreDetails, setMoreDetails] = useState('');
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
        doc.save('file.pdf');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
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
        // do something with the generated
        //handleResponse(generatedText);
        handleDownload(generatedText)
    }

    return (
        <>
            <Grid container display='flex' justifyContent='center' direction='column' justifyItems='center' alignItems='center' alignContent="center" padding='2rem' >
                <Paper elevation={8} sx={{ padding: "3rem", width: "80%", display: "flex", justifyContent: "left" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid p={1}>
                            <TextField
                                label="Market Area"
                                id="market-area"
                                value={marketArea}
                                required
                                onChange={(event) => setMarketArea(event.target.value)}
                            />
                        </Grid>
                        <Grid p={1}>
                            <TextField
                                label="Brand Name"
                                id="brand-name"
                                value={brandName}
                                required
                                onChange={(event) => setBrandName(event.target.value)}
                            />
                        </Grid>
                        <Grid p={1}>
                            <TextField
                                label="More Details"
                                id="more-details"
                                value={moreDetails}
                                onChange={(event) => setMoreDetails(event.target.value)}
                            />
                        </Grid>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                    <Grid container direction="column" >
                        <Typography variant='h4'>Market Overview</Typography>
                        <Typography variant='overline'>Get you business model in 5min...</Typography>
                        <Typography variant='body'>Fill out the informations you have and receive your business analyse in 1 click</Typography>
                        {/* <Button onClick={handleDownload}>Download PDF</Button> */}
                    </Grid>
                </Paper>
            </Grid>

        </>
    );
};


export default Form