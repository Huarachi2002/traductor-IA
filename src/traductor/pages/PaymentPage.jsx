import { useTheme } from "@emotion/react";
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const PaymentPage = () => {
    const theme = useTheme();

    const [cantidadUsuarios, setCantidadUsuarios] = useState(null);

    const handleSubscribe = (plan, users) => {
        // Implementa lógica de suscripción aquí
        console.log(users)
        const price = getPriceForPlan(plan);  // Implementa la lógica real para obtener el precio según el plan
        const totalPagar = price * users;
        console.log(`¡Te has suscrito al plan ${plan}!`);
        console.log(`Cantidad de usuarios: ${users}`);
        console.log(`Total a pagar: ${totalPagar}`);
    };

    const getPriceForPlan = (plan) => {
        if(plan === 'mensual'){
            return 9.99; 
        }else if(plan === 'semestral'){
            return 49.99; 
        }else if(plan === 'anual'){
            return 89.99; 
        }
        // Implementa la lógica real para obtener el precio según el plan
        // Puedes agregar un objeto de precios o una llamada a una API aquí
        // Ejemplo de precio mensual
    };
    
    return (
        <Container maxWidth="md" style={{ marginTop: '50px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Elige tu plan de suscripción
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card style={{ backgroundColor: '#CCCCCC' }}>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom style={{ color: '#333333' }}>
                                Mensual
                            </Typography>
                            <Typography variant="h5" align="center" gutterBottom style={{ color: '#333333' }}>
                                $9.99/mes
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Obten los siguientes beneficios a tan solo $9.99/mes:
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                - Acceso a los chats globales por 1 mes
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                - Posibilidad de traducción internacional entre distintas empresas habilitadas.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                - Traduccion en tiempo real de audio en el idioma requerido.
                            </Typography>
                            <TextField
                                label="Cantidad de Usuarios"
                                type="number"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => setCantidadUsuarios(parseInt(e.target.value))}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}
                                onClick={() => handleSubscribe('mensual', cantidadUsuarios)}
                            >
                                Suscribirse
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Card style={{ backgroundColor: '#999999' }}>
                    <CardContent>
                        <Typography variant="h6" align="center" gutterBottom style={{ color: '#FFFFFF' }}>
                            Semestral
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom style={{ color: '#FFFFFF' }}>
                            $49.99/semestre
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                            Obten los siguientes beneficios a tan solo $49.99/semestre:
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Acceso a los chats globales por 6 meses
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Posibilidad de traducción internacional entre distintas empresas habilitadas.
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Traducción en tiempo real de audio en el idioma requerido.
                        </Typography>
                        <TextField
                            label="Cantidad de Usuarios"
                            type="number"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={(e) => setCantidadUsuarios(parseInt(e.target.value))}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary }}
                            onClick={() => handleSubscribe('semestral', cantidadUsuarios)}
                        >
                            Suscribirse
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Card style={{ backgroundColor: '#FFB74D' }}>
                    <CardContent>
                        <Typography variant="h6" align="center" gutterBottom style={{ color: '#FFFFFF' }}>
                            Anual
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom style={{ color: '#FFFFFF' }}>
                            $89.99/año
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                            Obten los siguientes beneficios a tan solo $89.99/año:
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Acceso a los chats globales por 12 meses
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Posibilidad de traducción internacional entre distintas empresas habilitadas.
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ color: '#FFFFFF' }}>
                            - Traducción en tiempo real de audio en el idioma requerido.
                        </Typography>
                        <TextField
                            label="Cantidad de Usuarios"
                            type="number"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={(e) => setCantidadUsuarios(parseInt(e.target.value))}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary }}
                            onClick={() => handleSubscribe('anual', cantidadUsuarios)}
                        >
                            Suscribirse
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
