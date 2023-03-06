import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import bubblemap from './tools_img/BubbleMap.png'
import cmcal from './tools_img/cmcal.png'
import defillama from './tools_img/defilama.png'
import dexscreener from './tools_img/dexscreener.png'
import lunarcrush from './tools_img/LUNARCRUSH.png'
import messari from './tools_img/MESSQRI.png'
import tokensniffer from './tools_img/tokensniffer.png'
import tokenunlock from './tools_img/tokenunlock.png'

const items = [
    {
        image: tokenunlock,
        title: "TOKEN UNLOCKS",
        color: '#b5c5d4',
        lien: 'https://token.unlocks.app/',
        description: "Item 1 description."
    },
    {
        image: bubblemap,
        title: "BUBBLEMAPS",
        color: '#b5d4c4',
        lien: 'https://app.bubblemaps.io/eth/',
        description: "Item 1 description."
    },
    {
        image: dexscreener,
        title: "DEXSCRENNER",
        color: '#d4b5c5',
        lien: 'https://dexscreener.com/',
        description: "Item 1 description."
    },
    {
        image: tokensniffer,
        title: "TOKENSNIFFER",
        color: '#d4c4b5',
        lien: 'https://tokensniffer.com/',
        description: "Item 1 description."
    },
    {
        image: defillama,
        title: "DEFILLAMA",
        color: '#b5c5d4',
        lien: 'https://defillama.com/',
        description: "Item 1 description."
    },
    {
        image: messari,
        title: "MESSARI",
        color: '#b5d4c4',
        lien: 'https://messari.io/',
        description: "Item 1 description."
    },
    {
        image: lunarcrush,
        title: "LUNAR CRUSH ",
        color: '#d4b5c5',
        lien: 'https://lunarcrush.com/',
        description: "Item 1 description."
    },
    {
        image: cmcal,
        title: "COIN MARKET CAL",
        color: '#b5c5d4',
        lien: 'https://coinmarketcal.com/en/',
        description: "Item 1 description."
    },



    // add more items here...
];

console.log(items);
function Tools() {
    return (
        <Grid display={'flex'} width="100%" flexDirection='column' gap={3} alignItems='center' gridColumn={2} sx={{ background: '#f5f7f9' }}  >

            <Typography p={1} variant='h4' color={'secondary'} >Browse our list of recommended tools</Typography>
            <Divider variant='middle' />
            {items.map(item => (

                <Grid width={'80%'} borderRadius='2rem'>
                    <a href={item.lien} rel="noreferrer" target="_blank">
                        <Card key={item.title} sx={{ background: item.color, borderRadius: '2rem' }} >
                            <CardMedia
                                component={'img'}
                                height={"300px"}
                                image={item.image}
                                alt={item.title} />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </a>
                </Grid>
            ))}
        </Grid>
    )
}

export default Tools