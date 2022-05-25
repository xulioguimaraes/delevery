import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Collapse, Container, FormControl, Stack, TextField, Typography } from "@mui/material"
import axios from "axios";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsFillMicFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Header } from "../../components/Header/Header";
import { AppTypes, CatalogTypes, ProductsProps } from "../../interfaces/dataInterfaces";
interface PageDeliveryProps {
    page: {
        app: AppTypes
        slug: string
        catalog: CatalogTypes[]
    }
}

export default function RetirarLocal({ page }: PageDeliveryProps) {

    const { app, slug, catalog } = page
    console.log(catalog)
    const [category, setCategory] = useState<string[]>([])
    const [open] = useState(true)
    useEffect(() => {
        const auxArray = catalog.map(item => item.name)
        setCategory(auxArray)
    }, [catalog])
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
                    <Container>
                        <Stack>
                            {catalog.map(item => {
                                return <Accordion key={item.name} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={item.name}
                                        id={item.name}
                                    >
                                        <Typography>{item.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
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
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const product = await axios.get("http://localhost:3000/api/products").then(item => {
        return item.data
    }) as ProductsProps
    const { slug }: any = params
    const catalog = product.catalog.filter(item => {
        if (item.methods.find(ev => ev === "balcony") || item.methods.length < 1) {
            return item
        }
    })

    const page = {
        app: product.app,
        slug,
        catalog: catalog
    }
    return {
        props: {
            page
        },
        // revalidate: 60 * 60 * 4, //24horas
    }
}