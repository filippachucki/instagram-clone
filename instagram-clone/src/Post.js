import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post() {
  return (
    <div className="post">
        <div className='post__header'>
        <Avatar
            className='post__avatar'
            alt='filact'
            src="/static/images/avatar/1.jpg"
        />
        
        <h3>Username</h3>
        </div>

        <img className="post__image" src= "https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png" alt='Post'></img>

        <h4 className='post__text'><strong>Username: </strong> caption</h4>

    </div>
  )
}

export default Post