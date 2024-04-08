const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/EvCharging', {
   
});

const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const ContactUs1 = new mongoose.Schema({
    name:String,
    email:String,
    tel:String,
    textarea:String
},{
    collection:"ContactUs"
})

mongoose.model("ContactUs",ContactUs1)

const contactus3= mongoose.model("ContactUs")
app.post('/contact_us', async(req, res) => {
   const {name,email,tel,textarea} = req.body

   try { await contactus3.create({

    name:name,
    email:email,
    tel:tel,
    textarea:textarea
      
   });  res.send({status:"Ok"})}
   
   catch(error){
    res.send({status:"Error"})
   }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log("Server Started on port 3000");
});
