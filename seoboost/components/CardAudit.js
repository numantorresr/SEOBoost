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
    const { newData } = useContext(DataContext);
    const [expanded, setExpanded] = React.useState(false);
    console.log(newData);

    // const tiempoTranscurrido = Date.now();
    // const hoy = new Date(tiempoTranscurrido);
    // hoy.toDateString();
    // console.log(date);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (


        <Card sx={{ maxWidth: 700 }}>
            <CardHeader
                avatar={

                    <CardMedia
                        component="img"
                        // height="100"
                        // width="50"
                        sx={{ width: '100%' }}
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
            // subheader={date}
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
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


    );
}
