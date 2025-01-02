import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import './navbar.css';
import { useContext } from 'react';
import { darkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {

    const {toggle, darkMode} = useContext(darkModeContext);
    const {currentUser} = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className='nav-left'>
                <span>CIRCLIFY</span>
                <HomeOutlinedIcon/>
                {darkMode ? <LightModeIcon onClick = {toggle}/> : <DarkModeOutlinedIcon onClick = {toggle}/>}
                <GridViewOutlinedIcon/>
                <div className='nav-search'>
                <SearchOutlinedIcon/>
                <input type = "text" placeholder='search'></input>
                </div>
            </div>
            <div className='nav-right'>
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className='nav-user'>
                <img src = {currentUser.user.profilePic} height={30} width={30} alt=''/>
                    <span>{currentUser.user.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;