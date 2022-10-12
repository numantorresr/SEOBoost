import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AuthContext } from '../context/auth.context';
import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import userAxios from '../services/userAxios';
import Link from 'next/link'

const counter = 0;
const pages = ['Login', 'Signup'];
const settings = ['Profile', 'Logout'];
const ResponsiveAppBar = () => {
    const [currentUser, setCurrentUser] = useState({});
    const { user, logOut } = useContext(AuthContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        user && userAxios.getOneUser(user?._id).then((user) => {
            setCurrentUser(user)
        });
    }, [user]);

    return (
        <div className={styles.navbarGlobalContainer} >
            <AppBar position="sticky" className={styles.navbarGlobal}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        <Link
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                textDecoration: 'none',
                            }}
                        >
                            <img className={styles.logo} src='https://res.cloudinary.com/dj8ytkjbs/image/upload/v1665046177/seo2_Mesa_de_trabajo_1_copia_wntkzq.png'></img>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography >Login</Typography>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography >Signup</Typography>
                                </MenuItem>

                                {/* {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography >{page}</Typography>
                                    </MenuItem>
                                ))} */}
                            </Menu>
                        </Box>

                        {!user ? <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div className={styles.loginSignupContainer}>

                                <div className={styles.loginSignup}>
                                    <Link
                                        component="a"
                                        href="/audit"
                                    >
                                        <Button
                                            className={styles.buttonnavbar}
                                            component="a"
                                            href="/audit"
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            Audit
                                        </Button>
                                    </Link>
                                    <Link
                                        component="a"
                                        href="/keywords"
                                    >
                                        <Button
                                            className={styles.buttonnavbar}
                                            component="a"
                                            href="/keywords"
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            Keywords
                                        </Button>
                                    </Link>
                                    <Link
                                        component="a"
                                        href="/users"
                                    >
                                        <Button
                                            className={styles.buttonnavbar}
                                            component="a"
                                            href="/users"
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            Perfiles SEO
                                        </Button>
                                    </Link>
                                </div>
                                <div className={styles.loginSignup}>

                                    <Link
                                        component="a"
                                        href='/login'
                                    >
                                        <Button
                                            className={styles.buttonnavbar}
                                            component="a"
                                            href='/login'
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            Login
                                        </Button>
                                    </Link>

                                    <Link
                                        component="a"
                                        href='/signup'
                                    >
                                        <Button
                                            className={styles.buttonnavbar}
                                            component="a"
                                            href='/signup'
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            Signup
                                        </Button>
                                    </Link>

                                    {/* {pages.map((page) => (
                                        <Link
                                            key={page}
                                            component="a"
                                            href={`/${page.toLowerCase()}`}
                                        >
                                            <Button
                                                className={styles.buttonnavbar}
                                                component="a"
                                                href={`/${page.toLowerCase()}`}
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                {page}
                                            </Button>
                                        </Link> */}

                                    {/* ))} */}
                                </div>
                            </div>
                        </Box>
                            :
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Link
                                    component="a"
                                    href="/audit"
                                >
                                    <Button
                                        className={styles.buttonnavbar}
                                        component="a"
                                        href="/audit"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Audit
                                    </Button>
                                </Link>
                                <Link
                                    component="a"
                                    href="/keywords"
                                >
                                    <Button
                                        className={styles.buttonnavbar}
                                        component="a"
                                        href="/keywords"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Keywords
                                    </Button>
                                </Link>
                                <Link
                                    component="a"
                                    href="/comparator"
                                >
                                    <Button
                                        className={styles.buttonnavbar}
                                        component="a"
                                        href="/comparator"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Comparator
                                    </Button>
                                </Link>
                                <Link
                                    component="a"
                                    href="/users"
                                >
                                    <Button
                                        className={styles.buttonnavbar}
                                        component="a"
                                        href="/users"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Perfiles SEO
                                    </Button>
                                </Link>
                            </Box>}

                        {user ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar className={styles.avatarborder} alt="Remy Sharp" src={currentUser.avatar} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, idx) => setting !== 'Logout' ?
                                    <MenuItem key={idx} onClick={handleCloseUserMenu}>
                                        <Link
                                            component="a"
                                            href={`/${setting.toLowerCase()}`}
                                        >
                                            <Button onClick={handleCloseNavMenu} component="a" href={`/${setting.toLowerCase()}`}>
                                                {setting}
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    : <MenuItem key={idx} onClick={() => logOut()}>
                                        <Link
                                            component="a"
                                            href='/'
                                        >
                                            <Button onClick={handleCloseNavMenu} component="a" href='/' >
                                                {setting}
                                            </Button>
                                        </Link>
                                    </MenuItem>)
                                }
                            </Menu>
                        </Box> : null}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};
export default ResponsiveAppBar;