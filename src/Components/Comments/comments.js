import React from 'react';
import { Typography, Avatar } from '@material-ui/core';


const comments = (props) => {
    return (
        <div>
             <Typography paragraph>Comments:</Typography>
          
          {
              props.comment.map(comment =><Typography key={comment.id} paragraph style={{border: '1px solid grey', borderRadius:'15px', boxShadow: '5px 5px 10px lightGrey', padding: '10px'}}>
                  <Avatar alt="Remy Sharp" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGmwVZ3vbHoQiz9Q2zC3dDJYJ-uCBNymbYTw&usqp=CAU' />
                    {comment.name}
                    <br/>
                    {comment.email}
                    <br/>
                    {comment.comment}
                    <br/>
                </Typography>)
          }
        </div>
    );
};

export default comments;