import React, { useState } from 'react';
// import { makeRequest } from '../axios';
// import { useMutation, useQueryClient } from 'react-query';
import './share.css';
import Map from "../assets/map.png";
import Image from "../assets/img.png";
import Friends from "../assets/friend.png";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Padding } from '@mui/icons-material';

function Share() {

    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);


    async function handleClick(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file",file);
            formData.append("desc",desc);
            await axios.post("http://localhost:8080/addPosts", formData , {
                headers : {
                    "Content-Type" : "multipart/form-data"
                },
                withCredentials : true
            })
            .then((response)=> {
                console.log(response.data);
            })
        } catch (error) {
           console.log(error); 
        }
    }

    // const queryClient = useQueryClient();

    // const upload = async () => {
    //     try {
    //         const formData = new FormData();
    //         formData.append("file",file);
    //         const res = await makeRequest.post("addPosts",  formData, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
    //         return res.data
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const mutation = useMutation((newPost) => {
    //     return makeRequest.post("addPosts", newPost)
    // },{
    //     onSuccess : () => {
    //         queryClient.invalidateQueries(["addPosts"]);
    //     }
    // })

    // async function handleClick(e) {
    //     e.preventDefault();
    //     let imgURL = null;
    //     if (file) imgURL = await upload();
    //     mutation.mutate({desc, img : imgURL});
    // }

    function handleFile(e) {
        setFile(e.target.files[0]);
    }

    function handleDesc(e) {
        setDesc(e.target.value);
    }

    return (
        <div id="share-div">
            <div id="share-div1">
                <img src={currentUser.user.profilePic} height={30} width={30} alt='profile-img' id="share-pro-img" />
                <input type="text" placeholder={`what's on your mind ${currentUser.user.name} ?`} onChange={handleDesc} />
            </div>
            <hr></hr>
            <div id="share-div2">
                <div id="share-div3">
                    <div className='share-img'>
                        <input type="file" id="file" name="file" style={{ display: "none" }} onChange={handleFile} />
                        <label for="file" style={{ cursor: "pointer" }}>
                            {file ? <img src= {URL.createObjectURL(file)} height={30} width={30} style={{borderRadius : "50%"}}/> : <img src={Image} height={30} width={30} alt='map' /> }
                        </label>
                        <span>Add Image</span>
                    </div>
                    <div className='share-img'>
                        <img src={Map} height={30} width={30} alt='map' />
                        <span>Add Place</span>
                    </div>
                    <div className='share-img'>
                        <img src={Friends} height={30} width={30} alt='map' />
                        <span>Tag Friends</span>
                    </div>
                    <div>
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share