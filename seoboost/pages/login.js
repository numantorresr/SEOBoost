import { useState, useContext } from 'react';
import { useRouter } from "next/router"
import authAxios from '../services/authAxios';
import { AuthContext } from '../context/auth.context';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css'
import '../styles/globals.css'


const theme = createTheme();

const LoginPage = () => {
    const [user, setUser] = useState({});
    const { storeToken, authentication } = useContext(AuthContext);
    const navigate = useRouter()

    const login = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios.login(user).then((response) => {
            storeToken(response.token);
            authentication();
            user.role === 'SEO' ? navigate.push('/profile') : navigate.push('/comparator')
        })
    };

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className={styles.container}>
            <div className={styles.auditcontainer}>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <img className={styles.logo} src='https://res.cloudinary.com/dj8ytkjbs/image/upload/v1665045772/SEOBOOST_Mesa_de_trabajo_1_glm7cd.png'></img>
                            <div className={styles.hrcolor}></div>
                            <Typography component="h1" variant="h5" className={styles.loginandsignup}>
                                👋🏽 ¡Inicia Sesión!
                            </Typography>
                            <Box component="form" noValidate onSubmit={login} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={updateUser}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            onChange={updateUser}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default LoginPage;
