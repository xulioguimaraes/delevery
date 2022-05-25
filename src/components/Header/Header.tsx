import { Box, Button, Collapse, Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Popover, Stack, Switch, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./styles.module.scss"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { FiLogIn } from "react-icons/fi";
import { FaMoon, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaBox, FaMotorcycle, FaCarAlt, FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io";
import { BiChevronsLeft } from "react-icons/bi";
import { SeeMore } from '../SeeMore/SeeMore';
import { DialogSignin } from "../DialogSignin/DialogSignin"
import { AppTypes } from '../../interfaces/dataInterfaces';
interface HeaderProps {
  infoPage: AppTypes
}
export const Header = ({infoPage}: HeaderProps) => {
  const [handleSeeMore, setHandleSeeMore] = useState(false)
  const [handle, setHandle] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHandle(true)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setHandle(false)
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [openSignin, setOpenSignin] = useState(false);


  const handleClickOpen = () => {
    setOpenSignin(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignin(false);

  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.divBackground}>

          <img src={infoPage.media.cover} alt="Capa da pagina" />
        </div>
        <div className={styles.divImgButton}>
          <Link href='/'>
            <button>
              <img src={infoPage.media.logo} alt="Logo" />
            </button>
          </Link>
        </div>
        <div className={styles.divButtonsHeader}>
          <section>
            <FaMoon />
            <Switch {...label} defaultChecked />
          </section>
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
        </div>
        <div className={styles.divTextPage}>
          <h1>
           {infoPage.name}
          </h1>
          <p>
           {infoPage.description}
          </p>
          <Stack alignItems="center">
            <Button endIcon={handleSeeMore ? <IoIosArrowDown /> : <IoIosArrowUp />} onClick={() => setHandleSeeMore(!handleSeeMore)}>Ver mais</Button>

            <SeeMore handleSeeMore={handleSeeMore} infoPage={infoPage}/>


          </Stack>
        </div>
      </div>
    </header>
  )
}
