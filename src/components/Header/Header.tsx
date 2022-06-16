import { Box, Button, Collapse, Container, Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Popover, Stack, Switch, TextField, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import { FiLogIn } from "react-icons/fi";
import { FaMoon, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaBox, FaMotorcycle, FaCarAlt, FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io";
import { BiChevronsLeft } from "react-icons/bi";
import { SeeMore } from '../SeeMore/SeeMore';
import { DialogSignin } from "../DialogSignin/DialogSignin"
import { AppTypes } from '../../interfaces/dataInterfaces';
import { useThemes } from '../../context/useTheme';
import { MenuHeader } from '../MenuHeader/MenuHeader';
interface HeaderProps {
  infoPage: AppTypes
}
export const Header = ({ infoPage }: HeaderProps) => {
  const [handleSeeMore, setHandleSeeMore] = useState(false)
  const theme = useTheme()
  return (
    <Box
      display="flex"
      justifyContent="center">
      <Container sx={{
        bgcolor: theme.palette.background.paper,
        pl: "0px !important",
        pr: "0px !important"
      }}>
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

        </div>
        <MenuHeader />
        <Box
          display="grid"
          justifyContent="center"
          alignItems="center">
          <Typography
            fontWeight="bold"
            textAlign="center"
            color="text.primary"
            fontSize="2.2rem"
            component="h1">
            {infoPage.name}
          </Typography>
          <Typography
            color="text.primary"
            component="p" >
            {infoPage.description}
          </Typography>

          <Stack alignItems="center">
            <Button endIcon={!handleSeeMore ? <IoIosArrowDown /> : <IoIosArrowUp />} onClick={() => setHandleSeeMore(!handleSeeMore)}>Ver mais</Button>
            <SeeMore handleSeeMore={handleSeeMore} infoPage={infoPage} />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
