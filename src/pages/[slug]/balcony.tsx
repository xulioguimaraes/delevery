import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Collapse, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, ImageList, List, Stack, TextField, Typography } from "@mui/material"
import axios from "axios";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsFillMicFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Header } from "../../components/Header/Header";
import { AppTypes, CatalogTypes, ItensCatalogTypes, ProductsProps } from "../../interfaces/dataInterfaces";
interface PageDeliveryProps {
    page: {
        app: AppTypes
        slug: string
        catalog: CatalogTypes[]
        spotlight: ItensCatalogTypes[]
    }
}

export default function RetirarLocal({ page }: PageDeliveryProps) {

    const { app, spotlight, catalog } = page
    console.log(spotlight)
    const [arrayCatalog, setArrayCatalog] = useState<CatalogTypes[]>([])
    const [modalItens, setModalItens] = useState(false)
    const [itemModalHandle, setItemModalHandle] = useState<ItensCatalogTypes>()
    const handleItemCatalog = (item: ItensCatalogTypes) => {

        setItemModalHandle(item)
        setModalItens(true)
    }
    const handleClose = () => {
        setModalItens(false);
    };
    return (
        <>
            <Head>
                <title>Retirar | {`${app.name}`}</title>
            </Head>
            <Header infoPage={app} />
            <Container maxWidth="lg" component="main" sx={{ backgroundColor: "#333" }}>

                <Box>
                    <Box component="section" display="flex">
                        <Typography component="h1" px={2} py={1} borderRadius="5px" bgcolor="#FF9900">Aberto</Typography>
                    </Box>
                </Box>

                <Box>
                    <Container component="section">
                        <Typography component="h1">
                            Destaques
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ overflowX: "scroll" }}>

                            {spotlight.map(item => {
                                return <Card key={item.id} sx={{ maxWidth: 245, minWidth: 220 }} onClick={() => handleItemCatalog(item)}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.thumb}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            })}
                        </Stack>

                    </Container>
                </Box>

                <Box>
                    <Container component="section">
                        <Stack mt={2} mb={2}>
                            {catalog.map(item => {
                                return <Accordion key={item.id} sx={{ bgcolor: "#000", color: "#FFF" }} >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon color="primary" />}
                                        aria-controls={item.name}
                                        id={item.name}
                                    >
                                        <Typography>{item.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack gap={2} direction={["column", "row"]} spacing={2} justifyContent="center">
                                            {item.itens.map(ev => {
                                                return <Card key={ev.id} sx={{ display: 'flex', width: "100%" }}>
                                                    <CardMedia
                                                        component="img"
                                                        sx={{ width: 151 }}
                                                        image={ev.image}
                                                        alt="Live from space album cover"
                                                    />
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                                            <Typography component="div" variant="h5">
                                                                {ev.name}

                                                            </Typography>
                                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                                {ev.description}
                                                            </Typography>
                                                        </CardContent>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                            <Typography>{ev.price}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            })}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            })}
                        </Stack>
                    </Container>
                </Box>
                <FormControl sx={{ display: "flex" }}>
                    <Button startIcon={<FaShoppingCart />}></Button>
                    <TextField fullWidth
                        label="Pesquisar Item"
                    />
                    <Button startIcon={<BsFillMicFill />} />
                </FormControl>
            </Container>
            <Dialog
                open={modalItens}
                onClose={handleClose}
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
                            sx={{ maxWidth: "380px" }}
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
                
                <DialogContent>
                    <Divider/>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const product = await axios.get("http://localhost:3000/api/products").then(item => {
        return item.data
    }) as ProductsProps
    const { slug }: any = params
    let catalog = product.catalog.filter(item => {
        if (item.methods.find(ev => ev === "balcony") || item.methods.length < 1) {
            return item
        }
    })
    catalog = catalog.sort((a, b) => {
        return a.order < b.order ? -1 : a.order > b.order ? 1 : 0
    })
    catalog = catalog.map(item => {
        item.itens.map(ev => {
            ev.price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(+ev.price)
            return ev
        })
        return item
    })
    const spotlight: any = []
    catalog.forEach(item => {
        item.itens.forEach(ev => {
            if (ev?.price_promo > 0) {
                ev.price_promo = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(+ev.price_promo)
                spotlight.push(ev)
            }
        })
    })

    const page = {
        app: product.app,
        slug,
        catalog,
        spotlight
    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}