import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(0),
    boxShadow: 'none',
    borderRadius: 8,
}));


export default StyledCard