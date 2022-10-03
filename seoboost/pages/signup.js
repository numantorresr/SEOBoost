import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import authAxios from '../services/authAxios';
import { useRouter } from 'next/router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from '../context/auth.context';

const theme = createTheme();
export default function SignUp() {
    const [newUser, setNewUser] = useState({});
    const { storeToken, authentication } = React.useContext(AuthContext);
    const router = useRouter();
    //select role
    // const [role, setRole] = React.useState('');

    // const handleChange = (event) => {
    //     setRole(event.target.value);
    // };

    const createNewUser = (eventHTML) => {
        console.log('el user---->', newUser)
        eventHTML.preventDefault();
        authAxios.signup(newUser).then((response) => {
            console.log('AQUIIII EL NUEVO USUARIOOOO', newUser.role);
            storeToken(response.token);
            authentication();
            newUser.role === 'SEO' ? router.push('/profile') : router.push('/')
        });

    };

    const updateNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewUser({ ...newUser, [name]: value });

    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            ¡Crea tu cuenta! 👋🏽
                        </Typography>
                        <Box component="form" noValidate onSubmit={createNewUser} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={updateNewUser}
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
                                        onChange={updateNewUser}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                            <Select
                                                required
                                                name="role"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="role"
                                                onChange={updateNewUser}
                                            >
                                                <MenuItem value="USER">User</MenuItem>
                                                <MenuItem value="SEO">SEO</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Registrar
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}