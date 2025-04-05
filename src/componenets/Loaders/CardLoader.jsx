import { Fade, Stack } from '@mui/material';
import { Skeleton } from '../../componenets';

const CardLoader = () => {
    return (
        <Fade in={true} {...{ timeout: 300 }}>
            <Stack spacing={3}>
                <Skeleton animation="wave" width="100%" variant="rectangular" height={120} />
                <Stack >
                    <Skeleton animation="wave" width="50%" variant="text" height={20} />
                    <Skeleton animation="wave" width="50%" variant="text" height={25} />
                </Stack>
                <Skeleton animation="wave" width="100%" variant="rectangular" height={40} />
            </Stack>
        </Fade>
    );
};

export default CardLoader;

