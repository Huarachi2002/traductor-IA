import { useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hook";
import { checkingAutentication,startLoginWithEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const {email, password,onInputChange} = useForm(formData);


  const isAuthenticating = useMemo(() => status === 'checking' , [status])

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email,password});

    //! No es la accion a despachar
    dispatch(startLoginWithEmailPassword({email,password}));
  }

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
