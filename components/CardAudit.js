import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataContext } from '../context/data.context';
import { useContext } from 'react';
import Spinner from '../components/Spinner';
import { Grid, Link } from '@mui/material';
import userAxios from '../services/userAxios';
import { AuthContext } from '../context/auth.context';
import { blue, pink } from '@mui/material/colors';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardAudit() {
    let ColorBlue = { color: blue[500] }
    let ColorPink = { color: pink[500] }
    const { newData, spinner } = useContext(DataContext);
    const [expanded, setExpanded] = React.useState(false);
    const [color, setColor] = React.useState(ColorBlue);
    const { user } = useContext(AuthContext);



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addFavoriteClick = () => {
        setColor(ColorPink)
        userAxios
            .addAudit(user?._id, newData)
            .then(() => {
            })
    }

    return (

        spinner ? <Spinner /> :

            <Grid container justifyContent="center">
                <Grid xs={12}>
                    <Card>
                        <CardHeader
                            avatar={

                                <CardMedia
                                    component="img"
                                    image={newData.metadata.favicon && newData.metadata.favicon}
                                    alt={newData.metadata.site_name}
                                />

                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={newData.metadata.site_name}
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <b>Descripción</b>: {newData.metadata.description.data}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <b>Meta Titulo</b>: {newData.metadata.title.data}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {user &&
                                <IconButton onClick={addFavoriteClick} aria-label="add to favorites">
                                    <FavoriteIcon sx={{ color }} />
                                </IconButton>
                            }
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="h6"><b>Detalles</b></Typography>
                                <hr></hr>
                                <Typography variant="subtitle1">
                                    <b>Robots</b>: {newData.metadata.robots}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Canonical</b>: {newData.metadata.canonical}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Encabezados</b>:
                                    <b>H1</b>: {newData.content.headings.h1.length} |
                                    <b>H2</b>: {newData.content.headings.h2.length} |
                                    <b>H3</b>: {newData.content.headings.h3.length}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Tipo</b>: {newData.metadata.contentType}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Tiempo de respuesta</b>: {newData.http.responseTime}
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Enlaces internos dofollow</b>: {newData.links.summary.dofollow} de los cuales {newData.links.summary.seoFriendly} son seoFriendly.
                                </Typography>
                                <Typography variant="subtitle1">
                                    <b>Enlaces externos dofollow</b>: {newData.links.summary.externals}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <Grid sx={{ mt: 3 }} container justifyContent="center">
                        <Grid item>
                            <b>Puedes guardar los resultados en tu perfil iniciando sesión <Link href="/login" variant="body2">
                                aquí.
                            </Link></b>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


    );
}
