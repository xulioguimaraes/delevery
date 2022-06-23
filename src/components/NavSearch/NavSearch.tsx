
import { alpha, AppBar, Badge, Box, IconButton, InputBase, styled, Toolbar, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react';

import { BsBox, BsFillMicFill, BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa';

import { useDataCart } from '../../context/useDataCart';

import { CatalogTypes, PaymentsConfigAppTypes } from '../../interfaces/dataInterfaces';
import { DialogNavSearch } from '../DialogNavSearch/DialogNavSearch';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        //   width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    color: theme.palette.text.secondary,
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));
interface NavSearchProps {
    catalog: CatalogTypes[]
    payments: PaymentsConfigAppTypes
}


export const NavSearch = ({ catalog, payments }: NavSearchProps) => {
    const [open, setOpen] = useState(false);
    const [qtdProductCart, setQtdProductCart] = useState(0)
    const { cart } = useDataCart()
    const theme = useTheme()
    const [total, setTotal] = useState("")
    useEffect(() => {
        const totalPrice = cart.map(item => {
            return (+item.price.replace(/[^0-9]/g, '') / 100)
        }).reduce((prev, curr) => prev + curr, 0)
        setTotal(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice))
    }, [cart])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (cart?.length) {
            return setQtdProductCart(cart.length)
        }
        return setQtdProductCart(0)
    }, [cart])

    return (
        <>
            <Box
                zIndex={777}
                width="100%"
                position="fixed"
                display="flex"
                justifyContent="center"
                bottom={0}
                left={0}
                right={0}
            >
                <AppBar
                    position="sticky"
                    sx={{
                        top: "auto",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        maxWidth: "1200px",
                        borderTopLeftRadius: qtdProductCart > 0 ? "20px" : 0,
                        borderTopRightRadius: qtdProductCart > 0 ? "20px" : 0
                    }}>
                    {qtdProductCart > 0 && (
                        <Box
                            px={3}
                            py={1.5}
                            bgcolor={theme.palette.secondary.main}
                            display="flex"
                            justifyContent="space-between"
                            sx={{
                                borderTopLeftRadius: "20px",
                                borderTopRightRadius: "20px"
                            }}>
                            <Box
                                display="flex"
                                gap={1}
                                color="#000"
                            >
                                <Typography
                                    color={theme.palette.text.primary}
                                    sx={{ fontWeight: "bold" }}
                                    component="strong"
                                >Meu carrinho</Typography>
                                <Typography
                                    color={theme.palette.text.primary}
                                    sx={{ fontWeight: "bold" }}
                                    component="strong"
                                >({qtdProductCart})</Typography>
                            </Box>
                            <Box
                                display="flex"
                                gap={1}
                                color={theme.palette.text.primary}                            >
                                <Typography sx={{ fontWeight: "bold" }} component="strong">{total}</Typography>
                            </Box>
                        </Box>
                    )}
                    <Toolbar sx={{
                        bgcolor: theme.palette.info.main
                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="open drawer"
                            onClick={handleClickOpen}
                        >
                            <Badge
                                color='primary'
                                badgeContent={qtdProductCart} >
                                <FaShoppingCart />
                            </Badge>
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <BsSearch />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Pesquisar..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton

                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"
                                color="primary"
                            >
                                <BsFillMicFill />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <DialogNavSearch
            payments={payments}
                total={total}
                catalog={catalog}
                open={open}
                handleClose={handleClose} />
        </>
    )
}
