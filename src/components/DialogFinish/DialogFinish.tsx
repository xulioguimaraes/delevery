import { Box, Button, Container, Dialog, DialogActions, DialogContent,  DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Icon, Radio, RadioGroup, Slide, Stack, TextField, Typography, useRadioGroup } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import { FaCreditCard, FaUserAlt } from 'react-icons/fa';
import { PaymentsConfigAppTypes } from '../../interfaces/dataInterfaces';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});
interface DialogFinishProps {
    open: boolean
    payments:PaymentsConfigAppTypes
    handleClose: () => void
}
const DialogFinish = ({ open, handleClose , payments}: DialogFinishProps) => {

    
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Container sx={{
                    py: 2,
                    px:[.4, 2]
                }}>

                    <DialogTitle display="flex" gap={1}>
                        <Icon color='primary'>
                            <FaUserAlt />
                        </Icon>
                        {"Confirmar"}
                    </DialogTitle>
                    <Divider light />
                    <DialogContent
                    sx={{
                        px:[1.5, 3]
                    }}>
                        <Box>
                            <TextField
                                sx={{
                                    mb: 2
                                }}
                                fullWidth
                                id="outlined-basic"
                                label="Seu nome"
                                variant="outlined" />
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Seu Telefone"
                                variant="outlined" />
                        </Box>
                    </DialogContent>
                    <Divider light />
                    <DialogTitle display="flex" gap={1}>
                        <Icon color='primary'>
                            <FaCreditCard />
                        </Icon>
                        {"Forma de pagamento"}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="cartao"
                                    control={<Radio />}
                                    label="Maquina de cartão" />
                                <FormControlLabel
                                    value="mercadoPago"
                                    control={<Radio />}
                                    label="Pagar online via Mercado Pago" />
                                <FormControlLabel
                                    value="dinheiro"
                                    control={<Radio />}
                                    label="Dinheiro" />
                                    
                                <FormControlLabel
                                    value="pix"
                                    control={<Radio />}
                                    label="Pix" />
                            </RadioGroup>
                        </FormControl>
                        <Divider light />

                        <Box
                            my={2}
                            display="flex"
                            justifyContent="space-between">
                            <Typography component='span'>Total</Typography>
                            <Typography fontWeight="bold" component='strong'>R$ 40,00</Typography>
                        </Box>
                        <Divider light />

                    </DialogContent>
                    <DialogActions>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={handleClose}
                            color="secondary">Enviar Pedido</Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </div>
    )
}

export default DialogFinish