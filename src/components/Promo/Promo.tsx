import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Promo = () => {
    return (
        // <Typography
        //     position="absolute"
        //     bgcolor="greenyellow"
        //     fontWeight="bold"
        //     px={2}
        //     fontSize=".7rem"
        //     aria-controls="sroll"
        //     sx={{
        //         left: -18,
        //         zIndex: 555,
        //         top: "10px",
        //         transform: "rotate(-45deg)",
        //         boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        //     }}
        //     component="span"
        // >PROMO
        // </Typography>
        <>
            <Box
                position="absolute"
                fontWeight="bold"
                px={2}
                sx={{
                    left: -22,
                    zIndex: 555,
                    top: -5,
                }}
            >
                <img width="60px" src="https://zapdelivery.me/v2/app/assets/img/rp.png" />
            </Box>
        </>
    )
}
