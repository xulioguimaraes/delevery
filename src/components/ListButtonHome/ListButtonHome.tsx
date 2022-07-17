import { BsGridFill } from 'react-icons/bs'
import { FaBox, FaCarAlt, FaMotorcycle } from 'react-icons/fa'
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import styles from "./styles.module.scss"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
interface ListButtonHomeProps {
    infoButtons: string[]
    slug: string
}
interface OptionsButtonsTypes {
    link: string
    label: string
    icon: JSX.Element
}
export const ListButtonHome = ({ infoButtons, slug }: ListButtonHomeProps) => {

    const [optionsButtons, setOptionsButtons] = useState<OptionsButtonsTypes[]>([])
    const theme = useTheme()

    useEffect(() => {
        const buttons = [
            { link: "balcony", label: "Retirar no local", icon: <FaBox color='' /> },
            { link: "delivery", label: "Delivery", icon: <FaMotorcycle /> },
            { link: "drivethru", label: "Drive Thru", icon: <FaCarAlt /> },
            { link: "table", label: "Estou na mesa", icon: <BsGridFill /> },
        ]
        const aux = buttons.filter(item => {
            const a = infoButtons.filter(ev => ev === item.link)
            if (a.length > 0) {
                return item
            }
        })
        setOptionsButtons(aux)
    }, [infoButtons])
    return (
        <Box
            display="flex"
            justifyContent="center"
            height="52vh"
        >
            <Container sx={{
                width: "100%",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: theme.palette.background.paper
            }}>
                <Box display="block" sx={{ maxWidth: "430px", width: "100%" }} >
                    {optionsButtons.map(item => {
                        return <Link href={`/${slug}/${item.link}`} key={item.link}>
                            <Button
                                fullWidth
                                size='large'
                                sx={{
                                    borderColor: "GrayText",
                                    justifyContent: "flex-start",
                                    mb: 2,
                                    py: 1.3
                                }}
                                startIcon={item.icon}
                                variant="outlined">
                                <Typography
                                    textTransform="capitalize"
                                    component="span"
                                    color="text.primary" >
                                    {item.label}
                                </Typography>
                            </Button>
                        </Link>
                    })}
                </Box>
            </Container>

        </Box>
    )
}
