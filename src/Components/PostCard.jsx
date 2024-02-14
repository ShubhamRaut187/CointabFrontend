import React from 'react';
import './Styles/PostCard.css'
function PostCard({post,user}) {
    // console.log(user);
    return (
        <div className='post_card'>
            <h2>{user.Name}</h2>
            <p className='post_title'>{post.title}</p>
            <p className='post_body'>{post.body}</p>
            <p className='post_city'>{user.City}</p>
        </div>
    );
}

export default PostCard;