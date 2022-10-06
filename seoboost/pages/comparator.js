import * as React from 'react';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import ComparatorAxios from '../services/comparatorAxios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableSortLabel } from '@mui/material';
import styles from '../styles/Home.module.css'


const CreateComparator = () => {

    const [dataComparator, setDataComparator] = useState({});
    const [copyComparator, setCopyComparator] = useState({});

    const [card, setCard] = useState(false);

    const createData = (eventHTML) => {
        eventHTML.preventDefault();
        ComparatorAxios
            .comparator(copyComparator)
            .then((response) => {
                const results = response.results
                setDataComparator(results)
                setCard(true)
            });
    };

    const updateData = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setCopyComparator({ ...copyComparator, [name]: value });
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    const [orderDirection, setOrderDirection] = useState("asc");

    // DATA ORDER PRICE

    const sortPrice = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
                return arr.sort((a, b) =>
                    a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.price < b.price ? 1 : b.price < a.price ? -1 : 0
                );
        }
    };

    const handleSortPrice = () => {
        sortPrice(dataComparator, orderDirection);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    // DATA ORDER DR

    const sortDr = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
                return arr.sort((a, b) =>
                    a.domainRef > b.domainRef ? 1 : b.domainRef > a.domainRef ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.domainRef < b.domainRef ? 1 : b.domainRef < a.domainRef ? -1 : 0
                );
        }
    };

    const handleSortDr = () => {
        sortDr(dataComparator, orderDirection);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    // DATA ORDER DA

    const sortDa = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
                return arr.sort((a, b) =>
                    a.domainRef > b.domainRef ? 1 : b.domainRef > a.domainRef ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.domainRef < b.domainRef ? 1 : b.domainRef < a.domainRef ? -1 : 0
                );
        }
    };

    const handleSortDa = () => {
        sortDa(dataComparator, orderDirection);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    // DATA ORDER TRAFFIC

    const sortTraffic = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
                return arr.sort((a, b) =>
                    a.traffic > b.traffic ? 1 : b.traffic > a.traffic ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.traffic < b.traffic ? 1 : b.traffic < a.traffic ? -1 : 0
                );
        }
    };

    const handleSortTraffic = () => {
        sortTraffic(dataComparator, orderDirection);
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <div className={styles.container}>
            <div className={styles.auditcontainer}>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                    <h1>Comparador De Enlaces</h1>
                    <Grid item xs={10}>

                        <Box component="form" noValidate onSubmit={createData} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="url"
                                        label="Escribe la url completa a comparar: https://tuweb.com"
                                        name="url"
                                        onChange={updateData}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Compara tu enlace antes de comprar
                            </Button>
                        </Box>
                        {card &&
                            <>

                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="left">Compañia</StyledTableCell>
                                                <StyledTableCell align="left">URL</StyledTableCell>
                                                <StyledTableCell align="left">Nombre</StyledTableCell>
                                                <StyledTableCell align="left" onClick={handleSortTraffic}>Visitas (mes)
                                                    <TableSortLabel sx={
                                                        {
                                                            '& .MuiTableSortLabel-icon': {
                                                                color: 'white !important',
                                                            },
                                                            '& .MuiTableSortLabel-icon:hover': {
                                                                color: 'blue !important',
                                                            }
                                                        }
                                                    } active={true} direction={orderDirection} onClick={handleSortTraffic}>
                                                    </TableSortLabel>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" onClick={handleSortDa}>DA
                                                    <TableSortLabel sx={
                                                        {
                                                            '& .MuiTableSortLabel-icon': {
                                                                color: 'white !important',
                                                            },
                                                            '& .MuiTableSortLabel-icon:hover': {
                                                                color: 'blue !important',
                                                            }
                                                        }
                                                    } active={true} direction={orderDirection} onClick={handleSortDa}>
                                                    </TableSortLabel>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" onClick={handleSortDr}>DR
                                                    <TableSortLabel sx={
                                                        {
                                                            '& .MuiTableSortLabel-icon': {
                                                                color: 'white !important',
                                                            },
                                                            '& .MuiTableSortLabel-icon:hover': {
                                                                color: 'blue !important',
                                                            }
                                                        }
                                                    } active={true} direction={orderDirection} onClick={handleSortDr}>
                                                    </TableSortLabel>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" onClick={handleSortPrice}>
                                                    Price&nbsp;(€)
                                                    <TableSortLabel sx={
                                                        {
                                                            '& .MuiTableSortLabel-icon': {
                                                                color: 'white !important',
                                                            },
                                                            '& .MuiTableSortLabel-icon:hover': {
                                                                color: 'blue !important',
                                                            }
                                                        }
                                                    } active={true} direction={orderDirection} onClick={handleSortPrice}>
                                                    </TableSortLabel>
                                                </StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {dataComparator.map((row) => (
                                                <StyledTableRow key={row._id}>
                                                    <StyledTableCell align="left" component="th" scope="row">
                                                        {row.company}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{row.url}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.traffic.includes('k') ? row.traffic.replaceAll("k", "00") : row.traffic}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.domainAuthority}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.domainRef}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.price.includes('€') ? row.price.replaceAll("€", "") : row.price} €</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </>
                        }
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CreateComparator;
