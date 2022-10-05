import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import userAxios from '../services/userAxios';
import avatarAxios from '../services/avatarAxios';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css'
import FormControl from '@mui/material/FormControl';
import { useRouter } from "next/router"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const theme = createTheme();

const EditPage = () => {
    // cloudinary

    const handleChange = (event) => {
        const formData = new FormData();
        formData.append('avatar', event.target.files[0]);
        console.log('aqui entra la imagen en el formdata!!!!!!!!!', formData)

        avatarAxios.getAvatar(formData).then((response) => {
            console.log('AQUI LO QUE RECIBE EL RESPONSE DEL GETAVATAR======>', response)
            setCurrentUser({ ...currentUser, avatar: response.cloudinary_url })
            console.log('EL PATH YA DE LA IMG======>', response)
        })
    }

    const [currentUser, setCurrentUser] = useState({});
    const router = useRouter();
    const { user } = useContext(AuthContext);

    //


    useEffect(() => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    useEffect(() => {
    }, [currentUser])

    const edit = (eventHTML) => {
        eventHTML.preventDefault();

        userAxios.editUser(currentUser._id, currentUser).then(() => {
            router.push("/profile")
        })
    }

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    /*   const logValues = ({ target }) => {
          const { name, value, checked } = target
      } */

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
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
                    <Box component="form" onSubmit={edit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            {/* cloudinary */}
                            <>
                                <input
                                    onChange={handleChange}
                                    accept=".jpg, .png, .jpeg"
                                    className="fileInput mb-2"
                                    type="file"
                                    name="avatar"
                                    required
                                >
                                </input>
                            </>
                            {/* cloudinary */}
                            <Grid item xs={12}>
                                <label sx={{ color: 'primary' }}>Email:</label>
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
                                        <label className={styles.labelInput}>Price:</label>
                                        <TextField
                                            required
                                            fullWidth
                                            name="price"
                                            label=""
                                            type="text"
                                            id="price"
                                            value={currentUser.price}
                                            autoComplete="new-password"
                                            onChange={updateUser}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label className={styles.labelInput}>Descripción:</label>
                                        <TextField
                                            fullWidth
                                            name="description"
                                            label=""
                                            type="text"
                                            id="description"
                                            value={currentUser.description}
                                            autoComplete="new-password"
                                            onChange={updateUser}
                                            inputProps={{ maxLength: 170 }}
                                            required
                                        />
                                    </Grid>
                                    {<Grid item xs={12}>
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
                                                    value={currentUser.speciality}
                                                >
                                                    <MenuItem value="Copywriter">copywriter</MenuItem>
                                                    <MenuItem value="Analytics">Analytics</MenuItem>
                                                    <MenuItem value="Linkbuilder ">Linkbuilder</MenuItem>
                                                    <MenuItem value="ASO">ASO</MenuItem>
                                                    <MenuItem value="SEM">SEM</MenuItem>
                                                    <MenuItem value="SXO">SXO</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>}
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
            {/* </ThemeProvider> */}
        </>


    )

}

export default EditPage;
