
import type { GetServerSideProps, GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

import axios from 'axios'
import { ListButtonHome } from '../../components/ListButtonHome/ListButtonHome'
import { FooterPage } from '../../components/FooterPage/FooterPage'
import { Header } from '../../components/Header/Header'
import { AppTypes, ProductsProps } from '../../interfaces/dataInterfaces'


interface PageDeliveryProps {
    page: {
        app: AppTypes
        slug: string
    }
}

export default function PageDelivery({ page }: PageDeliveryProps) {
    const {app, slug } = page

    return (
        <>
            <Head>
                <title>Inicio | {`${app.name}`}</title>
            </Head>
            <Header infoPage={app}/>
            <ListButtonHome infoButtons={app.config.methods}  slug={slug}/>
            <FooterPage />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({  params }) => {
    const product = await axios.get("http://localhost:3000/api/products").then(item => {
        return item.data
     }) as ProductsProps
    const { slug }: any = params
    const page = {
        app: product.app,
        slug
    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}