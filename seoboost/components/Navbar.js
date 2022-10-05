import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AuthContext } from '../context/auth.context';
import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import userAxios from '../services/userAxios';
import Link from 'next/link'


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
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 200,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SeoBoost
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    {!user ? <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <div className={styles.loginSignupContainer}>

                            <div className={styles.loginSignup}>
                                <Link
                                    component="a"
                                    href="/audit"
                                >
                                    <Button
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
                                {pages.map((page) => (
                                    <Link
                                        component="a"
                                        href={`/${page.toLowerCase()}`}
                                    >
                                        <Button
                                            component="a"
                                            href={`/${page.toLowerCase()}`}
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    </Link>

                                ))}
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
                                <Avatar alt="Remy Sharp" src={currentUser.avatar} />
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
                            {settings.map((setting) => setting !== 'Logout' ?
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Link
                                        component="a"
                                        href={`/${setting.toLowerCase()}`}
                                    >
                                        <Button onClick={handleCloseNavMenu} component="a" href={`/${setting.toLowerCase()}`}>
                                            {setting}
                                        </Button>
                                    </Link>
                                </MenuItem>
                                : <MenuItem key={setting} onClick={() => logOut()}>
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
    );
};
export default ResponsiveAppBar;