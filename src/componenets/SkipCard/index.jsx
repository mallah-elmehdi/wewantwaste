import { alpha, Avatar, Box, Card, Chip, ClickAwayListener, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { grey, lightGreen, yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { CiCircleQuestion, CiWarning } from 'react-icons/ci';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(0),
    boxShadow: 'none',
    borderRadius: 8,
}));

const PriceBreakDown = ({ vat, price_before_vat }) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose} >
            <div>
                <Tooltip
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                        <Stack spacing={1}>
                            <Typography variant="body2">Price breakdown:</Typography>
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="body2">Before VAT:</Typography>
                                <Typography variant="body2">£{price_before_vat || "0.00"}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="body2">VAT ({vat || 0}%):</Typography>
                                <Typography variant="body2">£{(price_before_vat * vat / 100).toFixed(2)}</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="body2" fontWeight="bold">Total:</Typography>
                                <Typography variant="body2" fontWeight="bold">£{(price_before_vat * (1 + vat / 100)).toFixed(2)}</Typography>
                            </Stack>
                        </Stack>
                    }
                    slotProps={{
                        popper: {
                            disablePortal: true,
                        },
                    }}
                >
                    <Avatar
                        onClick={handleTooltipOpen}
                        variant="square"
                        sx={(theme) => ({
                            p: 0,
                            width: 17,
                            height: 17,
                            backgroundColor: 'transparent',
                            color: 'grey.900',
                            cursor: 'pointer',
                        })}
                    >
                        <CiCircleQuestion />
                    </Avatar>
                </Tooltip>
            </div>
        </ClickAwayListener>
    )
}

const SkipCard = ({ header, backgroudImage, size, hire_period_days, price_before_vat, vat, allowed_on_road }) => {
    return (
        <StyledCard>
            <Box position="relative">
                <Chip
                    sx={{
                        background: `linear-gradient(193deg, ${lightGreen[500]} 20%, ${lightGreen[700]} 70%)`,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 8,
                        position: "absolute",
                        top: 0,
                        left: 0
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
                {/* <Divider sx={{ border: "1px solid", borderColor: "grey.A100" }} /> */}
                <Box sx={{ padding: 2 }}>
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={0.25} alignItems="center">
                            <PriceBreakDown price_before_vat={price_before_vat} vat={vat} />
                            <Typography fontSize={12} lineHeight={1} fontWeight="lighter" color='grey.900'>
                                Total price
                            </Typography>
                        </Stack>
                        <Typography fontSize={28} lineHeight={1} fontWeight="bold" color={lightGreen[700]}>
                            £{(parseFloat(price_before_vat || 0) + parseFloat(price_before_vat || 0) * (parseFloat(vat || 100) / 100)).toFixed(2)}{' '}
                            <Typography component='span' fontSize={12} fontWeight="light" color={grey[900]}>
                                per week
                            </Typography>
                        </Typography>
                    </Stack>
                    {allowed_on_road === false &&
                        <Chip
                            icon={<CiWarning />}
                            sx={{
                                mt: 0.75,
                                backgroundColor: alpha(yellow[700], 0.5),
                                color: grey[900],
                                fontSize: 10,
                                fontWeight: 'light',
                                py: 0,
                                '.MuiChip-icon': {
                                    color: grey[900],
                                    fontSize: 12,
                                },
                                px: 1
                            }}
                            size='small'
                            label="Private Property Only"
                        />
                    }
                </Box>
            </Box>
        </StyledCard>
    )
}

export default SkipCard