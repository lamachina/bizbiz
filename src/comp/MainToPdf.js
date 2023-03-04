import { Button } from '@mui/material'
import React from 'react'
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable"
import { imgD } from "./imgbannierpdf";

function MainToPdf(collectedData) {
    const date = new Date();

    const result = collectedData

    console.log(result.collectedData.stepIntro.coinName);

    const handleClick = async () => {
        const doc = new jsPDF();

        autoTable(doc, {
            body: [
                [

                    {
                        content: 'Name Network - $NN',
                        styles: {
                            halign: 'center',
                            fontSize: 20,
                            textColor: '#ffffff',
                            fontStyle: 'bold'
                        }
                    }
                ],
            ],
            theme: 'plain',
            styles: {
                fillColor: '#a0b4c7',
            }
        });

        autoTable(doc, {
            body: [
                [

                    {
                        content: result.collectedData.stepIntro.coinName + " - $" + result.collectedData.stepIntro.coinShortName,
                        styles: {
                            halign: 'center',
                            fontSize: 20,
                            textColor: '#ffffff',
                            fontStyle: 'bold'
                        }
                    }
                ],
            ],
            theme: 'plain',
            styles: {
                fillColor: '#a0b4c7',
            }
        });

        autoTable(doc, {
            body: [
                [
                    {
                        content: result.collectedData.stepIntro.coinCategory,
                        styles: {
                            halign: 'left',
                            fontSize: 14,
                        }
                    }
                ],
            ],
            theme: 'plain'
        });

        autoTable(doc, {
            body: [
                [
                    {
                        content: 'FUNDAMENTAL ANALYSIS :'
                            + '\n'
                            + '\nthe project has a detection note of ' + result.collectedData.stepOne
                            + '\n'
                            + '\n'
                            + '\n',
                        styles: {
                            halign: 'left'
                        }
                    },
                    {
                        content: 'SENTIMENT RESEARCH :'
                            + '\n'
                            + '\nTweet in last 6 months are growing'
                            + '\nBullish sentiment score is ' + result.collectedData.stepTwo
                            + '\n'
                            + '\n',
                        styles: {
                            halign: 'left'
                        }
                    },

                    {
                        content: 'TOKENOMIC :'
                            + '\n'
                            + '\nMarket Cap ' + result.collectedData.stepThree.coinMC
                            + '\n'
                            + '\n'
                            + '\n',
                        styles: {
                            halign: 'right'
                        }
                    }

                ],
            ],
            theme: 'plain'
        });

        autoTable(doc, {
            body: [
                [
                    {
                        content: 'Current price in USD',
                        styles: {
                            halign: 'right',
                            fontSize: 14
                        }
                    }
                ],
                [
                    {
                        content: '$0.0005',
                        styles: {
                            halign: 'right',
                            fontSize: 20,
                            textColor: '#a0b4c7'
                        }
                    }
                ],
                [
                    {
                        content: '0.0000002 in $BTC',
                        styles: {
                            halign: 'right'
                        }
                    }
                ]
            ],
            theme: 'plain'
        });

        autoTable(doc, {
            body: [
                [
                    {
                        content: 'SWOT ANALYSIS ',
                        styles: {
                            halign: 'left',
                            fontSize: 14
                        }
                    }
                ]
            ],
            theme: 'plain'
        });

        autoTable(doc, {
            head: [['Strength', 'Weakness', 'Opportunities', 'Threats']],
            body: [
                ['Scalibility and speed', 'Durabilty', 'Soon is halving', 'CZ and CEX'],

            ],
            theme: 'striped',
            headStyles: {
                fillColor: '#343a40'
            }
        });

        autoTable(doc, {
            body: [
                [
                    {
                        content: 'A good price to buy :',
                        styles: {
                            halign: 'right'
                        }
                    },
                    {
                        content: '$0.000002',
                        styles: {
                            halign: 'right'
                        }
                    },
                ],

            ],
            theme: 'plain'
        });
        autoTable(doc, {
            body: [
                [
                    {
                        content: date,
                        styles: {
                            halign: 'center'
                        }
                    }
                ]
            ],
            theme: "plain"
        });
        autoTable(doc, {
            body: [
                [
                    {
                        content: 'Terms & notes',
                        styles: {
                            halign: 'left',
                            fontSize: 14
                        }
                    }
                ],
                [
                    {
                        content: 'This content is provided for educational purposes only'
                            + ' and is not intended to be construed as financial advice. '
                            + '\n@lamachina does not guarantee the accuracy, completeness, or usefulness of any information.',
                        styles: {
                            halign: 'left'
                        }
                    }
                ],
            ],
            theme: "plain"
        });



        const imgData = imgD
        doc.addImage(imgData, 'JPEG', 1, 1, 208, 28);

        return doc.save("invoice");

    }


    return (
        <div>

            <Button onClick={handleClick}>PRINTI</Button>

        </div>
    )
}

export default MainToPdf