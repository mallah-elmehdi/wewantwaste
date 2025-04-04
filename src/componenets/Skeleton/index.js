import { Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSkeleton = styled(Skeleton)(({ theme, variant }) => ({
    borderRadius:
        variant === 'circular' ? theme.borderRadius.full : variant === 'rectangular' ? theme.borderRadius.lg : theme.borderRadius.sm,
}));

export default StyledSkeleton;
