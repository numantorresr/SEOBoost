import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import userAxios from '../services/userAxios';
import styles from '../styles/Home.module.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userAxios.getAll(users).then((response) => {
            const allUsers = response.results
            setUsers(allUsers)
        });
    }, []);

    return (
        <>
            <div className={styles.titles}>
                <h1 >Perfiles SEO</h1>
            </div>
            <div className={styles.seocards}>
                {users.map((user) => (
                    user.role === 'SEO' && user.name &&
                        user.description !== '' ?
                        <div key={user._id}>
                            <Card className={styles.eachseocards} sx={{ maxWidth: 345, m: 2 }}>
                                <CardActionArea href={'https://' + user.linkedin} target="_blank">
                                    <CardMedia className={styles.cardavatar}
                                        component="img"
                                        height="300"
                                        image={user.avatar}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography className={styles.breakText} gutterBottom variant="h5" component="div">
                                            {user.name} {user.lastName}
                                        </Typography>
                                        <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                                            <strong> {user.speciality} ⚡️</strong>
                                        </Typography>
                                        <Typography sx={{ height: 100 }} variant="body2" color="text.secondary">
                                            {user.description}
                                        </Typography>
                                        <Stack sx={{ mt: 2 }} direction="row" spacing={1}>
                                            <Chip label={<strong>user.price + ' € /h '</strong>} />
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                                {/*  <CardActions>
                                    <Button href={'https://' + user.linkedin} size="small" color="primary">
                                        Contactar
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        : null
                ))}
            </div>
        </>
    )

}

export default UsersPage;



