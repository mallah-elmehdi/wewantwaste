import { alpha, Box, Chip, Stack, Typography, Button } from '@mui/material';
import { grey, blue, yellow } from '@mui/material/colors';
import { CiWarning } from 'react-icons/ci';
import { Card } from '..';
import PriceBreakDown from './PriceBreakDown';


const SkipCard = ({ backgroudImage, size, hire_period_days, price_before_vat, vat, allowed_on_road }) => {
    return (
        <Card>
            <Box position="relative">
                <Chip
                    sx={{
                        background: `linear-gradient(193deg, ${blue[500]} 20%, ${blue[700]} 70%)`,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 8,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10
                    }}
                    label={
                        <Typography fontSize={20} lineHeight={1} fontWeight="bold" color="white">
                            {size}{' '}
                            <Typography component='span' fontSize={12} fontWeight="light" color="white">
                                Yards Skip
                            </Typography>
                        </Typography>
                    }
                />
                <Box position="relative">
                    {allowed_on_road === false &&
                        <Chip
                            icon={<CiWarning />}
                            sx={{
                                backgroundColor: yellow[600],
                                color: grey[900],
                                fontSize: 10,
                                fontWeight: 'light',
                                position: "absolute",
                                bottom: 5,
                                left: 5,
                                py: 0,
                                '.MuiChip-icon': {
                                    color: grey[900],
                                    fontSize: 12,
                                },
                                px: 1,
                            }}
                            size='small'
                            label="Private Property Only"
                        />
                    }
                    <Box sx={{
                        backgroundImage: `url(${backgroudImage})`,
                        backgroundSize: "cover",
                    }}>

                        <Box sx={{
                            padding: 2,
                            backgroundColor: alpha("#000", 0.35),
                            minHeight: { md: 100, sm: 80, xs: 120 },
                        }}>
                            <Stack spacing={1} alignItems="flex-end" >
                                <Typography fontSize={12} lineHeight={1} fontWeight="bold" color='white'>
                                    Hire period
                                </Typography>
                                <Typography fontSize={20} lineHeight={1} fontWeight="bold" color='white'>
                                    {hire_period_days} days
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Stack sx={{ padding: 2 }}>
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={0.25} alignItems="center">
                            <PriceBreakDown price_before_vat={price_before_vat} vat={vat} />
                            <Typography fontSize={12} lineHeight={1} fontWeight="lighter" color='grey.900'>
                                Total price
                            </Typography>
                        </Stack>
                        <Typography fontSize={25} lineHeight={1} fontWeight={500} color={grey[900]}>
                            £{(parseFloat(price_before_vat || 0) + parseFloat(price_before_vat || 0) * (parseFloat(vat || 100) / 100)).toFixed(2)}{' '}
                            <Typography component='span' fontSize={12} fontWeight="light" color={grey[900]}>
                                per week
                            </Typography>
                        </Typography>
                    </Stack>
                    <Button
                        size='large'
                        sx={{
                            mt: 2,
                            fontSize: 15,
                            fontWeight: 300,
                            textTransform: "capitalize",
                            borderRadius: 2,
                        }}
                        disableRipple
                        disableElevation
                        variant='outlined'
                    >
                        Select
                    </Button>
                </Stack>
            </Box>
        </Card>
    )
}

export default SkipCard