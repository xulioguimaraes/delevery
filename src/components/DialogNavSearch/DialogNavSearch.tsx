import { Box, Button, Collapse, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Icon, IconButton, Link, List, ListItem, Slide, Tab, Tabs, TextField, Typography, useTheme } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react'
import { BiBox } from 'react-icons/bi';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaShoppingCart, FaTicketAlt, FaTrash } from 'react-icons/fa';
import { TransitionGroup } from 'react-transition-group';
import { ICart, useDataCart } from '../../context/useDataCart';
import { CatalogTypes, PaymentsConfigAppTypes } from '../../interfaces/dataInterfaces';
import { groupBy } from "../../utils/groupBy"
import DialogFinish from '../DialogFinish/DialogFinish';
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
    payments: PaymentsConfigAppTypes
}
interface ICartUse extends ICart {
    idCategory: string
    category: string
    idItemCart: number
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

const renderItem = (item: ICartUse, handleDeleteItemCart: (item: number) => void) => {
    return <>
        <Box display="flex" justifyContent="space-between" marginY={1}>
            <Box display="flex" gap={2}>
                <Typography display="flex" alignItems="center" component="p">{item.qtdItem} x</Typography>
                <Typography display="flex" alignItems="center" component="p">{item.name}</Typography>
            </Box>
            <Box display="flex" gap={1}>
                <Typography display="flex" alignItems="center" component="p">{item.price}</Typography>
                <IconButton size='small' color='primary' onClick={() => handleDeleteItemCart(item.idItemCart)}>
                    <FaTrash />
                </IconButton>
            </Box>
        </Box>
        <Divider light />
    </>

}
export const DialogNavSearch = ({ open, handleClose, catalog, total, payments }: DialogNavSearchProps) => {
    const { cart, setCart } = useDataCart()
    const [group, setGroup] = useState<Record<string, ICartUse[]>>({})
    const [value, setValue] = React.useState(0);
    const [openDialogFinish, setOpenDialogFinish] = React.useState(false);

    const handleClickOpenDialogFinish = () => {
        handleClose()
        setOpenDialogFinish(true);
    };
    const handleCloseDialogFinish = () => {
        setOpenDialogFinish(false);
    };
    const theme = useTheme()

    const handleChange2 = (newValue: number) => {
        setValue(newValue);
    };

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
                <Container sx={{ py: 2, px: [.4, 2] }}>
                    <DialogTitle
                        component="div"
                        px={[2, 3]}
                        py={[1, 3]}
                        display="flex"
                        gap={1}
                        lineHeight={0}>
                        <Icon color='primary'><FaShoppingCart /></Icon>
                        <Typography
                            lineHeight={1.3}
                            fontSize="1.3rem"
                            component="h1"
                        >Carrinho</Typography>
                    </DialogTitle>
                    <Divider light />
                    <DialogTitle
                        px={[2, 3]}
                        py={[1, 2]}
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
                    <Divider light />
                    <DialogTitle
                        px={[2, 3]}
                        py={[1, 1.5]}
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
                    <Divider light />
                    {cart.length === 0 && <DialogTitle
                           px={[2, 3]}
                           py={[1, 1.5]}
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
                    <DialogContent sx={{ py: 0, px:[1, 3] }}>
                        {Object.keys(group).map((item, key) => {
                            return <>
                                <DialogContentText
                                    color={theme.palette.text.primary}
                                    borderRadius={2}
                                    bgcolor={theme.palette.background.default}
                                    paddingX={1}
                                    mt={2}
                                    paddingY={.5}
                                    id="alert-dialog-slide-description">
                                    {item}
                                </DialogContentText>
                                <List>
                                    <TransitionGroup>
                                        {group[item].map(itemGroup => {
                                            return <>
                                                {renderItem(itemGroup, handleDeleteItemCart)}
                                            </>
                                        })}
                                    </TransitionGroup>
                                </List>

                            </>
                        })}
                        <TabPanel value={value} index={0}>
                            <DialogTitle
                                onClick={() => handleChange2(1)}
                                py={[1, 1.5]}
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
                                sx={{ paddingX: 0, py:[1, 1.5] }}
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
                                    <Button sx={{ minWidth: "210px", display:["none", "block"] }} size='large' variant="outlined" startIcon={<FaTicketAlt />}>Aplicar cupom</Button>
                                    <Button size="large" variant='contained'><FaTicketAlt /></Button>
                                </Box>
                            </DialogTitle>
                        </TabPanel>
                    </DialogContent>
                    <Divider light />
                    <DialogTitle
                        py="12px"
                        component="div"
                        display="grid"
                        gap={1}
                        lineHeight={0}>
                        <Box display="flex" justifyContent="space-between" >
                            <Typography component="strong">SubTotal: </Typography>
                            <Typography component="strong">{total}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography component="strong">Total: </Typography>
                            <Typography component="strong" fontWeight="bold">{total}</Typography>
                        </Box>
                    </DialogTitle>
                    <DialogActions sx={{ justifyContent: "center" }}>
                        <Button
                            color="info"
                            fullWidth
                            sx={{
                                textTransform: "initial"
                            }}
                            variant='contained'
                            startIcon={<FaShoppingCart />}
                            onClick={handleClose}
                        >Continuar comprando</Button>
                        <Button
                            color="secondary"
                            fullWidth
                            sx={{
                                textTransform: "initial"
                            }}
                            startIcon={<FaArrowRight />}
                            variant='contained'
                            onClick={handleClickOpenDialogFinish}
                        >Finalizar pedido</Button>
                    </DialogActions>
                </Container>
            </Dialog>
            <DialogFinish payments={payments} open={openDialogFinish} handleClose={handleCloseDialogFinish} />

        </>
    )
}
