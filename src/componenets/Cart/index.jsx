import { Drawer, Fade, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';

const Cart = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Fade in={true}>
            <div>
                <IconButton onClick={toggleDrawer(true)}
                    sx={{
                        position: "fixed",
                        bottom: 10,
                        right: 10,
                        backgroundColor: blue[700],
                        width: 50,
                        height: 50,
                        color: "white",
                        zIndex: 11
                    }}
                    disableRipple
                    color='primary'
                >

                    <CiShoppingCart />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                </Drawer>
            </div>
        </Fade>
    )
}

export default Cart