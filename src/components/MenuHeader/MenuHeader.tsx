import { Box, Button, Divider, Popover, Stack, Switch, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaMoon, FaShoppingCart } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { RiUser3Fill } from 'react-icons/ri'
import { useThemes } from '../../context/useTheme'
import { DialogSignin } from '../DialogSignin/DialogSignin'
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const MenuHeader = () => {
    const { toggleTheme } = useThemes()
    const theme = useTheme()
    const [handle, setHandle] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHandle(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setHandle(false)
        setAnchorEl(null);
    };
    const [openSignin, setOpenSignin] = useState(false);


    const handleClickOpen = () => {
        setOpenSignin(true);
    };

    const handleCloseSignIn = () => {
        setOpenSignin(false);

    };
    return (
        <Box
            display={["none", "none", "flex"]}
            justifyContent="flex-end"
            mt="-80px"
            mb="54px"
            p={2}>
            <Box
                component="section"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <FaMoon />
                <Switch onClick={toggleTheme} {...label} defaultChecked />
            </Box>
            <Button spellCheck={handle} onClick={handleClick} startIcon={<RiUser3Fill />} aria-describedby={id}>Perfil</Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box p={2} minWidth="200px" bgcolor="#333">
                    <Typography color="#fff" bgcolor="#111" paddingX={2} paddingY={1} borderRadius={3}>Visitante</Typography>
                    <Typography sx={{ p: 2 }}>Visitante</Typography>
                    <Divider />
                    <Stack>
                        <Button startIcon={<FaShoppingCart />}>Meus pedidos</Button>
                        <Button startIcon={<FaMapMarkerAlt />}>Meus endereços</Button>
                    </Stack>
                </Box>
            </Popover>
            <Button onClick={handleClickOpen} startIcon={<FiLogIn />}>Entrar</Button>
            <DialogSignin
                open={openSignin}
                onClose={handleCloseSignIn}
            />
        </Box>
    )
}
