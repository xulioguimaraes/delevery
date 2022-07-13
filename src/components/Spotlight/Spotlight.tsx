
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Stack, Typography, useTheme } from "@mui/material"
import { ItensCatalogTypes } from "../../interfaces/dataInterfaces"
import { Promo } from "../Promo/Promo"
interface SpotlightProps {
    spotlight: ItensCatalogTypes[]
    handleItemCatalog: (item: ItensCatalogTypes) => void
}
export const Spotlight = ({ spotlight, handleItemCatalog }: SpotlightProps) => {
    const theme = useTheme()
    return (
        <>
            <Box>
                <Container component="section">
                    <Box>
                        <Box component="section" display="flex">
                            <Typography
                                component="h1"
                                px={2}
                                py={.6}
                                borderRadius="5px"
                                bgcolor="#FF9900"
                                fontWeight="bold"
                            >Aberto
                            </Typography>
                        </Box>
                    </Box>

                    <Typography
                        component="h1"
                        fontWeight="bold"
                        py={1.6}
                        fontSize="1.5rem">
                        Destaques
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ overflowX: "scroll" }}>
                        {spotlight.map(item => {
                            return <>

                                <Card
                                    key={item.id}
                                    id-controls="sroll"

                                    sx={{
                                        position: "relative",
                                        maxWidth: 245,
                                        minWidth: 210,
                                    }}
                                    onClick={() => handleItemCatalog(item)}>
                                    <Promo />

                                    <CardActionArea sx={{
                                        mb: 3
                                    }}>

                                        <CardMedia
                                            component="img"
                                            height="140"
                                            sx={{p:1.3, borderRadius: 4}}
                                            image={item.thumb}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                fontSize="1.2rem"
                                                variant="h6"
                                                component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions
                                        disableSpacing
                                        sx={{

                                            position: "absolute",
                                            bottom: 0
                                        }}>
                                        <Box
                                            display="flex"
                                            gap={1}>
                                            <Typography
                                                variant="body2"
                                                fontWeight="bold"
                                                color="primary">
                                                {item.price_promo}
                                            </Typography>
                                            <Typography
                                                sx={{ textDecoration: "line-through" }}
                                                variant="body2"
                                                color="text.secondary">
                                                {item.price}
                                            </Typography>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </>
                        })}
                    </Stack>

                </Container>
            </Box>
        </>
    )
}
