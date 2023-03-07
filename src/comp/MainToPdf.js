import { Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable"
import { imgD } from "./imgbannierpdf";
import { imgCb } from "./imgcheckbox";
import { imgRF } from "./imgRedFlag";
import { imgQR } from "./imageQrTelegram";
import { imgQrWeb } from "./imageQrWebsite";
import { imgFooter } from "./imageFooter";
import { Telegram } from '@mui/icons-material';

function MainToPdf(collectedData) {
    const date = new Date();
    const result = collectedData

    console.log(result.collectedData.stepIntro.coinName);

    const handleClick = async () => {
        const doc = new jsPDF();
        const imgData = imgD

        doc.addImage(imgData, 'JPEG', 1, 1, 208, 28);

        autoTable(doc, {
            head: [
                [

                    {
                        content: result.collectedData.stepIntro.coinName,
                        styles: {
                            halign: 'left',
                            fontSize: 22,
                            cellWidth: 'wrap',
                            valign: 'top',
                            textColor: '#a0b4c7',
                            fontStyle: 'bold'
                        }
                    }
                ],
            ],
            theme: 'plain',

        });


        autoTable(doc, {
            head: [
                [

                    {
                        content: "$" + result.collectedData.stepIntro.coinShortName.toUpperCase(),
                        styles: {
                            halign: 'center',
                            fontSize: 32,
                            cellWidth: 'wrap',
                            textColor: '#00000',
                            fontStyle: 'bold'
                        }
                    }
                ],
            ],
            theme: 'plain',

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
                    },
                    {
                        content: 'Portfolio score',
                        styles: {
                            halign: 'right',
                            fontSize: 14
                        }
                    },

                ],
                [
                    {
                        content: result.collectedData.stepThree.coinFRcat,
                        styles: {
                            halign: 'left',
                            fontSize: 14
                        }
                    },
                    {
                        content: result.collectedData.stepTwo,
                        styles: {
                            halign: 'right',
                            fontSize: 20,
                            textColor: '#a0b4c7'
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
                        content: 'PROJECT DESCRIPTION :'
                            + '\n'
                            + '\n'
                            + result.collectedData.overviewDesc,
                        styles: {
                            halign: 'left',
                            minCellHeight: 50,
                        }
                    }
                ],
            ],
            theme: 'plain',
        });



        autoTable(doc, {
            body: [
                [
                    {
                        content: 'METRICS ',
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
            didDrawCell: (data) => {
                if (data.section === 'body') {
                    const imgDataCb = imgCb;
                    const imgDataRF = imgRF;

                    if (data.column.index === 0 && result.collectedData.stepThree.cWhale) {
                        doc.addImage(imgDataCb, 'JPEG', data.cell.x + 10, data.cell.y, 6, 6);
                    } else if (data.column.index === 1 && result.collectedData.stepThree.cFair) {
                        doc.addImage(imgDataCb, 'JPEG', data.cell.x + 10, data.cell.y, 6, 6);
                    } else if (data.column.index === 2 && result.collectedData.stepThree.cComu) {
                        doc.addImage(imgDataCb, 'JPEG', data.cell.x + 12, data.cell.y, 6, 6);
                    } else if (data.column.index === 3 && result.collectedData.stepThree.cRedFlag) {
                        doc.addImage(imgDataRF, 'JPEG', data.cell.x + 6, data.cell.y, 8, 8);
                    }
                }
            },
            head: [['Whale & VC', 'Fair distribution', 'Strong community', 'Red Flag']],
            body: [
                ['', '', '', ''
                ],
            ],
            theme: 'striped',
            headStyles: {
                fillColor: '#343a40'
            }
        });

        autoTable(doc, {
            head: [['Market Cap', 'TVL', 'FDV', 'MC/TVL ratio', 'FDV/TVL ratio']],
            body: [
                [result.collectedData.stepMetrics.coinMC + ' $',
                result.collectedData.stepMetrics.coinTVL + ' $',
                result.collectedData.stepMetrics.coinFDV + ' $',
                result.collectedData.stepMetrics.coinMCbyTVL,
                result.collectedData.stepMetrics.coinFDVbyTVL,
                ],

            ],
            theme: 'grid',
            headStyles: {
                fillColor: '#5C65A7'
            }
        });
        autoTable(doc, {
            head: [['Fee (7d)', 'Revenue (7d)', 'Strengh', 'Weakness', 'Opportunitie', 'Threat']],
            body: [
                [result.collectedData.stepThree.cFees,
                result.collectedData.stepThree.cRevenue,
                    '', '', '', ''
                ],

            ],
            theme: 'grid',
            headStyles: {
                fillColor: '#a0b4c7'
            }
        });

        /* 
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
                }); */

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


        const imgDataQR = imgQR
        const imgDataQRW = imgQrWeb
        const imgDataFooter = imgFooter

        doc.addImage(imgDataFooter, 'JPEG', 1, 270, 208, 28);

        doc.addImage(imgDataQRW, 'JPEG', 182, 270, 22, 24);
        doc.addImage(imgDataQR, 'JPEG', 155, 270, 22, 22);

        //FOOTER
        autoTable(doc, {
            body: [
                [
                    {
                        content: 'Terms & notes',
                        styles: {
                            halign: 'left',
                            valign: 'bottom',
                            fontSize: 14,
                            textColor: '#000',
                        }
                    }
                ],
                [
                    {
                        content: 'This content is provided for educational purposes only'
                            + ' and is not intended to be construed as financial advice. '
                            + '\n@lamachina & @NostraDam do not guarantee the accuracy, completeness, or usefulness of any information.',
                        styles: {
                            halign: 'left',
                            valign: 'bottom',
                            cellWidth: 'wrap',
                            textColor: '#000',
                        }
                    },

                ],
            ],
            theme: "plain",
        });



        return doc.save("SDF_Report_" + result.collectedData.stepIntro.coinShortName);

    }


    return (
        <Stack gap={"1rem"} width="60%">
            <Paper elevation={12} >
                <Button onClick={handleClick}>GET YOUR REPORT</Button>
            </Paper>
            <Paper elevation={4} sx={{ width: "100%" }}>
                <Typography> <a href='https://t.me/+VGfwiKhC5xA1MTY0' rel="noreferrer" target="_blank">SHARE IT <Telegram /> </a> </Typography>
            </Paper>
        </Stack>
    )
}

export default MainToPdf