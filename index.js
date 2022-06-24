const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bcrypt = require('bcrypt')




const app = express()
dotenv.config();
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))

app.get('/' , (req, res) =>{

    res.send("Got through fine!!!");
})



const port = process.env.PORT || 5000;
app.listen(port , () =>{
console.log(`App started on port ${port}`);
})