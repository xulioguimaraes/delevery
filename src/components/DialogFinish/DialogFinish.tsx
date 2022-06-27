import { Box, Button, Collapse, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Icon, Input, Radio, RadioGroup, Slide, Stack, styled, TextField, Typography, useRadioGroup, useTheme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useState } from 'react';

import { FaCheck, FaCreditCard, FaUserAlt } from 'react-icons/fa';
import { FcOk } from "react-icons/fc";
import { IoCopyOutline, IoClose } from "react-icons/io5";
import { PaymentsConfigAppTypes } from '../../interfaces/dataInterfaces';
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});
interface DialogFinishProps {
    open: boolean
    payments: PaymentsConfigAppTypes
    handleClose: () => void
    total: string
}
interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const DialogFinish = ({ open, handleClose, payments, total }: DialogFinishProps) => {
    const { palette } = useTheme()
    const [keyCopy, setKeyCopy] = useState(false)
    const [valuePagament, setValuePagament] = useState<string>("")
    const [valuesDesc, setValuesDesc] = useState("");
    const handleChange = (event: string) => {
        const eventAux = event.replace(/[^0-9]/g, '')
        setValuesDesc(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((+eventAux) / 100))
    };

    const onChange = (string: string) => {
        setValuePagament(string)
    }
    const handleCopy = async () => {
        setKeyCopy(true)
        setTimeout(() => setKeyCopy(false), 2000)
    }
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    position="relative">
                    <DialogTitle display="flex" gap={1}>
                        <Icon color='primary'>
                            <FaUserAlt />
                        </Icon>
                        {"Confirmar"}
                    </DialogTitle>
                    <Button
                        onClick={handleClose}
                        sx={{
                            p: 0,
                            position: "absolute",
                            right: -10,
                            top: 6.5
                        }}>
                        <Icon>
                            <IoClose />
                        </Icon>
                    </Button>
                </Stack>
                <Divider light />
                <DialogContent
                    sx={{
                        px: [2, 3]
                    }}>
                    <Box>
                        <TextField
                            sx={{
                                mb: 2
                            }}
                            size="small"
                            fullWidth
                            id="name"
                            label="Seu nome"
                            variant="outlined" />
                        <TextField
                            fullWidth
                            id="phone"
                            size="small"
                            label="Seu Telefone"
                            variant="outlined" />
                    </Box>
                    <Divider light />
                    <DialogTitle sx={{
                        pl: 0, pb: 1, pt: 1.5
                    }} display="flex" gap={1}>
                        <Icon color='primary'>
                            <FaCreditCard />
                        </Icon>
                        {"Forma de pagamento"}
                    </DialogTitle>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="radio-buttons-group"
                            name="radio-buttons-group"
                            onChange={(e) => onChange(e.target.value)}
                        >
                            <FormControlLabel
                                value="cartao"
                                control={<Radio />}
                                label="Maquina de cartão" />
                            <Collapse in={valuePagament === "cartao"}>
                                <Box
                                    borderLeft={`1px solid ${palette.secondary.main}`}
                                    pl={1.5}>

                                    <RadioGroup
                                        aria-labelledby="radio-buttons-group-payments"
                                        name="radio-buttons-group-payments"
                                    >
                                        <FormControlLabel
                                            value="debito"
                                            control={<Radio />}
                                            label="Debito" />
                                        <FormControlLabel
                                            value="credito"
                                            control={<Radio />}
                                            label="Credito" />
                                    </RadioGroup>
                                </Box>
                            </Collapse>
                            <FormControlLabel
                                value="mercadoPago"
                                control={<Radio />}
                                label="Pagar online via Mercado Pago" />
                            <FormControlLabel
                                value="dinheiro"
                                control={<Radio />}
                                label="Dinheiro" />
                            <Collapse in={valuePagament === "dinheiro"}>
                                <FormControl>
                                    <Stack
                                        direction="row"
                                        pl={1.5}
                                        borderLeft={`1px solid ${palette.secondary.main}`} >
                                        <TextField
                                            label="Troco para R$"
                                            value={valuesDesc}
                                            onChange={(e) => handleChange(e.target.value)}
                                            name="numberformat"
                                            size='small'
                                            id="formatted-numberformat-input"
                                            variant="outlined"
                                        />
                                        <Button variant='contained'><Icon sx={{
                                            display: "contents"
                                        }}>
                                            <FaCheck />
                                        </Icon></Button>
                                    </Stack>
                                </FormControl>
                            </Collapse>
                            <FormControlLabel
                                value="pix"
                                control={<Radio />}
                                label="Pix" />
                            <Collapse in={valuePagament === "pix"}>
                                <Box
                                    borderLeft={`1px solid ${palette.secondary.main}`}
                                    pl={1.5}>
                                    <Typography
                                        component="p"
                                        fontWeight="bold"
                                    >Chave:
                                        <Typography
                                            component="span"
                                        > {payments.pix_data.pix_key}
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        component="p"
                                        fontWeight="bold"
                                    >Nome:
                                        <Typography
                                            component="span"
                                        >  {payments.pix_data.pix_name}
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        component="p"
                                        fontWeight="bold"
                                    >Tipo:
                                        <Typography
                                            component="span"
                                        > {payments.pix_data.pix_type}
                                        </Typography>
                                    </Typography>
                                    <Button
                                        variant={keyCopy ? "contained" : "outlined"}
                                        onClick={handleCopy}><Icon sx={{
                                            display: "flex",
                                            mr: 1
                                        }}>
                                            {keyCopy ? <FcOk /> : <IoCopyOutline />}
                                        </Icon>{keyCopy ? "Chave copiada" : " Copiar chave"}</Button>
                                </Box>
                            </Collapse>
                        </RadioGroup>
                    </FormControl>
                    <Divider light />

                    <Box
                        my={2}
                        display="flex"
                        justifyContent="space-between">
                        <Typography component='span'>Total</Typography>
                        <Typography fontWeight="bold" component='strong'>{total}</Typography>
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
            </Dialog>
        </>
    )
}

export default DialogFinish