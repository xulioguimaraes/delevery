import { Box, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Switch, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./styles.module.scss"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { FiLogIn } from "react-icons/fi";
import { FaMoon, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io";


export const Header = () => {
  const [handleSeeMore, setHandleSeeMore] = useState(false)
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className={styles.headerContainer}>
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
          {
            handleSeeMore && <>
              <Stack
                direction="row"
                width="100%"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                className={styles.divButtonSeeMore}>
                <Button startIcon={<FaMapMarkerAlt />}>Rotas</Button>
                <Button startIcon={<IoIosRedo />}>Compartilhar</Button>
                <Button startIcon={<FaPhoneAlt />}>Ligar</Button>
                <Button startIcon={<FaWhatsapp />}>WhatsApp</Button>
              </Stack>
              <Stack spacing={2} mt={2}>
                <Box display="flex" gap={1}>
                  <strong>Endereço: </strong><span> Rua Maranhão, 242 - Vila Célia, Campo Grande</span>
                </Box>
                {/* <strong><p></p></strong> */}
                <Box display="flex" gap={1}>
                  <List
                    sx={{ width: '100%' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                   
                  >
                  
                   
                    <ListItemButton onClick={handleClick}  sx={{ padding: 0}}>
                      
                      <ListItemText primary="Horarios" />
                     
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ padding: 0}}>
                          <ListItemIcon>
                            
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Box>
                <Box display="flex" gap={1}>
                  <strong>Telefone: </strong><span>(67) 984746428</span>
                </Box>
                <Box display="flex" gap={1}>
                  <strong>WhatsApp: </strong><span> (67) 98541654</span>
                </Box>
              </Stack>
            </>
          }
        </Stack>
      </div>
    </header>
  )
}
