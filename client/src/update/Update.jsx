import React, { useState } from "react";
import './update.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {

    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [website,setWebsite] = useState("");
    const [coverPic,setcoverPic] = useState("");
    const [profilePic,setprofilePic] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const formData = new FormData();
    formData.append("name",name);
    formData.append("city", city);
    formData.append("website", website)
    formData.append("coverPic", coverPic)
    formData.append("profilePic", profilePic);

    async function handleClick(e) {
        e.preventDefault();
        try {
           const response = await axios.patch(`http://localhost:8080/users/update/${id}` , formData , {
            headers : {"Content-Type" : "multipart/form-data"}
           }, {
            withCredentials : true
           });
           console.log(response.data);
           navigate(`/profile/${id}`);
        } catch (error) {
            console.log(error);
        }
        finally{
            setName("");
            setCity("");
            setWebsite("");
            setcoverPic("");
            setprofilePic("");
        }
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleCity(e) {
        setCity(e.target.value);
    }

    function handleWebsite(e) {
        setWebsite(e.target.value);
    }

    function handlecoverPic(e) {
        setcoverPic(e.target.files[0]);
    }

    function handleprofilePic(e) {
        setprofilePic(e.target.files[0]);
    }

    return (
        <div className="outer-div">
    <div className="inner-div">
        <h2>Update User</h2>
        <div className="input-div">
            <label>Name:</label>
            <input type="text" placeholder="Enter name" onChange={handleName} />
        </div>
        <div className="input-div">
            <label>City:</label>
            <input type="text" placeholder="Enter city" onChange={handleCity} />
        </div>
        <div className="input-div">
            <label>Website:</label>
            <input type="text" placeholder="Enter website" onChange={handleWebsite} />
        </div>
        <div className="input-div">
            <label htmlFor="coverPic">Cover Picture:</label>
            <div className="custom-file-input">
                <input type="file" id="coverPic" onChange={handlecoverPic} />
                <span id="coverPicLabel">Choose a file...</span>
            </div>
        </div>
        <div className="input-div">
            <label htmlFor="profilePic">Profile Picture:</label>
            <div className="custom-file-input">
                <input type="file" id="profilePic" onChange={handleprofilePic} />
                <span id="profilePicLabel">Choose a file...</span>
            </div>
        </div>
        <div className="button-div">
            <button onClick={handleClick}>Update</button>
        </div>
    </div>
</div>
    )
}

export default Update;