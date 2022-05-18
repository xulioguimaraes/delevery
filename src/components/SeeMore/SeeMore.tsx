import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io"
interface SeeMoreProps {
    handleSeeMore: boolean
}
import styles from "./styles.module.scss"

export const SeeMore = ({ handleSeeMore }: SeeMoreProps) => {
    const [open, setOpen] = useState(false);
    const daysWeek = [
        "Domingo das 08:00 até 23:59",
        "Segunda das 08:00 até 23:59",
        "Terça das 08:00 até 23:59",
        "Quarta das 08:00 até 23:59",
        "Quinta das 08:00 até 10:00",
        "Sexta das 08:00 até 18:00",
        "Sábado das 08:00 até 23:59"
    ]
    const today = new Date().getDay()


    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Collapse in={handleSeeMore} sx={{ width: "100%" }}>
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
            <Stack
                spacing={2}
                mt={2}
                pb={2}
                width="100%"
                borderBottom="1px solid white">
                <Box display="flex" gap={1}>
                    <strong>Endereço: </strong><span> Rua Maranhão, 242 - Vila Célia, Campo Grande</span>
                </Box>
                <Box display="flex" gap={1}>
                    <List
                        sx={{ width: '100%', padding: 0 }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
                            <ListItemText >
                                <strong>Horarios: </strong><span> {` ${daysWeek.filter((item, index) => index === today)}`}</span>
                            </ListItemText>
                            <ListItemIcon color=''>
                                {!open ? <IoIosArrowDown color='#FFF' /> : <IoIosArrowUp color='#FFF' />}
                            </ListItemIcon>
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ paddingLeft: "1rem", borderLeft: "1px solid white", display: "grid" }}>
                                    {daysWeek.map(item => {
                                        return <ListItemText key={item.slice(4)} primary={item} />
                                    })}
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
        </Collapse>

    )
}
