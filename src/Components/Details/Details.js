import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  root: {
    fullHeightCard: {
      height: "100%",
      flexDirection: "column",
    },
    marginTop: 50
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


const Details = (props) => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const [comment, setComment] = useState([]);


  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(api)
      .then(res => res.json())
      .then(data => setPostDetails(data));
  }, [])

  useEffect(() => {
    const api = `http://jsonplaceholder.typicode.com/comments?postId=${id}`
    fetch(api)
      .then(res => res.json())
      .then(data => setComment(data));


  }, [])




  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Container maxWidth="md" key={id}>
      <Card className={classes.fullHeightCard} spacing={4} style={{ borderRadius: '15px', boxShadow: '5px 5px 10px lightGrey' }}>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src='https://avatars0.githubusercontent.com/u/63115051?s=460&u=c1eb0679735833518f3e9ca9b17e4f70fd263bc7&v=4' className={classes.large} />

          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title='Mohammad Fahad'
          subheader="September 7, 2020"
        />
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/200/300?random=${postDetails.id}`}
          title="Paella dish"
        />

        <CardContent>
          <Typography color="textPrimary" component="p">
            {postDetails.email}
            <br />
            {postDetails.body}
          </Typography>
        </CardContent>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              {
                comment.map(comment => <Typography key={comment.id} paragraph style={{ borderRadius: '15px', boxShadow: '5px 5px 10px lightGrey', padding: '10px', display: 'flex', margin: '10px' }}>
                  <Avatar style={{ marginRight: '20px', marginTop: '28px' }} alt="Remy Sharp" src={`https://picsum.photos/200/300?random=${comment.id}`} className={classes.large} />
                  {comment.name}
                  <br />
                  {comment.email}
                  <br />
                  {comment.body}
                  <br />
                   {/* Customized icons */}
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Typography>)
              }

            </Typography>




          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default Details;