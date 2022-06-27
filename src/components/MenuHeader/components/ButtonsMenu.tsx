import { Button, Stack } from '@mui/material'
import React from 'react'
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa'
interface ButtonsMenuProps {
    color?: "inherit" | "info" | "primary" | "secondary" | "success" | "error" | "warning" | undefined
}
export const ButtonsMenu = ({ color }: ButtonsMenuProps) => {
    return (
        <Stack
        
        spacing={.2}
        >
            <Button
                sx={{
                    textTransform: "initial",
                    display:"flex",
                    justifyContent:"flex-start"
                }}
                color={color}
                startIcon={<FaShoppingCart />}
            >Meus pedidos</Button>
            <Button
                color={color}
                sx={{
                    textTransform: "initial",
                    display:"flex",
                    justifyContent:"flex-start"
                }}
                startIcon={<FaMapMarkerAlt />}
                >Meus endereços</Button>
        </Stack>
    )
}
