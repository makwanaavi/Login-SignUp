const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/home", (req, res) => {
  res.send("Hello World!");
});


app.get('/about', (req, res)=>{
    res.send("About Page")
})
