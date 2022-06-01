import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { ItensCatalogTypes } from "../../interfaces/dataInterfaces"
interface DialogItensProps {
    modalItens: boolean
    handleClose: () => void
    itemModalHandle: ItensCatalogTypes | undefined
}

export const DialogItens = ({ modalItens, handleClose, itemModalHandle }: DialogItensProps) => {
    console.log(itemModalHandle);
    
    const [itens, setItens] = useState()
    return (
        <Dialog
            open={modalItens}
            onClose={handleClose}
            sx={{ minWidth: "380px" }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <Box
                    display='flex'
                    justifyContent="center">
                    <CardMedia
                        component="img"
                        height="140"
                        sx={{ minWidth: "380px" }}
                        image={itemModalHandle?.image}
                        alt={itemModalHandle?.name}
                    />
                </Box>
            </DialogContent>
            <DialogTitle id="alert-dialog-title">
                {itemModalHandle?.name}
                <DialogContentText id="alert-dialog-description">
                    {itemModalHandle?.description}
                </DialogContentText>
            </DialogTitle>
            {itemModalHandle?.attributes.map(item => {
                return <DialogContent key={item.id}>
                    <Divider />
                    <Typography
                        pt={2}
                        component="h1">
                        {item.name}
                    </Typography>
                    <Typography component="p">
                        Selecione de {item.qty[0]} a {item.qty[1]}
                    </Typography>


                    <DialogContentText id="alert-dialog-description">
                        {item.itens.map(ev => {
                            return <Stack direction="row" justifyContent="space-between" key={ev.id}>
                                <Typography component="span">
                                    {ev.name}
                                </Typography>
                                <Box >
                                    <Button
                                        sx={{ minWidth: "15px", p: "9px" }}
                                        variant="contained"
                                        color="error"
                                        size="large">
                                        <IoMdRemove />
                                    </Button>
                                    <Typography
                                        component="span"
                                        px={2}>
                                        0
                                    </Typography>
                                    <Button
                                        sx={{ minWidth: "15px", p: "9px" }}
                                        variant="contained"
                                        color="success"
                                        size="large" >
                                        <IoMdAdd />
                                    </Button>
                                </Box>
                            </Stack>
                        })}
                    </DialogContentText>
                </DialogContent>

            })}
            <DialogContent>
                <Divider sx={{ mb: 2 }} />
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Observação"
                    multiline
                    rows={2}
                />
                <DialogActions>
                    <Box
                        pr={2}>
                        <Button
                            sx={{ minWidth: "15px", p: "9px" }}
                            variant="contained"
                            size="large">
                            <IoMdRemove />
                        </Button>
                        <Typography
                            component="span"
                            px={2}>
                            0
                        </Typography>
                        <Button
                            sx={{ minWidth: "15px", p: "9px" }}
                            variant="contained"
                            size="large" >
                            <IoMdAdd />
                        </Button>
                    </Box>
                    <Button startIcon={<IoMdAdd />} variant="contained" onClick={handleClose} autoFocus>
                        Adicionar R$ 20,00
                    </Button>
                </DialogActions>
            </DialogContent>
           
        </Dialog>
    )
}
