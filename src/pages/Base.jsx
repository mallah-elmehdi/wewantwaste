import { Box, Container, Stack } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getSkipsByLocation } from "./apis/skips"


const Base = ({ children }) => {
    const { isLoading } = useSelector(state => state.loader)

    return (
        <Box >
            <Container>
                <Stack>
                    {isLoading ? "...loading" : children}
                </Stack>
            </Container>
        </Box>
    )
}

export default Base

