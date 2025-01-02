import { useContext, useState, useEffect } from 'react';
import './comments.css';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment';
import axios from 'axios';

function Comments({postid}) {

    const [desc,setDesc] = useState("");
    const [comments,setComments] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    const {currentUser} = useContext(AuthContext);

    const getComments = async()=> {
        try {
            const response = await axios.get(`http://localhost:8080/getComments?postid=${postid}`)
            console.log(response.data.message);
            setComments(response.data.message);
        } catch (error) {
           console.log(error); 
        }
        finally {
        setisLoading(false);
        }
    }

    useEffect(()=> {
        getComments();
    },[postid]);


    async function handleClick(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/addComments", {
                desc : desc,
                postid : postid
            }, {
                withCredentials : true
            })
            return response.data;
        } catch (error) {
            console.log(error);
        }
        finally{
            setDesc("");
        }
    }

    function handleDesc(e) {
        setDesc(e.target.value);
    }

    return (
        <div className='comments'>
            <div className='write'>
                <img src = {currentUser.user.profilePic} height={40} width={40} alt=''/>
                <input type = "text" placeholder='write something' onChange={handleDesc}/>
                <button onClick={handleClick}>Send</button>
            </div>
            {isLoading ? ("Loading...") : (comments.map((e)=>(
                <div className='comment' key={e.id}>
                    <img src={e.profilePic ? e.profilePic : ""} height={40} width={40} alt=''/>
                    <div className='info'>
                        <span>{e.name}</span>
                        <p>{e.desc}</p>
                    </div>
                    <span className='date'>{moment(e.createdAt).fromNow()}</span>
                </div>
            )))}
        </div>
    );
}

export default Comments;