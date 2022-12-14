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
import { useRouter } from "next/router";
import Link from 'next/link';
import CardProfile from "../components/CardProfile";


const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});
    const { user, logOut } = useContext(AuthContext);
    const navigate = useRouter()

    useEffect(() => {
        callUser()
    }, [user]);

    const callUser = () => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }

    const deleteUser = () => {
        userAxios.deleteUser(user._id).then(() => {
            logOut()
        })
    }


    return (
        <div className={styles.container}>
            <div className={styles.auditcontainer}>
                <div className={styles.profilecard}>
                    {currentUser.role === 'USER' ?
                        <>
                            <CardMedia className={styles.userprofilecard}
                                component="img"
                                height="300rem"
                                image={currentUser.avatar}
                                alt="green iguana"
                            />
                            <h1><strong>Email: </strong>{currentUser.email}</h1>
                            <hr className={styles.hrcolorprofile} ></hr>
                            <h1><strong>Rol: </strong>{currentUser.role}</h1>
                            <div className={styles.buttonUserProfile} >
                                <Stack sx={{ m: 2 }} spacing={2} direction="row">
                                    <Link
                                        component="a"
                                        href="/edit"
                                    >
                                        <Button variant="outlined" href='/edit'>Editar email</Button>
                                    </Link>
                                </Stack>
                                <Stack sx={{ m: 2 }} spacing={2} direction="row">
                                    <Link
                                        component="a"
                                        href="/"
                                    >
                                        <Button variant="outlined" onClick={deleteUser} style={{
                                            color: "red"
                                        }}>ELiminar Perfil</Button>
                                    </Link>
                                </Stack>
                            </div>
                            <CardProfile dataUser={currentUser} callUser={callUser} />
                        </>
                        :
                        <>
                            <div>
                                {!currentUser.description ? <p> ?????? Recuerda completar tu perfil para poder ofrecerlo </p> : <p> ???? Tu perfil se est?? ofreciendo en <strong>Perfiles SEO</strong> </p>}
                            </div>
                            <Card className={styles.profilecardcontainershadow} sx={{ maxWidth: "30rem", my: 3 }}>
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
                                        <Typography sx={{ my: 2 }} variant="body2" color="text.primary">
                                            <strong>Email:</strong> {currentUser.email}
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                            <strong>Especialidad:</strong> {currentUser.speciality}
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                                            <strong>A??os de experiencia:</strong> {currentUser.yearsOfExperience}
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
                                <Link
                                    component="a"
                                    href="/edit"
                                >
                                    <Button size="small" href='/edit' style={{
                                        color: "#4170DA"
                                    }}>Editar </Button>
                                </Link>
                                <Button onClick={deleteUser} size="small" style={{
                                    color: "red"
                                }}>Eliminar </Button>
                            </CardActions>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;



