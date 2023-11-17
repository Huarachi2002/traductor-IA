import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hook"
import { useEffect, useMemo, useState } from "react"
import { useAuthStore } from "../../hook/useAuthStore"
import Swal from "sweetalert2"

const formData = {
  email: '',
  password: '',
  password2: '',
  name: ''
}

const formValidations = {
  email:[(value) => value.includes('@'),'El correo debe de tener una @'],
  password:[(value) => value.length >= 6,'El password debe de tener mas de 6 letras'],
  name:[(value) => value.length >= 1,'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const [formSubmitted, setformSubmitted] = useState(false);

  const {errorMessage,startRegister,status} = useAuthStore();
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {name ,email, password, password2, onInputChange, 
    isFormValid, nameValid, emailValid, passwordValid} = useForm(formData, formValidations);
  
  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if(!isFormValid) return;
    if(password !== password2){
      Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
      return;
    }
    startRegister({name,correo:email,password});
  }

  useEffect(() => {
    if(errorMessage !== undefined){
        Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage])

  return (
    <AuthLayout title="Register">

      <form 
      className="animate__animated animate__fadeIn animate__faster"
      onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Nombre Completo" 
                  type="text" 
                  placeholder="Mi nombre" 
                  fullWidth 
                  name="name" 
                  value={name} 
                  onChange={onInputChange}
                  error={!!nameValid && formSubmitted}
                  helperText={nameValid}/>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Correo" 
                  type="email" 
                  placeholder="correo@gmail.com" 
                  fullWidth 
                  name="email" 
                  value={email} 
                  onChange={onInputChange}
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}/>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth name="password" 
                  value={password} 
                  onChange={onInputChange}
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}/>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField label="Repetir Contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth name="password2" 
                  value={password2} 
                  onChange={onInputChange}
                  // error={!!passwordValid && formSubmitted}
                  // helperText={passwordValid}
                  />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}}>
                <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                    <Alert severity="error">
                      {errorMessage}
                    </Alert>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
                      Crear Cuenta
                    </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth">
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </form>

    </AuthLayout>
  )
}
