import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import ShareIcon from '@mui/icons-material/Share';
import './post.css';
import Comments from '../comments/Comments';
import moment from 'moment/moment';

function Post({post}) {

    const [commentsOpen,setCommentsOpen] = useState(false);
    const [liked,setLiked] = useState(false);

    function handleLikes() {
        setLiked(!liked);
    }
    return (
        <div className='post'>
            <div className='container'>
            <div className='user'>
                <div className='userInfo'>
                    <img src= {post.profilePic} height={40} width={40} alt=''/>
                    <div className='details'>
                        <NavLink to = {`/profile/${post.userId}`} style={{textDecoration : "none", color : 'inherit'}}>
                        <span className='name'>{post.name}</span>
                        </NavLink>
                        <span className='date'>{moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className='user-content'>
                <p>{post.desc}</p>
                <img src= {post.img? `http://localhost:8080/uploads/${post.img}` : ""} height={500}/>
            </div>
            <div className='public-interaction-footer'>
                <div className='item'>
                {liked? <FavoriteIcon onClick={handleLikes} style={{color : "red"}}/> : <FavoriteBorderIcon onClick={handleLikes}/>}
                12 likes
                </div>
                <div className='item' onClick = {()=>setCommentsOpen(!commentsOpen)}>
                <SmsIcon/>
                12 Comments
                </div>
                <div className='item'>
                <ShareIcon/>
                Share
                </div>
            </div>
            </div>
            {commentsOpen && <Comments postid = {post.id}/>}
        </div>
    )
}

export default Post;