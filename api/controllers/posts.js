const {con} = require("../utils/connection");
const jwt = require("jsonwebtoken");
const moment = require("moment");

con.connect(function(error) {
    if (error) throw error;
    console.log("db connected!");
});

const getPosts = async function(req,res) {
    //todo
    const token = req.cookies.authToken;
    // console.log(token);
    if (!token) {
        return res.status(401).json({message : "token not found!"});
    }

    jwt.verify(token, "wxydveyuejkvitiut", (error,userInfo)=> {
        if (error) {
            return res.status(403).json({message : "token is not valid!"});
        }

        const query = "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON(u.id = p.userId) LEFT JOIN relationships AS r ON(p.userId = r.followedUserId)  WHERE r.followerUserId = ? OR p.userId = ?";

        con.query(query, [userInfo.id, userInfo.id], (error,data)=> {
        if (error) {
            return res.status(500).json({message : "Internal server error!"});
        }
        return res.status(200).json(data);
    })
    })
}

const addPosts = async function(req,res) {
    //todo
    const token = req.cookies.authToken;
    // console.log(token);

    if (!token) {
        return res.status(401).json({message : "token not found!"});
    }

    jwt.verify(token, "wxydveyuejkvitiut", (error,userInfo)=> {
        if (error) {
            return res.status(403).json({message : "token is not valid!"});
        }

        const imagePath = req.file? req.file.filename : null

        const values = [
            req.body.desc,
            imagePath,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            
        ]

        // console.log(values);

        const addPost = "INSERT INTO posts (`desc`,img,userId,createdAt) VALUES(?,?,?,?)";

        // console.log(userInfo);
        // console.log(req.body.desc,req.body.img,moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),userInfo.id);

        con.query(addPost,values, (error,data)=> {
        if (error) {
            return res.status(500).json({message : "Internal server error!" + error});
        }
        return res.status(200).json(data);
    })
    })
}

module.exports = {getPosts,addPosts}