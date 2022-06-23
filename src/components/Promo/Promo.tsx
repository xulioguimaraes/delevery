import { Typography } from '@mui/material'
import React from 'react'

export const Promo = () => {
    return (
        <Typography
            position="absolute"
            bgcolor="greenyellow"
            fontWeight="bold"
            px={2}
            fontSize=".7rem"
            aria-controls="sroll"
            sx={{
                left: -18,
                zIndex: 555,
                top: "10px",
                transform: "rotate(-45deg)"
            }}
            component="span"
        >PROMO
        </Typography>
    )
}
