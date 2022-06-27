
import type { GetServerSideProps, GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

import axios from 'axios'
import { ListButtonHome } from '../../components/ListButtonHome/ListButtonHome'
import { FooterPage } from '../../components/FooterPage/FooterPage'
import { Header } from '../../components/Header/Header'
import { AppTypes, ProductsProps, ThemeColorConfigAppTypes } from '../../interfaces/dataInterfaces'
import { useEffect } from 'react'
import { useThemes } from '../../context/useTheme'
import { CssBaseline } from '@mui/material'


interface PageDeliveryProps {
    page: {
        app: AppTypes
         themesColor: ThemeColorConfigAppTypes
        slug: string
    }
}

export default function PageDelivery({ page }: PageDeliveryProps) {
    const {app, slug, themesColor } = page
    const {setColors}= useThemes()
    useEffect(()=>{
        setColors(themesColor)
    },[themesColor])
    return (
        <>
            <Head>
                <title>Inicio | {`${app.name}`}</title>
            </Head>
            <CssBaseline/>
            <Header infoPage={app}/>
            <ListButtonHome infoButtons={app.config.methods}  slug={slug}/>
            <FooterPage />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({  params }) => {
    const product = await axios.get("https://delivery-raesjulio.vercel.app/api/products").then(item => {
        return item.data
     }) as ProductsProps
    const themesColor = product.app.config.theme_color

    const { slug }: any = params
    const page = {
        app: product.app,
        slug,
        themesColor
    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}