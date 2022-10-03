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

    return (
        <>
            <h1>Comparador De Enlaces</h1>

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
                                    <StyledTableCell align="left">Visitas (mes)</StyledTableCell>
                                    <StyledTableCell align="left">DA</StyledTableCell>
                                    <StyledTableCell align="left">DR</StyledTableCell>
                                    <StyledTableCell align="left">Precio</StyledTableCell>
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
                                        <StyledTableCell align="left">{row.traffic}</StyledTableCell>
                                        <StyledTableCell align="left">{row.domainAuthority}</StyledTableCell>
                                        <StyledTableCell align="left">{row.domainRef}</StyledTableCell>
                                        <StyledTableCell align="left">{row.price} €</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </>
            }


        </>
    )
}

export default CreateComparator;

