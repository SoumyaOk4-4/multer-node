const express = require("express");
const app = express();

const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("<h1>Image Uploader go to /upload</h1>");
});

app.get("/upload", (req, res) => {
    res.render("upload.ejs");
});

app.post("/upload", upload.single('imageInput'), (req, res) => {
    res.send("Image Uploaded");
});

app.listen(5000);
