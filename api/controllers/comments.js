const {con} = require("../utils/connection");
const moment = require("moment");
const jwt = require("jsonwebtoken");

con.connect(function(error){
    if (error) throw error;
    console.log("db connected!");
})

const getComments = (req,res) => {
    //todo
    const commentsQuery = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON(u.id = c.commentuserId) WHERE c.postid = ? ORDER BY c.createdAt DESC`;
    // console.log(req.query.postid);
    con.query(commentsQuery, [req.query.postid], function(error,result){
        if (error) {
            // console.log(error);
            return res.status(500).json({message : "database error!"});
        }
        return res.status(200).json({message : result});
    })
}

const addComments = async function(req,res) {
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

        const values = [
            req.body.desc,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
            req.body.postid
        ]

        // console.log(values);

        const addPost = "INSERT INTO comments (`desc`,createdAt, commentuserId, postid) VALUES(?,?,?,?)";

        con.query(addPost,values, (error,data)=> {
        if (error) {
            return res.status(500).json({message : "Internal server error!" + error});
        }
        return res.status(200).json(data);
    })
    })
}

module.exports = {getComments,addComments};
