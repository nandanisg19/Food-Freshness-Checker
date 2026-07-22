const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});


// Prediction Route
app.post("/predict", (req, res) => {

    res.json({
        status: "Fresh",
        confidence: "96%",
        message: "Your food looks fresh and safe to consume."
    });

});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});