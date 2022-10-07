import CardAudit from "../components/CardAudit";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { DataContext } from '../context/data.context';
import styles from '../styles/Home.module.css'

const Audit = () => {
    const { createAudit, updateAudit, card } = useContext(DataContext);

    return (
        <div className={styles.container}>
            <div className={styles.auditcontainer}>

                <Grid container justifyContent="center">
                    <Grid item xs={10} md={5}>
                        <h1>Auditoria Seo</h1>

                        <Box component="form" noValidate onSubmit={createAudit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="audit"
                                        label="Ejemplo: https://tuweb.com"
                                        name="url"
                                        onChange={updateAudit}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Auditoría de tu sitio web
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    {card && <CardAudit />}
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Audit;