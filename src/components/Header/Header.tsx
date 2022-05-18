import { Box, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Switch, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./styles.module.scss"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { FiLogIn } from "react-icons/fi";
import { FaMoon, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaBox, FaMotorcycle, FaCarAlt } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io";
import { BiChevronsLeft } from "react-icons/bi";
import { SeeMore } from '../SeeMore/SeeMore';

export const Header = () => {
  const [handleSeeMore, setHandleSeeMore] = useState(false)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.divBackground}>

          <img src="https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/9S4HfwJ6Oi_820x312.png" alt="" />
        </div>
        <div className={styles.divImgButton}>
          <Link href='/teste'>
            <button>
              <img src="https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wT1HnpbT9u_640x640.jpeg" alt="" />
            </button>
          </Link>
        </div>
        <div className={styles.divButtonsHeader}>
          <section>
            <FaMoon />
            <Switch {...label} defaultChecked />
          </section>
          <Button startIcon={<RiUser3Fill />}>Perfil</Button>
          <Button startIcon={<FiLogIn />}>Entrar</Button>
        </div>
        <div className={styles.divTextPage}>
          <h1>
            Kawaii Sushi
          </h1>
          <p>
            Sushi delicioso e divertido. O mais fofo sushi de Campo Grande MS.. Não da pra comer triste!
          </p>
          <Stack alignItems="center">
            <Button endIcon={handleSeeMore ? <IoIosArrowDown /> : <IoIosArrowUp />} onClick={() => setHandleSeeMore(!handleSeeMore)}>Ver mais</Button>

            <SeeMore handleSeeMore={handleSeeMore} />


          </Stack>
        </div>
      </div>
    </header>
  )
}
