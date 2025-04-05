import { Container, Fade, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSkipsByLocation } from '../apis/skips'
import { CardLoader, Cart, SkipCard } from '../componenets'
import Base from './Base'

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
                <Cart />
                <Grid container spacing={3}>
                    {
                        isLoading ?
                            Array.from(Array(9)).map((_, index) => (
                                <Grid size={{ md: 4, sm: 6, xs: 12 }}>
                                    <CardLoader />
                                </Grid>
                            )) :
                            <>
                                {Array.isArray(skips) && skips.map((skip, index) => (
                                    <Grid key={skip.id} size={{ md: 4, sm: 6, xs: 12 }}>
                                        <Fade in={true}>
                                            <div>
                                                <SkipCard backgroudImage={images[getRandomImageIndex()]}  {...skip} />
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