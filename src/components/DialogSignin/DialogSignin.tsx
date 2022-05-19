import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Popover, Typography } from "@mui/material";
import { useState } from "react";
export interface SimpleDialogProps {
  open: boolean;
  
  onClose: () => void;
}
export const  DialogSignin =(props: SimpleDialogProps)=> {
  const { onClose,  open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}