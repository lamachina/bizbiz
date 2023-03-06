import { Button } from '@mui/material'
import React from 'react'
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable"
import { imgD } from "./imgbannierpdf";
import { imgCb } from "./imgcheckbox";
import { imgRF } from "./imgRedFlag";

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
                        content: ' - ',
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
            head: [
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
                    ,
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
                            + '\n@lamachina & @NostraDam do not guarantee the accuracy, completeness, or usefulness of any information.',
                        styles: {
                            halign: 'left'
                        }
                    }
                ],
            ],
            theme: "plain",
        });



        const imgData = imgD
        const imgDataCb = imgCb
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