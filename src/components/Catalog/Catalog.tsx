import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Container, Stack, Typography, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CatalogTypes, ItensCatalogTypes } from '../../interfaces/dataInterfaces'
import { useEffect, useState } from 'react';
import { Promo } from '../Promo/Promo';
interface CatalogProps {
    catalog: CatalogTypes[]
    handleItemCatalog: (item: ItensCatalogTypes) => void
}


export const Catalog = ({ catalog, handleItemCatalog }: CatalogProps) => {
    const theme = useTheme()
    const [catalogExpand, setCatalogExpand] = useState<CatalogTypes[]>([])
    const handleChange = (id: string) => {
        const catalogExpandAux = catalog.map(item => {
            if (item.id === id) {
                item.expanded = !item.expanded
                return item
            }
            return item
        })
        setCatalogExpand(catalogExpandAux)
    }
    useEffect(() => {
        const catalogExpandAux = catalog.map(item => {
            item.expanded = true
            return item
        })
        setCatalogExpand(catalogExpandAux)
    }, [catalog])
    return (
        <>
            <Box>
                <Container component="section">
                    <Stack mt={2} mb={2}>
                        {catalogExpand.map((item, index) => {
                            return <Accordion
                                sx={{
                                    boxShadow: 0,
                                    "::before": { background: "none !important" },
                                }}
                                expanded={item.expanded}
                                onChange={() => handleChange(item.id)}
                                key={item.id}>
                                <AccordionSummary
                                    sx={{
                                        "::before": { backgroundColor: "none" },
                                        borderRadius:  4 ,
                                        backgroundColor: theme.palette.background.default,
                                        marginBottom: 1.3,
                                        border: "1px solid",
                                        borderColor: theme.palette.grey[300]
                                    }}
                                    expandIcon={<ExpandMoreIcon
                                        color="primary" />}
                                    aria-controls={item.name}
                                    id={item.name}
                                >
                                    <Typography fontWeight="700">{item.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack
                                        gap={2}
                                        mt={1}
                                        direction={["column", "row"]}
                                        spacing={2}
                                        justifyContent="center">
                                        {item.itens.map(ev => {
                                            return <>


                                                <Card
                                                    onClick={() => handleItemCatalog(ev)}
                                                    key={ev.id}
                                                    sx={{
                                                        display: 'flex',
                                                        width: "100%",
                                                        position: "relative",
                                                        boxShadow: "none",
                                                        border: "1px solid",
                                                        overflow: "inherit",
                                                        borderColor: theme.palette.grey[300]
                                                    }}>
                                                    {+String(ev.price_promo).replace(/[^0-9]/g, '') > 0 && <Promo />}

                                                    <CardMedia
                                                        component="img"
                                                        sx={{ width: [105, 151], p: 1.5, borderRadius: 5 }}
                                                        image={ev.image}
                                                        alt="Live from space album cover"
                                                    />
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}>
                                                        <CardContent
                                                            sx={{ flex: '1 0 auto' }}>
                                                            <Typography
                                                                component="div"
                                                                variant="h5">
                                                                {ev.name}

                                                            </Typography>
                                                            <Typography
                                                                variant="subtitle1"
                                                                color="text.secondary"
                                                                component="div">
                                                                {ev.description}
                                                            </Typography>
                                                        </CardContent>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            pl: 2,
                                                            pb: 2
                                                        }}>
                                                            <Typography>{ev.price}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </>
                                        })}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        })}
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
