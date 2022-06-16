import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import { IoMdAdd, IoMdRemove } from "react-icons/io"
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
export const DialogItens = ({ modalItens, handleClose, itemModalHandle }: DialogItensProps) => {
    const [price, setPrice] = useState("")
    const [qtdItem, setQtdItem] = useState(1)
    const { cart, setCart } = useDataCart()
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
        const name = itemModalHandle?.name ?  itemModalHandle?.name : ""
        const description =  itemModalHandle?.description? itemModalHandle?.description:""
        const id =  itemModalHandle?.id? itemModalHandle?.id:""
        const objSend = {
            idItemCart: Math.floor(Math.random() * 65536),
            id,
            name,
            price,
            qtdItem,
            image: itemModalHandle?.image ? itemModalHandle?.image: "",
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
        const newPrice =( priceUse() * (qtdItem + 1) + (sumAtributs() * (qtdItem + 1)))
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newPrice))
        setQtdItem(qtdItem + 1)
    }
    const removeQtdItem = () => {
        const newPrice =( priceUse() * (qtdItem - 1) + (sumAtributs() * (qtdItem - 1)))
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newPrice))
        setQtdItem(qtdItem - 1)
    }
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
                    <ItensDialog
                        priceItem={price}
                        setPrice={setPrice}
                        itens={item.itens}
                        dataItens={dataItens}
                        setDataItens={setDataItens}
                        end={item.qty[1]}
                        start={item.qty[0]} />
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
                    <Button startIcon={<IoMdAdd />} variant="contained" color="secondary" onClick={handleCart} autoFocus>
                        Adicionar {price}
                    </Button>
                </DialogActions>
            </DialogContent>

        </Dialog>
    )
}
