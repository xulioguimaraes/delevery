import { Box, Button, Container, TextField } from '@mui/material'
import React from 'react'
import { BsFillMicFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export const NavSearch = () => {
    return (
        <Container
            component="aside"
            maxWidth="lg"
            sx={{
                bgcolor: "#FFF",
                position: "fixed",
                py: "10px",
                left: 0,
                right: 0,
                bottom: 0
            }}        >
            <Box
                display="flex"
            >
                <Button
                    startIcon={<FaShoppingCart />}>
                </Button>
                <TextField
                    variant="outlined"
                    color="warning"
                    fullWidth
                    label="Pesquisar Item"
                />
                <Button startIcon={<BsFillMicFill />} />
            </Box>

        </Container>
    )
}
