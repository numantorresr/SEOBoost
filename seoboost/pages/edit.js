import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import userAxios from '../services/userAxios';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRouter } from "next/router"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const theme = createTheme();

const EditPage = () => {
    const [currentUser, setCurrentUser] = useState({});
    const router = useRouter();
    const { user } = useContext(AuthContext);
    // console.log('aqui el user!!!===>', user)



    useEffect(() => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])

    const edit = (eventHTML) => {
        eventHTML.preventDefault();
        console.log('EL NUEVO USUARIO EDITADO=====>', currentUser)
        userAxios.editUser(currentUser._id, currentUser).then(() => {
            router.push("/profile")
            console.log(currentUser)
        })
    }

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setCurrentUser({ ...currentUser, [name]: value });
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
                        <h1>Edita tu perfil</h1>
                        <Box component="form" noValidate onSubmit={edit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label className={styles.labelInput}>Email:</label>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        // label="Email Address"
                                        name="email"
                                        value={currentUser.email}
                                        autoComplete="email"
                                        onChange={updateUser}
                                    />
                                </Grid>
                                {currentUser.role === 'SEO' ?
                                    <>
                                        <Grid item xs={12}>
                                            <label className={styles.labelInput}>Nombre(s):</label>
                                            <TextField
                                                required
                                                fullWidth
                                                name="name"
                                                label=""
                                                type="text"
                                                id="name"
                                                value={currentUser.name}
                                                autoComplete="new-password"
                                                onChange={updateUser}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label className={styles.labelInput}>Apellido(s):</label>
                                            <TextField
                                                required
                                                fullWidth
                                                name="lastName"
                                                label=""
                                                type="text"
                                                id="lastName"
                                                value={currentUser.lastName}
                                                autoComplete="new-password"
                                                onChange={updateUser}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label className={styles.labelInput}>LinkedIn:</label>
                                            <TextField
                                                required
                                                fullWidth
                                                name="linkedin"
                                                label=""
                                                type="text"
                                                id="linkedin"
                                                value={currentUser.linkedin}
                                                autoComplete="new-password"
                                                onChange={updateUser}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label className={styles.labelInput}>Años de experiencia:</label>
                                            <TextField
                                                required
                                                fullWidth
                                                name="yearsOfExperience"
                                                label=""
                                                type="text"
                                                id="yearsOfExperience"
                                                value={currentUser.yearsOfExperience}
                                                autoComplete="new-password"
                                                onChange={updateUser}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label className={styles.labelInput}>Descripción:</label>
                                            <TextField
                                                required
                                                fullWidth
                                                name="description"
                                                label=""
                                                type="text"
                                                id="description"
                                                value={currentUser.description}
                                                autoComplete="new-password"
                                                onChange={updateUser}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl onChange={updateUser} name="speciality" component="fieldset">
                                                <FormLabel name="speciality" className={styles.labelInput} component="legend">Speciality: </FormLabel>
                                                <FormGroup onChange={updateUser} name="speciality" aria-label="position" row>
                                                    <FormControlLabel
                                                        value="copywriter"
                                                        control={<Checkbox />}
                                                        label="Copywriter"
                                                        labelPlacement="copywriter"
                                                        name="copywriter"
                                                    />
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label="Analytics"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label="Linkbuilder"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label="SXO"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label="ASO"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label="SEM"
                                                        labelPlacement="end"
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">{currentUser.speciality}</InputLabel>
                                                    <Select
                                                        required
                                                        name="speciality"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="speciality"
                                                        onChange={updateUser}
                                                    >
                                                        <MenuItem value="copywriter">copywriter</MenuItem>
                                                        <MenuItem value="analytics">Analytics</MenuItem>
                                                        <MenuItem value="linkbuilder">Linkbuilder</MenuItem>
                                                        <MenuItem value="aso">ASO</MenuItem>
                                                        <MenuItem value="sem">SEM</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    </>
                                    :
                                    null
                                }
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 8 }}
                            >
                                Editar perfil
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>


    )

}

export default EditPage;
