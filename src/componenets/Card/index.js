import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'paddingSize', // Prevents paddingSize from being forwarded to the DOM
})(({ theme, paddingSize }) => ({
	padding: theme.spacing(paddingSize ?? 2.5), // Use default value if paddingSize is not provided
	boxShadow: 'none',
	borderRadius: theme.borderRadius.xl,
	width: '100%',
	height: '100%',
}));

export default StyledCard;
