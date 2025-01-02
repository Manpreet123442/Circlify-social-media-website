const {con} = require("../utils/connection");

con.connect(function(error) {
    if(error) throw error;
    console.log("db connected!");
})

const getUser = (req,res) => {
    //todo
    const {id} = req.params;
    // console.log(id);

    const userQuery = "SELECT * FROM users WHERE id = ?"
    con.query(userQuery, [id], function(error,result) {
        if(error) {
            return res.status(500).json({message : "database error!"});
        }
        // console.log(result);
        return res.status(200).json(result);
    })
}

const updateUser = (req,res) => {
    //todo
    const {id} = req.params;
    const {name,city,website,coverPic,profilePic} = req.body;

    const updateQuery = "UPDATE users SET name=?,city=?, website=?, coverPic=?, profilePic=? WHERE id = ? ";

    const values = [
        name,
        city,
        website,
        coverPic,
        profilePic,
        id
    ]

    con.query(updateQuery, values, function(error,result) {
        if(error) {
            return res.status(500).json({message : "Internal server error!"});
        }
        return res.status(200).json({message : result});
    })
}

module.exports = {getUser, updateUser};