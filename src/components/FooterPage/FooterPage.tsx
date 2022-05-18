import { Box, Container, Link, Typography } from '@mui/material'

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link color="#fff" href="https://mui.com/">
       Your
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const FooterPage = () => {
  return (
    <Box position="relative" bottom="0" width="100%" component="footer" >
      <Container maxWidth="lg" sx={{ bgcolor: "#222", py: 2 }}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Julio C. Guimarães
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="#FFF"
          component="p"
        >
          Julio C. Guimarães
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}
