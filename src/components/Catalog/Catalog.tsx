import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CatalogTypes, ItensCatalogTypes } from '../../interfaces/dataInterfaces'
interface CatalogProps {
    catalog: CatalogTypes[]
    handleItemCatalog: (item: ItensCatalogTypes) => void
}

export const Catalog = ({ catalog, handleItemCatalog }: CatalogProps) => {
    return (
        <>
            <Box>
                <Container component="section">
                    <Stack mt={2} mb={2}>
                        {catalog.map(item => {
                            return <Accordion
                                key={item.id}
                                sx={{
                                    bgcolor: "#000",
                                    color: "#FFF"
                                }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon
                                        color="primary" />}
                                    aria-controls={item.name}
                                    id={item.name}
                                >
                                    <Typography>{item.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack
                                        gap={2}
                                        direction={["column", "row"]}
                                        spacing={2}
                                        justifyContent="center">
                                        {item.itens.map(ev => {
                                            return <Card
                                                onClick={() => handleItemCatalog(ev)}
                                                key={ev.id}
                                                sx={{ display: 'flex', width: "100%" }}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 151 }}
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
                                                        pl: 1,
                                                        pb: 1
                                                    }}>
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
        </>
    )
}
