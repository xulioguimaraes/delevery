
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material"
import { ItensCatalogTypes } from "../../interfaces/dataInterfaces"
interface SpotlightProps {
    spotlight: ItensCatalogTypes[]
    handleItemCatalog: (item: ItensCatalogTypes) => void
}
export const Spotlight = ({ spotlight, handleItemCatalog }: SpotlightProps) => {
    return (
        <>
            <Box>
                <Container component="section">
                    <Box>
                        <Box component="section" display="flex">
                            <Typography component="h1" px={2} py={1} borderRadius="5px" bgcolor="#FF9900">Aberto</Typography>
                        </Box>
                    </Box>

                    <Typography component="h1">
                        Destaques
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ overflowX: "scroll" }}>
                        {spotlight.map(item => {
                            return <Card
                                key={item.id}
                                sx={{ maxWidth: 245, minWidth: 220 }}
                                onClick={() => handleItemCatalog(item)}>
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.thumb}
                                        alt={item.name}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Box
                                            display="flex"
                                            gap={1}>
                                            <Typography
                                                variant="body2"
                                                color="text.primary">
                                                {item.price_promo}
                                            </Typography>
                                            <Typography
                                                sx={{ textDecoration: "line-through" }}
                                                variant="body2"
                                                color="text.secondary">
                                                {item.price}
                                            </Typography>
                                        </Box>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        })}
                    </Stack>

                </Container>
            </Box>
        </>
    )
}
