import { Box, Button, DialogContentText, Stack, Typography } from '@mui/material'
import { log } from 'console'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { ItensAttributesTypes } from '../../interfaces/dataInterfaces'
interface IAtrinusts extends ItensAttributesTypes {
    qtd: number
}
interface ItensDialogProps {
    itens: ItensAttributesTypes[]
    start: number
    end: number
    priceItem: string
    setPrice: Dispatch<SetStateAction<string>>
    dataItens: IAtrinusts[]
    setDataItens: Dispatch<SetStateAction<IAtrinusts[]>>
}



export const ItensDialog = ({ itens, start, end, priceItem, setPrice, setDataItens, dataItens }: ItensDialogProps) => {
    const [total, setTotal] = useState(0)

    const [atributsName, setAtributsName] = useState<IAtrinusts[] | []>([])
    useEffect(() => {
        const itensAux  = itens.map(item => {
            if (item.visible === true) {
                return { ...item, qtd: 0 }
            }
        }).filter(ev => !!ev)
        setAtributsName(itensAux) 
    }, [])
    useEffect(() => {
        const result = atributsName.map(item => {
            return item.qtd
        }).reduce((prev, cur) => prev + cur, 0)
        setTotal(result)
    }, [atributsName])
    const addItens = (item: ItensAttributesTypes) => {
        let priceAux = 0
        const aux = atributsName.map(ev => {
            if (ev.id === item.id) {
                ev.qtd = ev.qtd + 1
                if (ev?.price) {
                    priceAux = +ev.price
                }
                return ev
            }
            return ev
        })

        const originPrice = +priceItem.replace(/[^0-9]/g, '') / 100
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(originPrice + priceAux))
        setAtributsName(aux)
    }
    const removeItens = (item: ItensAttributesTypes) => {
        if (atributsName.find(ev => {
            if (ev.id === item.id) {
                if (ev.qtd === 0) {
                    return true
                }
            }
        })) {
            return
        }
        let priceAux = 0
        const aux = atributsName.map(ev => {
            if (ev.id === item.id) {
                ev.qtd = ev.qtd - 1
                if (ev?.price) {
                    priceAux = +ev.price
                }
                return ev
            }
            return ev
        })
        const originPrice = +priceItem.replace(/[^0-9]/g, '') / 100
        setPrice(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(originPrice - priceAux))
        setAtributsName(aux)
    }

    useEffect(() => {
        let dataItensAux = dataItens
        const atribAux = atributsName.filter(item => item.qtd > 0)

        atribAux.forEach(item => {
            dataItensAux.push(item)
        })

        let reduced: IAtrinusts[] = [];
        dataItensAux.forEach((item) => {
            let duplicated  = reduced.findIndex(redItem => {
                return item.id == redItem.id;
            }) > -1;
        
            if(!duplicated) {
                reduced.push(item);
            }
        });
        
        setDataItens(reduced)
    }, [atributsName])



    return (
        <DialogContentText id="alert-dialog-description">
            {itens.map(ev => {

                return <Stack direction="row" justifyContent="space-between" key={ev.id}>
                    <Typography component="span">
                        {ev.name}
                    </Typography>
                    <Box >
                        {!!ev?.price && <Typography component="span">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(+ev.price)}
                        </Typography>}
                        <Button
                            disabled={(start === total || total === 0) ? true : false}
                            sx={{ minWidth: "15px", p: "9px" }}
                            variant="contained"
                            color="error"
                            onClick={() => removeItens(ev)}
                            size="large">
                            <IoMdRemove />
                        </Button>
                        {atributsName.map(item => {
                            if (item.id === ev.id) {
                                return <Typography
                                    component="span"
                                    px={2}
                                >
                                    {item.qtd}
                                </Typography>
                            }
                        })}
                        <Button
                            disabled={end === total ? true : false}
                            sx={{ minWidth: "15px", p: "9px" }}
                            variant="contained"
                            color="success"
                            onClick={() => addItens(ev)}
                            size="large" >
                            <IoMdAdd />
                        </Button>
                    </Box>
                </Stack>
            })}
        </DialogContentText>
    )
}
