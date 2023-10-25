import { useEffect, useMemo } from "react";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hook";
import { useAuthStore } from "../../hook/useAuthStore";
import Swal from "sweetalert2";

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const {startLogin,status, errorMessage} = useAuthStore();
  
  const {email, password,onInputChange} = useForm(formData);


  const isAuthenticating = useMemo(() => status === 'checking' , [status])

  const onSubmit = (event) => {
    event.preventDefault();
    //! No es la accion a despachar
    startLogin({correo:email,password});
  }

  useEffect(() => {
    if(errorMessage !== undefined){
        Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage])

  return (
    <AuthLayout title="Login">
      <form 
      className="animate__animated animate__fadeIn animate__faster"
      onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Correo" type="email" placeholder="correo@gmail.com" fullWidth name="email" value={email} onChange={onInputChange}/>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth name="password" value={password} onChange={onInputChange}/>
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                    <Alert severity="error">
                      {errorMessage}
                    </Alert>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type="submit" variant="contained" fullWidth disabled={isAuthenticating}>
                      Login
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" fullWidth disabled={isAuthenticating}>
                      <Link component={RouterLink} color="inherit" to="/auth/register">
                        Crear una cuenta
                      </Link>
                    </Button>
                </Grid>
              </Grid>

            </Grid>
          </form>

    </AuthLayout>
  )
}
