import React, { useEffect, useState } from 'react'
import { getSkipsByLocation } from '../apis/skips'
import { useDispatch, useSelector } from 'react-redux'
import Base from './Base'
import { alpha, Avatar, Box, Chip, Container, Divider, Fade, Grid, Stack, Typography } from '@mui/material'
import { CardLoader, SkipCard } from '../componenets'
import { grey, lightGreen } from '@mui/material/colors'
import { FaDumpster } from 'react-icons/fa6'



// "created_at": "2025-04-03T13:51:46.897146",
// "updated_at": "2025-04-03T13:51:46.897146",
// "allowed_on_road": true,
// "allows_heavy_waste": true

// const SkipCard = ({ size, hire_period_days, price_before_vat, vat, transport_cost, per_tonne_cost }) => {
//     return (
//         <Fade in={true}>
//             <div>
//                 <StagedCard body={"adflijasd"} />
//             </div>
//         </Fade>
//     )
// }

// these images are tests for the UI view
const images = [
    'https://cdn.pixabay.com/photo/2013/04/05/20/20/dumpster-100909_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/03/20/13/13/dustbin-95181_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/28/14/30/garbage-can-1111448_1280.jpg'
]

const App = () => {
    const dispatch = useDispatch()
    const { skips, isLoading } = useSelector(state => state.skips)

    const getRandomImageIndex = () => {
        return Math.floor(Math.random() * 3);
    }


    useEffect(() => {
        dispatch(getSkipsByLocation({ postcode: "NR32", area: "Lowestoft" }))
    }, [])


    return (
        <Base>
            <Container sx={{
                py: 3,
            }}>
                <Grid container spacing={3}>
                    {
                        isLoading ?
                            Array.from(Array(9)).map((_, index) => (
                                <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                                    <CardLoader />
                                </Grid>
                            )) :
                            <>
                                {Array.isArray(skips) && skips.map((skip, index) => (
                                    <Grid key={skip.id} size={{ md: 3, sm: 6, xs: 12 }}>
                                        <Fade in={true}>
                                            <div>
                                                <SkipCard backgroudImage={images[getRandomImageIndex()]}  {...skip} >
                                                </SkipCard>
                                            </div>
                                        </Fade>
                                    </Grid>
                                ))}
                            </>
                    }
                </Grid>
            </Container>
        </Base >
    )
}

export default App