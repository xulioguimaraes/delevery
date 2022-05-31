import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Collapse, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, ImageList, List, Stack, TextField, Typography } from "@mui/material"
import axios from "axios";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useEffect, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Header } from "../../components/Header/Header";
import { AppTypes, CatalogTypes, ItensCatalogTypes, ProductsProps } from "../../interfaces/dataInterfaces";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Spotlight } from "../../components/Spotlight/Spotlight";
import { Catalog } from "../../components/Catalog/Catalog";
import { NavSearch } from "../../components/NavSearch/NavSearch";
import { DialogItens } from "../../components/DialogItens/DialogItens";
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
    console.log(catalog)
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
            <Container maxWidth="lg" component="main" sx={{ backgroundColor: "#333", pb: "75px" }}>
                <Spotlight spotlight={spotlight} handleItemCatalog={handleItemCatalog} />
                <Catalog catalog={catalog} handleItemCatalog={handleItemCatalog} />
            </Container>
            <NavSearch />
            <DialogItens modalItens={modalItens} handleClose={handleClose} itemModalHandle={itemModalHandle} />

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const product = await axios.get("http://localhost:3000/api/products").then(item => {
        return item.data
    }) as ProductsProps
    const { slug, route }: any = params

    const exists = product.app.config.methods.some(item => item === route)


    if (!exists) {
        return {
            props: {
                routeNoExist: true
            },
            // revalidate: 60 * 60 * 4, //24horas
        }
    }
    let catalog = product.catalog.filter(item => {
        if (item.methods.find(ev => ev === route) || item.methods.length < 1) {
            return item
        }
    })
    catalog = catalog.sort((a, b) => {
        return a.order < b.order ? -1 : a.order > b.order ? 1 : 0
    })
    catalog = catalog.map(item => {
        item.itens.map(ev => {
            if (ev.price === 0) {
                return ev.price = "Vejas as opções"
            }
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
    catalog = catalog.filter(item => item.visible === true)

    const page = {
        app: product.app,
        slug,
        catalog,
        spotlight,

    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}