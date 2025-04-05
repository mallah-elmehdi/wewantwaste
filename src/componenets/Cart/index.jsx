import { Drawer, Fade, Grow, IconButton, Stack, Typography, Box, Badge } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect } from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import Img from '../Img';
import { closeDrawer, openDrawer } from '../../features/drawer';

const Cart = () => {
    const dispatch = useDispatch()

    const { selectedSkips } = useSelector(state => state.selectedSkips)
    const { isDrawerOpen } = useSelector(state => state.drawer)

    const [skip, setSkip] = React.useState({});

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
        }
    }, [selectedSkips])

    return (
        <>
            <Box sx={{
                position: "fixed",
                bottom: 25,
                right: 25,
                zIndex: 11,
            }}>
                <Grow in={selectedSkips.length > 0 && !open} timeout={300}>
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
                <Stack spacing={3} sx={{ p: 3, width: 350 }}>
                    <Img src={backgroudImage} />
                    <Stack spacing={1} >
                        <Typography fontSize={20} lineHeight={1} fontWeight="bold" color='grey.900'>
                            Hire period
                        </Typography>
                        <Typography fontSize={20} lineHeight={1} fontWeight="bold" color='white'>
                            {hire_period_days} days
                        </Typography>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    )
}

export default Cart