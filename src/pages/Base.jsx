import { Box, Container, Stack } from "@mui/material"
import { useSelector } from 'react-redux'


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

