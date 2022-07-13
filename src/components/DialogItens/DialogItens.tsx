import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Icon, Stack, styled, TextField, Typography } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"

import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { useDataCart } from "../../context/useDataCart"
import { CatalogTypes, ItensAttributesTypes, ItensCatalogTypes } from "../../interfaces/dataInterfaces"

import { ItensDialog } from "../ItensDialog/ItensDialog"
interface DialogItensProps {
    modalItens: boolean
    handleClose: () => void
    itemModalHandle: ItensCatalogTypes | undefined

}
interface IAtrinusts extends ItensAttributesTypes {
    qtd: number

}
const ButtonClose = styled('button')(({ theme }) => ({
    background: "none",
    color: theme.palette.primary.main,
    border: "none",
    p: 0,
    position: "absolute",
    right: -15,
    top: -16.5
}));
export const DialogItens = ({ modalItens, handleClose, itemModalHandle }: DialogItensProps) => {
    const [price, setPrice] = useState("")
    const [qtdItem, setQtdItem] = useState(1)
    const { cart, setCart } = useDataCart()
    const [valueObs, setValueObs] = useState("")
    useEffect(() => {
        const pricePromoAux = String(itemModalHandle?.price_promo)
        if (+pricePromoAux.replace(/[^0-9]/g, '') > 0) {
            console.log(itemModalHandle?.price_promo);
            return setPrice(String(itemModalHandle?.price_promo))
        }
        return setPrice(String(itemModalHandle?.price))
    }, [itemModalHandle])
    useEffect(() => {
        setQtdItem(1)
    }, [itemModalHandle])
    const [dataItens, setDataItens] = useState<IAtrinusts[]>([])
    const handleCart = () => {
        const name = itemModalHandle?.name ? itemModalHandle?.name : ""
        const description = itemModalHandle?.description ? itemModalHandle?.description : ""
        const id = itemModalHandle?.id ? itemModalHandle?.id : ""
        const objSend = {
            idItemCart: Math.floor(Math.random() * 65536),
            id,
            name,
            price,
            obs: valueObs.trim(),
            qtdItem,
            image: itemModalHandle?.image ? itemModalHandle?.image : "",
            description,
            attributes: dataItens
        }
        let cartSend = [...cart]
        cartSend.push(objSend)
        setCart(cartSend)
        handleClose()
    }
    useEffect(() => {
        if (!modalItens) {
            setDataItens([])
        }
    }, [modalItens])
    const sumAtributs = () => {
        return dataItens.map(item => {
            if (item?.price) {
                return +item.price * item.qtd
            }
            return 0
        }).reduce((prev, curr) => prev + curr, 0)
    }
    const priceUse = () => {
        let priceAux = +String(itemModalHandle?.price_promo).replace(/[^0-9]/g, '') > 0 ? +String(itemModalHandle?.price_promo).replace(/[^0-9]/g, '') : +String(itemModalHandle?.price).replace(/[^0-9]/g, '')
        return priceAux = priceAux / 100
    }
    const addQtdItem = () => {
        const newPrice = (priceUse() * (qtdItem + 1) + (sumAtributs() * (qtdItem + 1)))
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newPrice))
        setQtdItem(qtdItem + 1)
    }
    const removeQtdItem = () => {
        const newPrice = (priceUse() * (qtdItem - 1) + (sumAtributs() * (qtdItem - 1)))
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newPrice))
        setQtdItem(qtdItem - 1)
    }
    const onChange = (ev: string) => {
        setValueObs(ev)
    }
    return (
        <Dialog
            open={modalItens}
            onClose={handleClose}
            closeAfterTransition
            sx={{ minWidth: "380px", p: 0, m: 0 }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogContent >
                <Box py={.5} position="relative">
                    <ButtonClose
                        onClick={handleClose}>
                        <Icon>
                            <IoClose />
                        </Icon>
                    </ButtonClose>
                </Box>
                <DialogTitle id="alert-title" sx={{ p: 0, mb: 1 }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        overflow="hidden">
                        <CardMedia
                            component="img"
                            height="140"
                            sx={{ minWidth: ["280px", "380px"] }}
                            image={itemModalHandle?.image}
                            alt={itemModalHandle?.name}
                        />
                    </Box>
                    {itemModalHandle?.name}
                    <DialogContentText id="alert-description">
                        {itemModalHandle?.description}
                    </DialogContentText>
                </DialogTitle>
                <Divider light />
                {itemModalHandle?.attributes.map(item => {
                    return <>
                        <Box
                            component="aside"
                            key={item.id}
                            sx={{
                                mb: 1
                            }}>
                            <Typography
                                pt={2}
                                fontWeight="700"
                                component="h1">
                                {item.name}
                            </Typography>
                            <Typography
                                color="primary"
                                component="p">
                                Selecione de {item.qty[0]} a {item.qty[1]}
                            </Typography>
                            <ItensDialog
                                priceItem={price}
                                setPrice={setPrice}
                                itens={item.itens}
                                dataItens={dataItens}
                                setDataItens={setDataItens}
                                end={item.qty[1]}
                                start={item.qty[0]} />
                        </Box>
                        <Divider light />
                    </>
                })}
                <>
                    <Divider sx={{ mb: 2 }} light />
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Observação"
                        value={valueObs}
                        onChange={(e) => onChange(e.target.value)}
                        multiline
                        rows={2}
                    />

                </>
            </DialogContent>
            <DialogActions>
                <Box
                    pr={2}>
                    <Button
                        sx={{ minWidth: "15px", p: "9px" }}
                        variant="contained"
                        disabled={qtdItem <= 1}
                        onClick={removeQtdItem}
                        size="large">
                        <IoMdRemove />
                    </Button>
                    <Typography
                        component="span"
                        px={2}>
                        {qtdItem}
                    </Typography>
                    <Button
                        sx={{ minWidth: "15px", p: "9px" }}
                        onClick={addQtdItem}
                        variant="contained"
                        size="large" >
                        <IoMdAdd />
                    </Button>
                </Box>
                <Button
                    startIcon={<IoMdAdd />}
                    variant="contained"
                    color="secondary"
                    onClick={handleCart}
                    autoFocus>

                    <Typography
                        pr={0.6}
                        display={["none", "flex"]}
                        fontSize=".9rem"
                        component="span"
                    >Adicionar</Typography>
                    <Typography
                        pr={0.6}
                        fontSize={["1rem", ".9rem"]}
                        component="span"
                    >  {price}</Typography>

                </Button>
            </DialogActions>
        </Dialog>
    )
}
