import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import userAxios from '../services/userAxios';
import styles from '../styles/Home.module.css'


const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});

    const { user } = useContext(AuthContext);
    console.log('aqui el user!!!===>', user) // preguntar porque no se guarda todo el user y solo email, id y role

    useEffect(() => {
        userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    return (
        <>
            <div className={styles.profilecard}>
                <h1><strong>Email: </strong>{currentUser.email}</h1>
                <h1><strong>Nombre: </strong>{currentUser.name}</h1>
            </div>
        </>


    )

}

export default ProfilePage;
