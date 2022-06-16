import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Icon, IconButton, Link, Slide, Tab, Tabs, TextField, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react'
import { BiBox } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaTicketAlt, FaTrash } from 'react-icons/fa';
import { ICart, useDataCart } from '../../context/useDataCart';
import { CatalogTypes } from '../../interfaces/dataInterfaces';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface DialogNavSearchProps {
    open: boolean
    handleClose: () => void
    catalog: CatalogTypes[]
    total: string
}
interface ICartUse extends ICart {
    idCategory: string
    category: string

}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export const DialogNavSearch = ({ open, handleClose, catalog, total }: DialogNavSearchProps) => {
    const { cart, setCart } = useDataCart()
    const [group, setGroup] = useState<Record<string, ICartUse[]>>({})
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChange2 = (newValue: number) => {
        setValue(newValue);
    };
    const groupBy = (array: ICartUse[], key: string) => {
        return array.reduce((acc, item) => {
            if (!acc[item[key]]) acc[item[key]] = []
            acc[item[key]].push(item)
            return acc
        }, {})
    }
    useEffect(() => {
        let cartUseAux = cart.map(item => {
            let ArrayCategorys: ICartUse = {
                ...item,
                category: "Categoria",
                idCategory: ""
            }
            catalog.forEach(itemCatalog => {
                itemCatalog.itens.forEach(ev => {
                    if (ev.id === item.id) {
                        ArrayCategorys = {
                            ...item,
                            category: itemCatalog.name,
                            idCategory: itemCatalog.id
                        }
                    }
                })
            })
            return ArrayCategorys
        })
        console.log(groupBy(cartUseAux, "category"));

        setGroup(groupBy(cartUseAux, "category"))
    }, [cart])

    const handleDeleteItemCart = (idItemCart: number) => {
        let itensArrayAux: ICartUse[] = []
        Object.keys(group).forEach(item => {
            group[item].forEach(ev => {
                if (ev.idItemCart !== idItemCart) {
                    return itensArrayAux.push(ev)
                }
            })
        })
        setCart(itensArrayAux)
        setGroup(groupBy(itensArrayAux, "category"));
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
                <DialogTitle
                    component="div"
                    display="flex"
                    gap={1}
                    lineHeight={0}>
                    <Icon><FaShoppingCart /></Icon>
                    <Typography
                        lineHeight={1.3}
                        fontSize="1.3rem"
                        component="h1"
                    >Carrinho</Typography>
                </DialogTitle>
                <Divider />
                <DialogTitle
                    py="12px"
                    component="div"
                    display="flex"
                    gap={1}
                    lineHeight={0}>
                    <Icon><BiBox /></Icon>
                    <Typography
                        component="h1"
                        lineHeight={1.7}
                    >Retirar no local</Typography>
                </DialogTitle>
                <Divider />
                <DialogTitle
                    py="12px"
                    component="div"
                    display="flex"
                    gap={1}
                    lineHeight={0}>
                    <Typography
                        component="h1"
                        lineHeight={1.7}
                    >{`Você está pedindo no modo "Retirar no local". Deseja trocar?`}
                        <Link
                            href="/[slug]"
                        > Clique aqui
                        </Link>
                    </Typography>
                </DialogTitle>
                <Divider />
                {cart.length === 0 && <DialogTitle
                    py="12px"
                    component="div"
                    display="flex"
                    gap={1}
                    lineHeight={0}>
                    <Typography
                        component="h1"
                        lineHeight={1.7}
                    >{`Seu carrinho está vazio`}
                    </Typography>
                </DialogTitle>}
                <DialogContent sx={{ py: 0 }}>
                    {Object.keys(group).map((item, key) => {
                        return <>
                            <DialogContentText
                                color="#FFF"
                                borderRadius={2}
                                bgcolor="#000"
                                paddingX={1}
                                paddingY={.5}
                                id="alert-dialog-slide-description">
                                {item}
                            </DialogContentText>
                            {group[item].map(itemGroup => {
                                return <>
                                    <Box display="flex" justifyContent="space-between" marginY={1}>
                                        <Box display="flex" gap={2}>
                                            <Typography display="flex" alignItems="center" component="p">{itemGroup.qtdItem} x</Typography>
                                            <Typography display="flex" alignItems="center" component="p">{itemGroup.name}</Typography>
                                        </Box>
                                        <Box display="flex" gap={1}>
                                            <Typography display="flex" alignItems="center" component="p">{itemGroup.price}</Typography>
                                            <IconButton onClick={() => handleDeleteItemCart(itemGroup.idItemCart)}>
                                                <FaTrash />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Divider />
                                </>
                            })}
                        </>
                    })}
                    <Divider />
                    <TabPanel value={value} index={0}>
                        <DialogTitle
                            onClick={() => handleChange2(1)}
                            py="12px"
                            sx={{ paddingRight: 0 }}
                            id="Content ticket"
                            component="div"
                            display="flex"
                            gap={2}
                            justifyContent="space-between"
                            lineHeight={0}>
                            <Box display="flex" gap={2}>
                                <IconButton size='large' sx={{ fontSize: "2.5rem", p: 0 }}>
                                    <FaTicketAlt />
                                </IconButton>
                                <Box>
                                    <Typography
                                        component="h1"
                                        lineHeight={1.7}
                                    >{`Vocẽ tem um cupom?`}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                    >{`Click aqui`}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton size='large' sx={{ fontSize: "2.5rem", p: 0 }}>
                                <FaChevronRight />
                            </IconButton>
                        </DialogTitle>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <DialogTitle
                            sx={{ paddingX: 0, py: "12px" }}
                            id="Content ticket input"
                            component="section"
                            display="flex"
                            justifyContent="space-between"
                            lineHeight={0}>
                            <Box display="flex" mx={1} width="100%" >
                                <IconButton
                                    onClick={() => handleChange2(0)}
                                    size='large'
                                    sx={{ fontSize: "2.5rem", p: 0 }}>
                                    <FaChevronLeft />
                                </IconButton>
                                <TextField fullWidth id="outlined-basic" label="Digite o código" variant="outlined" />
                                <Button sx={{ minWidth: "210px" }} size='large' variant="outlined" startIcon={<FaTicketAlt />}>Aplicar cupom</Button>
                            </Box>
                        </DialogTitle>
                    </TabPanel>
                </DialogContent>
                <Divider />
                <DialogTitle
                    py="12px"
                    component="div"
                    display="grid"
                    gap={1}
                    lineHeight={0}>
                    <Box display="flex" justifyContent="space-between" >
                        <Typography component="strong" fontWeight="bold">SubTotal: </Typography>
                        <Typography component="strong" fontWeight="bold">{total}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography component="strong" fontWeight="bold">Total: </Typography>
                        <Typography component="strong" fontWeight="bold">{total}</Typography>
                    </Box>
                </DialogTitle>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button color="secondary" fullWidth variant='contained' startIcon={<FaShoppingCart />} onClick={handleClose}>Continuar comprando</Button>
                    <Button color="secondary" fullWidth variant='contained' onClick={handleClose}>Finalizar pedido</Button>
                </DialogActions>

            </Dialog>


        </>
    )
}
