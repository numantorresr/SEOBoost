import { createContext, useState, useEffect } from 'react';
import { useRouter } from "next/router"
import profileAxios from '../services/profileAxios';

export const AuthContext = createContext();

const LOCALSTORAGE_TOKEN = 'tokenAuth';

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // const navigate = useRouter();

    const storeToken = (token) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, token);
    };

    const destroyToken = () => {
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
    };

    const authentication = () => {
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

        if (token) {
            profileAxios
                .me(token)
                .then((user) => {
                    setUser(user);
                    setIsLoading(false);
                    setIsLoggedIn(true);
                    // navigate.push('/profile');
                })
                .catch((err) => {
                    console.log(err);
                    setUser(null);
                    setIsLoading(false);
                    setIsLoggedIn(false);
                });
        } else {
            setUser(null);
            setIsLoading(false);
            setIsLoggedIn(false);
        }
    };

    const logOut = () => {
        destroyToken();
        authentication();
    }

    useEffect(() => {
        authentication();
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, isLoading, user, storeToken, authentication, logOut }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

// export {
//   AuthContext,
//   AuthProvider
// }
