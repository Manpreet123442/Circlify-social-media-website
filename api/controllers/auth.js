const {con} = require('../utils/connection');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

con.connect(function(error) {
    if(error) throw error;
    console.log("db connected!");
})

const register = async function(req,res) {
    try {
        //declare variables
        const {username,email,password,name} = req.body;

         //ensure that password should not be empty
         if(!password) {
            return res.status(400).json({error : "password is required!"});
        }

        //check if user already exists
        const checkUser = "SELECT * FROM users WHERE username = ?";
        con.query(checkUser, [username], async function(error,result) {
            if (error) {
                return res.status(500).json({error : "database error!"});
            }
            if(result.length>0) {
                return res.status(400).json({message : "user already exists!"});
            }

            //hash password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password,salt);

            //insert user
            const insertUser = "INSERT INTO users (username,email,password,name) VALUES(?,?,?,?)";
            con.query(insertUser,[username,email,hashedPassword,name], async function(error,result) {
                if (error) {
                return res.status(500).json({error : "database error during registration!"});
                }
                
                return res.status(200).json({message : "user successfully registered!"});
            })
        })
    } catch (error) {
        return res.status(500).json({message : "error during registration!"});
    }
};

const login = async function(req,res) {
    const checkLogin = "SELECT * FROM users WHERE username = ?";
     //declare variables
     const {username} = req.body;

     //check login whether user exists or not
     con.query(checkLogin, [username], async function(error,result){
         if (error) {
             return res.status(500).json({error : "database error!"});
         }
         if(result.length === 0) {
             return res.status(404).json({message : "user not found!"});
         }
 
         const user = result[0];
 
         //check password 
         const isPasswordValid = bcrypt.compareSync(req.body.password,user.password);
 
         if(!isPasswordValid) {
             return res.status(400).json({message : "invalid username and password"});
         }
 
         //generate a token
         const token = jwt.sign({id : user.id}, "wxydveyuejkvitiut", {expiresIn : "1h"});
 
         const {password : _ , ...others} = user;
 
         //generate a cookie
         return res.cookie("authToken", token, {httpOnly : true , secure : false})
                   .status(200).json({message : "user successfully loggedin!", user : others});
     })
};


const logout = (req,res)=> {
    //todo
    try {
        res.clearCookie("authToken", {
            httpOnly : true,
            secure : true,
            sameSite : "none"
        }).status(200).json("user has been logout!");
    } catch (error) {
        console.error("Error during logout:", error.message);
        res.status(500).json({ message: "An error occurred while logging out." });
    }
}

module.exports = {register,login, logout};