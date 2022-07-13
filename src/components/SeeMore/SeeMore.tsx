import { Button, Collapse, Container, Icon, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp, IoIosRedo } from "react-icons/io"
import { AppTypes, } from "../../interfaces/dataInterfaces"
interface SeeMoreProps {
    handleSeeMore: boolean
    infoPage: AppTypes
}
import styles from "./styles.module.scss"

export const SeeMore = ({ handleSeeMore, infoPage }: SeeMoreProps) => {
    const { config, info } = infoPage
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const daysWeeks = [
        { day: "Domingo das ", time: "" },
        { day: "Segunda das ", time: "" },
        { day: "Terça das ", time: "" },
        { day: "Quarta das ", time: "" },
        { day: "Quinta das", time: "" },
        { day: "Sexta das ", time: "" },
        { day: "Sábado das ", time: "" },
    ]
    const today = new Date().getDay()
    const [daysWeek, setDaysWeek] = useState<string[]>([])

    useEffect(() => {
        const days = config.opening.map(item => {
            const aux = daysWeeks.filter((itemDays, index) => {
                if (index === item.weekday) {
                    return itemDays
                }
            })
            const text = `${aux[0].day} ${item.start} as ${item.end}`
            return text
        })
        setDaysWeek(days)

    }, [config])


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
                <Button
                    sx={{
                        textTransform: "initial",
                        display: ["flex", "inline-flex"],
                        flexDirection: ["column", "inherit"],

                    }}
                >
                    <Icon sx={{
                        display: "flex",
                        overflow: "initial",
                        m: "3px"
                    }}>
                        <FaMapMarkerAlt />
                    </Icon>
                    Rotas</Button>
                <Button
                    sx={{
                        textTransform: "initial",
                        display: ["flex", "inline-flex"],
                        flexDirection: ["column", "row"],
                        justifyContent: "center"
                    }}

                >

                    <Icon sx={{
                        overflow: "initial",
                        display: "flex",
                        m: "3px"
                    }}>
                        <IoIosRedo />
                    </Icon>
                    Compartilhar</Button>
                <Button
                    sx={{
                        textTransform: "initial",
                        display: ["flex", "inline-flex"],
                        flexDirection: ["column", "row"],
                        justifyContent: "center"
                    }}
                >
                    <Icon sx={{
                        overflow: "initial",
                        display: "flex",
                        m: "3px"
                    }}>
                        <FaPhoneAlt />
                    </Icon>
                    Ligar</Button>
                <Button
                    sx={{
                        textTransform: "initial",
                        display: ["flex", "inline-flex"],
                        flexDirection: ["column", "row"],
                        justifyContent: "center"
                    }}
                >
                    <Icon sx={{
                        display: "flex",
                        overflow: "initial",
                        m: "3px"
                    }}>
                        <FaWhatsapp />
                    </Icon>
                    WhatsApp</Button>
            </Stack>
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Stack
                    spacing={2}
                    mt={2}
                    pb={2}

                    borderBottom="1px solid white">
                    <Box display="flex" gap={1}
                    >
                        <strong>Endereço: </strong><span> {info.formatted} </span>
                    </Box>
                    <Box display="flex" gap={1}>
                        <List
                            sx={{ width: '100%', padding: 0 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton
                                onClick={handleClick}
                                sx={{ padding: 0, display: "flex" }}>
                                <>
                                    <Typography
                                        fontWeight="700"
                                        component="strong"
                                        pr={1}
                                    > Horarios: </Typography>
                                    <span> {` ${daysWeek.filter((item, index) => index === today)}`}</span>
                                    <Icon>
                                        {!open ?
                                            <IoIosArrowDown
                                                color={theme.palette.primary.main}
                                            /> :
                                            <IoIosArrowUp
                                                color={theme.palette.primary.main}
                                            />}
                                    </Icon>
                                </>

                            </ListItemButton>
                            <Collapse
                                in={open}
                                timeout="auto"
                                unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton
                                        sx={{
                                            paddingLeft: "1rem",
                                            borderLeft: "1px solid white",
                                            display: "grid"
                                        }}>
                                        {daysWeek.map(item => {
                                            return <ListItemText key={item.slice(4)} primary={item} />
                                        })}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                    {!info.show_whatsapp && <Box display="flex" gap={1}>
                        <strong>WhatsApp: </strong><span> {info.whatsapp}</span>
                    </Box>}
                    {!info.show_phone && <Box display="flex" gap={1}>
                        <strong>Telefone: </strong><span>{info.phone}</span>
                    </Box>}


                </Stack>
            </Container>

        </Collapse>

    )
}
