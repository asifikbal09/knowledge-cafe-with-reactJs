import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css';


const Blogs = (props) => {
    const {name , publish, readTime , userImg, picture , title} = props.blog
    const {onRead, bookmark}=props;
    return (
        <div className='blog'>
            <img src={picture} alt="" />
            <div className='info'>
                <div className='user-info'>
                    <img src={userImg} alt="" />
                    <div className='name-date'>
                    <p>{name}</p>
                    <small>{publish}</small>
                    </div>

                </div>
                <div>
                <small>{readTime} min read <button onClick={()=>bookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button> </small>

                </div>

            </div>
            <h3>{title}</h3>
            <button onClick={()=>onRead(props.blog)}>Mark as read</button>
        </div>
    );
};

export default Blogs;