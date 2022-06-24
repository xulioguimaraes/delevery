import { Box, Button, CardMedia, Collapse, Container, Divider, ImageListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Popover, Stack, styled, Switch, TextField, Typography, useTheme } from '@mui/material'
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
const CoverPage = styled('img')(({ theme }) => ({
  position: 'relative',
  width: "100%",
  bottom: "50%"
}));
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
        <Box
          height="145px"
          overflow="hidden">
            <CoverPage sx={{bottom:["0", "50%"]}}  src={infoPage.media.cover}/>
        </Box>

        <div className={styles.divImgButton}>
          <Link href='/'>
            <button>
              <img src={infoPage.media.logo} alt="Logo" />
            </button>
          </Link>
        </div>
        <MenuHeader />
        <Box
        mt={0}>
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
            component="p"
            textAlign="center">
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
