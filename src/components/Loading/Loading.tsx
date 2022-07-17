import { Box, CircularProgress, Dialog, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Loading = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false)
    };
    useEffect(()=>{
        setTimeout(handleClose, 1000)
    },[])
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        transition: "all",
        transitionDuration:"1s",
        transitionTimingFunction:"ease-in"
    };
    return (
        <>
            {open && <Box
                position="fixed"
                bottom={0}
                left={0}
                right={0}
                bgcolor=" rgb(255, 255, 255)"
                top={0}
                zIndex={1300}
                sx={{
                    backdropFilter: 'blur(36px)',
                    transition: "all",
                    transitionDuration:"1s",
                    transitionTimingFunction:"ease-in"
                }}
            >
                <Box sx={style}>
                    <CircularProgress sx={{
                        color: "#000"
                    }} />
                </Box>
            </Box >}
        </>
    )
}
