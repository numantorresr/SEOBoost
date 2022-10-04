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
import { useRouter } from "next/router"
import Link from 'next/link'

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});
    const { user, logOut } = useContext(AuthContext);
    console.log('aqui el user!!!===>', user) // preguntar porque no se guarda todo el user y solo email, id y role
    console.log('aqui el current user!!!===>', currentUser) // preguntar porque no se guarda todo el user y solo email, id y role
    const navigate = useRouter()

    useEffect(() => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    const deleteUser = () => {
        userAxios.deleteUser(user._id).then(() => {
            logOut()
            navigate.push("/")
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
                        <div>
                            {!currentUser.description ? <p> ❗️ Recuerda completar tu perfil para poder ofrecerlo </p> : <p> 💡 Tu perfil se está ofreciendo en <strong>Servicios SEO</strong> </p>}
                        </div>
                        <Card sx={{ maxWidth: "30rem", my: 3 }}>
                            <div className={styles.profilecardcontainer}>
                                <CardMedia
                                    component="img"
                                    height="300rem"
                                    image={currentUser.avatar}
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
                                        <strong>Price:</strong> {currentUser.price + ''}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                        <strong>Linkedin:</strong>
                                        <Link href={`${currentUser.linkedin}`}>
                                            <a className={styles.linkapp}> {currentUser.linkedin}</a>
                                        </Link>
                                    </Typography>
                                    <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                                        " {currentUser.description} "
                                    </Typography>

                                </CardContent>
                            </div>
                        </Card>
                        <CardActions>
                            <Button size="small" href='/edit'>Editar </Button>
                            <Button onClick={deleteUser} size="small" style={{
                                color: "red"
                            }}>Eliminar </Button>
                        </CardActions>
                    </>
                }
            </div>
        </>
    )
}

export default ProfilePage;



