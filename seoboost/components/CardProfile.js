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
import { useContext } from 'react';
import { Grid } from '@mui/material';
import userAxios from '../services/userAxios';
import { AuthContext } from '../context/auth.context';
import { pink } from '@mui/material/colors';


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

// lo tienes por props la función
export default function CardProfile({ dataUser, callUser }) {

    const { searches } = dataUser
    let ColorPink = { color: pink[500] }
    const { user } = useContext(AuthContext);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const removeFavoriteClick = (card) => {
        userAxios
            .removeAudit(user?._id, card)
            .then(() => {
                // ejecutar aquí la función de axios
                callUser()
                // setSearches(searches)
            })
    }

    return (

        <Grid container justifyContent="center">
            <Grid item xs={10}>
                {
                    searches.map((card) => (

                        <Card sx={{ mt: 3, mb: 3 }}>
                            <CardHeader
                                avatar={

                                    <CardMedia
                                        component="img"
                                        image={card.metadata.favicon && card.metadata.favicon}
                                    />

                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={card.metadata.site_name}
                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Descripción</b>: {card.metadata.description.data}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Meta Titulo</b>: {card.metadata.title.data}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                {user &&
                                    <IconButton onClick={() => removeFavoriteClick(card)} aria-label="add to favorites">
                                        <FavoriteIcon sx={ColorPink} />
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
                                        <b>Robots</b>: {card.metadata.robots}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Canonical</b>: {card.metadata.canonical}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Encabezados</b>:
                                        <b>H1</b>: {card.content.headings.h1.length} |
                                        <b>H2</b>: {card.content.headings.h2.length} |
                                        <b>H3</b>: {card.content.headings.h3.length}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Tipo</b>: {card.metadata.contentType}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Tiempo de respuesta</b>: {card.http.responseTime}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Enlaces internos dofollow</b>: {card.links.summary.dofollow} de los cuales {card.links.summary.seoFriendly} son seoFriendly.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <b>Enlaces externos dofollow</b>: {card.links.summary.externals}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                    ))
                }
            </Grid>
        </Grid>






    );
}
