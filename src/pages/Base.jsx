import { Box } from "@mui/material"

const Base = ({ children }) => {

    return (
        <Box sx={{
            backgroundColor: "grey.A100",
            minHeight: "100vh",
            minWidth: "100vw",
        }}>
            {children}
        </Box>
    )
}

export default Base

