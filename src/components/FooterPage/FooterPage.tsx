import { Box, Container, Icon, Link, Stack, Typography } from '@mui/material'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link color="#fff" href="https://www.instagram.com/xulioguimaraes/">
        Julio C. Guimarães
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

        <Stack
          alignItems="center"
          py={1}
          justifyContent="center"
          spacing={2}
          direction='row'>
          <Icon>
            <Link  color="#fff"  href='https://www.instagram.com/xulioguimaraes/'>
              <FaInstagram />
            </Link>
          </Icon>
          <Icon>
            <Link  color="#fff"  href='https://www.linkedin.com/in/xulioguimaraes/'>
              <FaLinkedin />
            </Link>
          </Icon>
          <Icon>
            <Link  color="#fff"  href='https://github.com/xulioguimaraes'>
              <FaGithub />
            </Link>
          </Icon>
        </Stack>
        <Copyright />
      </Container>
    </Box>
  )
}
