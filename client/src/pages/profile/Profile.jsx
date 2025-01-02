import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink, useParams } from 'react-router-dom';
import './profile.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Posts from '../../posts/Posts';
import axios from 'axios';

function Profile() {

    const {currentUser} = useContext(AuthContext);
    const [users,setUsers] = useState("");
    const {id} = useParams();
    // console.log(id);

    const fetchUser = async() => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`)
            setUsers(response.data[0]);
            console.log(users);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchUser();
    },[])

    return(
        <div className='profile'>
            <div className="images">
                <img src = {users.coverPic} alt='' className='cover'/>
                <img src = {users.profilePic} alt='' className='profile-img'/>
            </div>
            <div className='profile-con'>
                <div className="u-info">
                    <div className="pro-left">
                        <NavLink>
                            <FacebookIcon fontSize='large'/>
                        </NavLink>
                        <NavLink>
                            <InstagramIcon fontSize='large'/>
                        </NavLink>
                        <NavLink>
                            <TwitterIcon fontSize='large'/>
                        </NavLink>
                        <NavLink>
                            <LinkedInIcon fontSize='large'/>
                        </NavLink>
                        <NavLink>
                            <PinterestIcon fontSize='large'/>
                        </NavLink>
                    </div>
                    <div className="pro-center">
                        <span>{users.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>{users.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>{users.website}</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="pro-right">
                        <EmailIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
            </div>
            <Posts/>
        </div>
    );
}

export default Profile;