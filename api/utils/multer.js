const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null, path.join(__dirname,"../uploads"))
    },
    filename : function(req,file,cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

module.exports = multer({
    storage : storage
});