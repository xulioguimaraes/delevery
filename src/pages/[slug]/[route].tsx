import { Container, CssBaseline, useTheme } from "@mui/material"
import axios from "axios";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header/Header";
import { AppTypes, CatalogTypes, ItensCatalogTypes, PaymentsConfigAppTypes, ProductsProps, ThemeColorConfigAppTypes } from "../../interfaces/dataInterfaces";
import { Spotlight } from "../../components/Spotlight/Spotlight";
import { Catalog } from "../../components/Catalog/Catalog";
import { NavSearch } from "../../components/NavSearch/NavSearch";
import { DialogItens } from "../../components/DialogItens/DialogItens";
import {  useThemes } from "../../context/useTheme";
interface PageDeliveryProps {
    page: {
        app: AppTypes
        slug: string
        catalog: CatalogTypes[]
        spotlight: ItensCatalogTypes[]
        themesColor: ThemeColorConfigAppTypes
        payments: PaymentsConfigAppTypes
    }
}

export default function RetirarLocal({ page }: PageDeliveryProps) {
    console.log(page);

    const { app, spotlight, catalog, themesColor, payments } = page
    const {  setColors } = useThemes()
    const theme = useTheme()
    const [modalItens, setModalItens] = useState(false)
    const [itemModalHandle, setItemModalHandle] = useState<ItensCatalogTypes>()
    useEffect(() => {
        setColors(themesColor)
    }, [page])
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
            <CssBaseline/>

            <Header infoPage={app} />
            <Container maxWidth="lg" component="main" sx={{ backgroundColor: theme.palette.background.paper, pb: "75px" }}>
                <Spotlight spotlight={spotlight} handleItemCatalog={handleItemCatalog} />
                <Catalog catalog={catalog} handleItemCatalog={handleItemCatalog} />
            </Container>
            <NavSearch catalog={catalog} payments={payments}/>
            <DialogItens
                modalItens={modalItens}
                handleClose={handleClose}
                itemModalHandle={itemModalHandle} />

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const product = await axios.get("http://localhost:3000/api/products").then(item => {
        return item.data
    }) as ProductsProps
    const { slug, route }: any = params
    const themesColor = product.app.config.theme_color
    const exists = product.app.config.methods.some(item => item === route)
    const payments = product.app.config.payments

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
        themesColor,
        payments
    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}