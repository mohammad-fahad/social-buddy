import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    
    root : {
        
        maxWidth: 300,
        float: 'left',
        margin: '10px',
        borderRadius: '15px',
        boxShadow: '5px 5px 10px lightGrey',
        height: '580px',
        marginLeft: 50,
        display:'grid'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Wall = (props) => {
    const { id, name, email, title, body } = props.pst;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Container height="md" key={props.id}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src='https://avatars0.githubusercontent.com/u/63115051?s=460&u=c1eb0679735833518f3e9ca9b17e4f70fd263bc7&v=4' className={classes.avatar}>

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Mohammad Fahad"
                    subheader="September 7, 2020"
                />
                <CardMedia
                    className={classes.media}
                    image={`https://picsum.photos/200/300?random=${id}`}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                        <br />
                        {body}
                        <br />
                        
                    </Typography>

                </CardContent>
                   
                <Link to={'/details/'+id} style={{textDecoration: 'none', marginTop:'20px'}}> <br/> <br/>
                            <Button variant="contained" color="primary">View Details</Button>
                        </Link>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    
                        <ShareIcon />
                        
                    </IconButton>
                    
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>


            </Card>
        </Container>
    );
};

export default Wall;