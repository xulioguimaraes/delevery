import { Box, Button, Dialog, DialogTitle, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Popover, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
export interface SimpleDialogProps {
  open: boolean;

  onClose: () => void;
}
export const DialogSignin = (props: SimpleDialogProps) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box px={3} py={2} maxWidth="400px">
        <DialogTitle>Entrar</DialogTitle>
        <Divider />
        <Stack spacing={2} my={2}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" />
          <Button variant="contained">Entrar</Button>
          <Link   href="#" color="inherit"> Esqueceu sua senha?</Link>
        </Stack>
        <Divider />
        <Typography mt={2} component="p">
        Ao entrar/registrar-se você concorda com nossos
        <Link   href="#" color="inherit"> termos</Link> e
        <Link   href="#" color="inherit"> politica de privacidade</Link>
        </Typography>
      </Box>
    </Dialog>
  );
}