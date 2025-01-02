import './leftbar.css';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Courses from '../../assets/11.png';
import Tutorials from '../../assets/12.png';
import Fundraisers from '../../assets/13.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Leftbar() {

    const {currentUser} = useContext(AuthContext);
    return(
        <div className='leftbar'>
        <div className='lb-container'>
            <div className='lb-menu'>
            <div className='lb-user'>
                <img src = {currentUser.user.profilePic} height={30} width={30} alt=''/>
                <span>{currentUser.user.name}</span>
            </div>
            <div className='lb-item'>
                <img src={Friends} height={30} width={30} alt=''/>
                <span>Friends</span>
            </div>
            <div className='lb-item'>
                <img src={Groups} height={30} width={30} alt=''/>
                <span>Groups</span>
            </div>
            <div className='lb-item'>
                <img src={Market} height={30} width={30} alt=''/>
                <span>Marketplace</span>
            </div>
            <div className='lb-item'>
                <img src={Watch} height={30} width={30} alt=''/>
                <span>Watch</span>
            </div>
            <div className='lb-item'>
                <img src={Memories} height={30} width={30} alt=''/>
                <span>Memories</span>
            </div>
            <hr></hr>
            <span>Your shortcuts</span>
            <div className='lb-item'>
                <img src={Events} height={30} width={30} alt=''/>
                <span>Events</span>
            </div>
            <div className='lb-item'>
                <img src={Gaming} height={30} width={30} alt=''/>
                <span>Gaming</span>
            </div>
            <div className='lb-item'>
                <img src={Gallery} height={30} width={30} alt=''/>
                <span>Gallery</span>
            </div>
            <div className='lb-item'>
                <img src={Videos} height={30} width={30} alt=''/>
                <span>Videos</span>
            </div>
            <div className='lb-item'>
                <img src={Messages} height={30} width={30} alt=''/>
                <span>Messages</span>
            </div>
            <hr></hr>
            <span>Others</span>
            <div className='lb-item'>
                <img src={Fundraisers} height={30} width={30} alt=''/>
                <span>Fundraisers</span>
            </div>
            <div className='lb-item'>
                <img src={Tutorials} height={30} width={30} alt=''/>
                <span>Tutorials</span>
            </div>
            <div className='lb-item'>
                <img src={Courses} height={30} width={30} alt=''/>
                <span>Courses</span>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Leftbar;