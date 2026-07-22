const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());


// Multer Configuration
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },

});

const upload = multer({ storage });


// Home Route
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});


// Prediction Route
app.post("/predict", upload.single("image"), (req, res) => {

    res.json({
        status: "Fresh",
        confidence: "96%",
        message: "Image uploaded successfully!"
    });

});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});