import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import KeywordAxios from '../services/keywordAxios';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Spinner from '../components/Spinner';

const SearchKeywords = () => {

    const [newData, setNewData] = useState({});
    const [copyNewData, setCopyNewData] = useState({});

    const [card, setCard] = useState(false);

    const createAudit = (eventHTML) => {
        eventHTML.preventDefault();
        KeywordAxios
            .keywords(copyNewData)
            .then((response) => {
                setNewData(response)
                setCard(true)
            });

    };

    const updateAudit = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setCopyNewData({ ...copyNewData, [name]: value });
    };

    return (


        <Grid container justifyContent="center">
            <Grid xs={8}>

                <h1>Keywords Sugeridas</h1>

                <Box component="form" noValidate onSubmit={createAudit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ mb: 3 }}
                                required
                                fullWidth
                                id="search"
                                label="Introduce tu keyword"
                                name="search"
                                onChange={updateAudit}
                            />
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Introduce tu país(ej: es para España, us para Estados Unidos o uk para Reino Unido..)"
                                    name="country"
                                    onChange={updateAudit}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Buscar Keywords
                    </Button>




                    {card &&
                        newData.map((keyword) => (
                            <>
                                <List >
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <CheckCircleIcon ></CheckCircleIcon>
                                        </ListItemAvatar>
                                        <ListItemText
                                            align="center"
                                            primary={keyword}
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            </>
                        ))}







                </Box>
            </Grid>
        </Grid>





    )
}

export default SearchKeywords;