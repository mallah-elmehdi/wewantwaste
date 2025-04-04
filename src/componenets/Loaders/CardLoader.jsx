import { Fade, Stack } from '@mui/material';
import { Skeleton } from '../../componenets';

const CardLoader = () => {
    return (
        <Fade in={true} {...{ timeout: 300 }}>
            <Stack spacing={2}>
                <Skeleton animation="wave" width="100%" variant="rectangular" height={300} />
            </Stack>
        </Fade>
    );
};

export default CardLoader;

