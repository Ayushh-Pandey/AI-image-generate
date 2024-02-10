const path = require('path');
const express = require("express");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");

//enable cors
app.use(cors());

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}) );

//set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/openai',require('./routes/openAiRoutes'));
app.get('/',(req,res)=>{
    console.log("done");
    res.send('hello');
})
app.listen(port,()=>console.log(`server is live on http://localhost:${port}`));