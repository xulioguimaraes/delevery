import { Box, Button, Divider, Drawer, IconButton, Popover, Stack, Switch, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { RiUser3Fill } from 'react-icons/ri'
import { useThemes } from '../../context/useTheme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DialogSignin } from '../DialogSignin/DialogSignin'
import { IoMenu } from 'react-icons/io5'
import { TextVisitante } from './components/TextVisitante'
import { ButtonsMenu } from './components/ButtonsMenu'
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const MenuHeader = () => {
    const { toggleTheme } = useThemes()
    const themes = useThemes()
    const theme = useTheme()
    const [handle, setHandle] = useState(false)
    const [drawer, setDrawer] = useState(false)
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
    const toggleDrawerClose = () => {
        setDrawer(false)
    }
    const toggleDrawerOpen = () => {
        setDrawer(true)
    }
    return (
        <>
            <Box
                justifyContent="space-between"
                mt="-80px"
                mb="54px"
                display={["flex", "none", "none"]}>
                <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => themes.toggleTheme()}>
                    {themes.themeName === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    <Switch
                        {...label}
                        defaultChecked

                        size="small" />
                </IconButton>
                <IconButton
                    onClick={toggleDrawerOpen}
                    sx={{ mr: 1 }}
                    color="primary">
                    <IoMenu />
                </IconButton>
            </Box>
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
                    {themes.themeName === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
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
                        <TextVisitante />
                        <Divider />
                        <ButtonsMenu color='primary' />
                    </Box>
                </Popover>
                <Button onClick={handleClickOpen} startIcon={<FiLogIn />}>Entrar</Button>
                <DialogSignin
                    open={openSignin}
                    onClose={handleCloseSignIn}
                />
            </Box>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={toggleDrawerClose}
            >
                <Box
                    p={2}
                    height="100%"
                    bgcolor={theme.palette.primary.main}>
                    <Typography bgcolor={theme.palette.info.main} paddingX={2} paddingY={1} borderRadius={3}>Visitante</Typography>
                    <TextVisitante />
                    <Divider />
                    <Box py={1}>
                        <ButtonsMenu color='info' />
                    </Box>
                    <Divider />
                    <Button
                        color='info'
                        onClick={handleClickOpen}
                        sx={{
                            my: 1
                        }}
                        startIcon={<FiLogIn />}>Entrar</Button>
                </Box>
            </Drawer>
        </>
    )
}
