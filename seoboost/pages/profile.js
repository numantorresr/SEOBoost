import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import userAxios from '../services/userAxios';
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});

    const { user } = useContext(AuthContext);
    console.log('aqui el user!!!===>', user) // preguntar porque no se guarda todo el user y solo email, id y role

    useEffect(() => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    const deleteProfile = () => {
        userAxios.deleteUser(currentUser._id, currentUser).then(() => {
            router.push("/")
        })
    }

    return (
        <>
            <div className={styles.profilecard}>
                {currentUser.role === 'USER' ?
                    <>
                        <h1><strong>Email: </strong>{currentUser.email}</h1>
                        <h1><strong>Rol: </strong>{currentUser.role}</h1>
                        <div className={styles.buttonUserProfile}>
                            <Stack sx={{ m: 2 }} spacing={2} direction="row">
                                <Button variant="outlined" href='/edit'>Editar email</Button>
                            </Stack>
                            <Stack sx={{ m: 2 }} spacing={2} direction="row">
                                <Button variant="outlined" href='/edit'>ELiminar Perfil</Button>
                            </Stack>
                        </div>
                    </>
                    :
                    <>
                        <Card sx={{ mb: 3 }}>
                            <div className={styles.profilecardcontainer}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image="https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {currentUser.name} {currentUser.lastName}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                        <strong>Email:</strong> {currentUser.email}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                        <strong>Especialidad:</strong> {currentUser.speciality}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                        <strong>Años de experiencia:</strong> {currentUser.yearsOfExperience}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                        <strong>Linkedin:</strong> {currentUser.linkedin}
                                    </Typography>
                                    <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                                        " {currentUser.description} "
                                    </Typography>

                                </CardContent>
                            </div>
                        </Card>
                        <CardActions>
                            <Button size="small" href='/edit'>Editar </Button>
                            <Button onSubmit={deleteProfile} size="small" href='/' style={{
                                color: "red"
                            }}>Eliminar </Button>
                        </CardActions>
                    </>
                }
                {/* <Stack spacing={2} direction="row">
                    <Button variant="outlined" href='/edit'>Editar Perfil</Button>
                </Stack> */}
            </div>


        </>


    )

}

export default ProfilePage;



