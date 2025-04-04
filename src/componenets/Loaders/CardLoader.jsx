import { Fade, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Skeleton } from '.';

const CardLoader = () => {
    const { isLoading } = useSelector((store) => store.loader);

    return (
        <Fade in={isLoading} {...{ timeout: 300 }}>
            <Stack spacing={2}>
                <Skeleton animation="wave" variant="rectangular" height={250} />
                <Skeleton animation="wave" variant="circular" height={60} width={60} />
            </Stack>
        </Fade>
    );
};

export default CardLoader;

