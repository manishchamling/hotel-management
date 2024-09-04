require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const indexRouter= require("./routes");

const PORT= Number(process.env.PORT) || 8000;

mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log("Database connected... ");
})
.catch((e) => {
    console.log("Database error")
});

app.use(express.json());
app.use("/resources", express.static("public"));
app.use(morgan("tiny"));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
    const errMsg = err ? err.toString: "Something went wrong";
    res.status(500).json({data: null, msg: errMsg}); 
});

app.listen(PORT, () => {
   console.log(`Application is running in PORT ${PORT}`);
})