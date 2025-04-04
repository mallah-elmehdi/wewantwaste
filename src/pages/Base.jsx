import { Box, Container, Stack } from "@mui/material"
import { useSelector } from 'react-redux'


const Base = ({ children }) => {
    const { isLoading } = useSelector(state => state.loader)

    return (
        <Box sx={{
            backgroundColor: "grey.100",
            minHeight: "100vh",
            minWidth: "100vw"
        }}>
            {isLoading ? "...loading" : children}
        </Box>
    )
}

export default Base

