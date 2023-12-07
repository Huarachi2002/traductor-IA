import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LogoutOutlined } from "@mui/icons-material"
import { IconButton, useTheme, Paper, Typography, Grid } from "@mui/material"
import { useAuthStore } from "../../../hook/useAuthStore"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Searchbox = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { startLogout , user} = useAuthStore();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickLogout = () => {
        setOpenDialog(true);
    }

    return (
        <>
            <Paper className="headind_srch">
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={8}>
                        <Typography 
                            variant="body1" 
                            className="recent_heading mt-2"
                        >
                        {user.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className="srch_bar">
                        <Grid container justifyContent="flex-end" spacing={1}>
                        
                            <Grid item>
                                <IconButton onClick={handleClickLogout}>
                                    <LogoutOutlined sx={{ color: theme.palette.error.main }} />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Cerrar Sesión"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    ¿Estás seguro de que quieres cerrar sesión?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpenDialog(false)} style={{color: theme.palette.info.main}}>
                    Cancelar
                </Button>
                <Button onClick={startLogout} style={{color: theme.palette.error.main}} autoFocus>
                    Sí, cerrar sesión
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}