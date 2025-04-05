import { Avatar, ClickAwayListener, Divider, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';

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

export default PriceBreakDown