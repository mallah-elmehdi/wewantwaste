import { Drawer, Fade, Grow, IconButton, Stack, Typography, Box, Badge, Divider, Button, Chip } from '@mui/material';
import { blue, grey, yellow } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { CiShoppingCart, CiWarning } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import Img from '../Img';
import { closeDrawer, openDrawer } from '../../features/drawer';
import { BsDash, BsPlus } from 'react-icons/bs';
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';

const Cart = () => {
    const dispatch = useDispatch()

    const { selectedSkips } = useSelector(state => state.selectedSkips)
    const { isDrawerOpen } = useSelector(state => state.drawer)

    const [skip, setSkip] = React.useState({});
    const [weekCount, setWeekCount] = useState(1);
    const [error, setError] = useState(false);

    const { backgroudImage, size, hire_period_days, price_before_vat, vat, allowed_on_road } = skip

    const handleClose = () => {
        dispatch(closeDrawer())
    };
    const handleOpen = () => {
        dispatch(openDrawer())
    };

    useEffect(() => {
        if (selectedSkips.length > 0) {
            setSkip(selectedSkips[0])
            setWeekCount(1)
            setError(false)
        }
    }, [selectedSkips])

    // ------------------ the period control



    const handleWeekCountUp = () => {
        if (weekCount < (hire_period_days / 7)) {
            setWeekCount(weekCount + 1)
        } else {
            setError(true)
        }
    }

    const handleWeekCountDown = () => {
        if (weekCount > 1) {
            setWeekCount(weekCount - 1)
        }
        setError(false)
    }

    return (
        <>
            <Box sx={{
                position: "fixed",
                bottom: 25,
                right: 25,
                zIndex: 11,
            }}>
                <Grow in={selectedSkips.length > 0} timeout={300}>
                    <div>
                        <IconButton onClick={handleOpen}
                            sx={{
                                backgroundColor: (theme) => theme.palette.success.main,
                                width: 60,
                                height: 60,
                                color: "white",
                                fontSize: 40,
                                boxShadow: 10
                            }}
                            disableRipple
                            color='primary'
                        >
                            <Badge color='error' badgeContent={selectedSkips.length} >
                                <CiShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Grow>
            </Box>
            <Drawer anchor='right' open={isDrawerOpen} onClose={handleClose}>
                <Stack spacing={2} sx={{ p: 3, width: 350, height: "100%" }}>
                    <Box position="relative">
                        <Img src={backgroudImage} />
                        {allowed_on_road === false &&
                            <Chip
                                icon={<CiWarning />}
                                sx={{
                                    backgroundColor: yellow[600],
                                    color: grey[900],
                                    fontSize: 10,
                                    fontWeight: 'light',
                                    position: "absolute",
                                    bottom: "10px",
                                    left: "7px",
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
                    </Box>

                    <Chip
                        sx={{
                            background: `linear-gradient(193deg, ${blue[500]} 20%, ${blue[700]} 70%)`,
                            borderRadius: 2,
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
                    <Divider sx={{ borderColor: grey[100] }} />
                    <Stack spacing={1} >
                        <FormControl error={error}>
                            <FormLabel> Please choose the hiring period</FormLabel>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton
                                    disableRipple
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white'
                                    }}
                                    onClick={handleWeekCountUp}
                                >
                                    <BsPlus />
                                </IconButton>
                                <Input
                                    type='number'
                                    value={weekCount}
                                    sx={{
                                        flexGrow: 1
                                    }}
                                    endDecorator={
                                        <Typography component='span' fontSize={12} fontWeight="light" color={error ? "error" : grey[900]}>
                                            per week
                                        </Typography>
                                    }
                                />
                                <IconButton
                                    disableRipple
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white'
                                    }}
                                    onClick={handleWeekCountDown}
                                >
                                    <BsDash />
                                </IconButton>
                            </Stack>
                            {
                                error && <FormHelperText>
                                    This skip is only availabe for {hire_period_days / 7} weeks
                                </FormHelperText>
                            }
                        </FormControl >
                    </Stack >

                    <Divider sx={{ borderColor: grey[100] }} />
                    <Stack spacing={1} >
                        <Typography fontSize={15} lineHeight={1} fontWeight="lighter" color='grey.900'>
                            Price before VAT
                        </Typography>
                        <Typography fontSize={20} lineHeight={1} fontWeight={300} color='grey.900'>
                            £{price_before_vat * weekCount || "0.00"}{' '}
                        </Typography>
                    </Stack>
                    <Stack spacing={1} >
                        <Typography fontSize={15} lineHeight={1} fontWeight="lighter" color='grey.900'>
                            VAT ({vat || 0}%)
                        </Typography>
                        <Typography fontSize={20} lineHeight={1} fontWeight={300} color='grey.900'>
                            £{(price_before_vat * vat / 100).toFixed(2) * weekCount}
                        </Typography>
                    </Stack>
                    <Stack spacing={1} flexGrow={1}>
                        <Typography fontSize={15} lineHeight={1} fontWeight="lighter" color='grey.900'>
                            Total price
                        </Typography>
                        <Typography fontSize={25} lineHeight={1} fontWeight="bold" color='grey.900'>
                            £{(price_before_vat * (1 + vat / 100)).toFixed(2) * weekCount}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Button
                            size='medium'
                            sx={{
                                fontSize: 15,
                                fontWeight: 300,
                                textTransform: "capitalize",
                                borderRadius: 2,
                                flexGrow: 1
                            }}
                            disableRipple
                            disableElevation
                            variant='contained'
                            color='inherit'
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            size='medium'
                            sx={{
                                fontSize: 15,
                                fontWeight: 300,
                                textTransform: "capitalize",
                                borderRadius: 2,
                                flexGrow: 1
                            }}
                            disableRipple
                            disableElevation
                            variant='contained'
                            color='success'
                        >
                            Continue
                        </Button>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    )
}

export default Cart