const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");

app.use((req,res,next) => {
    // console.log(req.cookies);
    next();
})
app.use(cors({credentials : true, origin : "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/", authRoutes);
app.use("/", postRoutes);
app.use("/", commentRoutes);
app.use("/", userRoutes);

app.listen(8080,()=> {
    console.log("listening at port 8080");
});