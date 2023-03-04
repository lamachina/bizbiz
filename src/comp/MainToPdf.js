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
                        content: result.collectedData.stepIntro.coinCategory
                            + '\n' + date,
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
                        content: 'Billed to:'
                            + '\nJohn Doe'
                            + '\nBilling Address line 1'
                            + '\nBilling Address line 2'
                            + '\nZip code - City'
                            + '\nCountry',
                        styles: {
                            halign: 'left'
                        }
                    },
                    {
                        content: 'Shipping address:'
                            + '\nJohn Doe'
                            + '\nShipping Address line 1'
                            + '\nShipping Address line 2'
                            + '\nZip code - City'
                            + '\nCountry',
                        styles: {
                            halign: 'left'
                        }
                    },
                    {
                        content: 'From:'
                            + '\nCompany name'
                            + '\nShipping Address line 1'
                            + '\nShipping Address line 2'
                            + '\nZip code - City'
                            + '\nCountry',
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
                        content: 'Amount due:',
                        styles: {
                            halign: 'right',
                            fontSize: 14
                        }
                    }
                ],
                [
                    {
                        content: '$4000',
                        styles: {
                            halign: 'right',
                            fontSize: 20,
                            textColor: '#3366ff'
                        }
                    }
                ],
                [
                    {
                        content: 'Due date: 2022-02-01',
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
                        content: 'Products & Services',
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
            head: [['Items', 'Category', 'Quantity', 'Price', 'Tax', 'Amount']],
            body: [
                ['Product or service name', 'Category', '2', '$450', '$50', '$1000'],
                ['Product or service name', 'Category', '2', '$450', '$50', '$1000'],
                ['Product or service name', 'Category', '2', '$450', '$50', '$1000'],
                ['Product or service name', 'Category', '2', '$450', '$50', '$1000']
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
                        content: 'Subtotal:',
                        styles: {
                            halign: 'right'
                        }
                    },
                    {
                        content: '$3600',
                        styles: {
                            halign: 'right'
                        }
                    },
                ],
                [
                    {
                        content: 'Total tax:',
                        styles: {
                            halign: 'right'
                        }
                    },
                    {
                        content: '$400',
                        styles: {
                            halign: 'right'
                        }
                    },
                ],
                [
                    {
                        content: 'Total amount:',
                        styles: {
                            halign: 'right'
                        }
                    },
                    {
                        content: '$4000',
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