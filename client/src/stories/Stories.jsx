import { useContext } from 'react';
import './stories.css'
import { AuthContext } from '../context/AuthContext';

function Stories() {
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id : 1,
            name : 'Manpreet',
            image : "https://images.unsplash.com/photo-1729472970412-748cf0b98048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id : 2,
            name : 'Manpreet',
            image : "https://images.unsplash.com/photo-1729472970412-748cf0b98048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id : 3,
            name : 'Manpreet',
            image : "https://images.unsplash.com/photo-1729472970412-748cf0b98048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id : 4,
            name : 'Manpreet',
            image : "https://images.unsplash.com/photo-1729472970412-748cf0b98048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return(
        <div className='stories'>
            <div className='story'>
                    <img src = {currentUser.user.profilePic} height = {200} width = {150} alt = ''/>
                    <span>{currentUser.user.name}</span>
                    <button>+</button>
                </div>
            {stories.map((e)=> (
                <div className='story' key={e.id}>
                    <img src = {e.image} alt = ''/>
                    <span>{e.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;