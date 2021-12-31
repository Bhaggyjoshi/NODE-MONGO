// const { text } = require('express');
const express = require('express');
const mongoose = require('mongoose')



// instablishing connection with mongodb

mongoose.connect("mongodb://localhost:27017/Song")
.then(()=>{
    console.log("Mongo connection Succesfull")
})
.catch((err)=>{
    console.log(err)
})

// creating schema for Database collection

let songSchema = new mongoose.Schema({
    name:{type:String, required:true},
    artist_name:{type:String,required:true},
    album_name:{type:String,required:true},
    song_writer:{type:String,required:true},
    banner:{type:String,required:true},
    rating:{type:Number,required:true},
    song_url:{type:String,required:true}
})

// model for song_info collection
const songModel = new mongoose.model("Song_info",songSchema);

// create object
const app = express();
app.use(express.json())

// endpoint for song api
app.post("/Song",(req,res)=>{
    let song = req.body;
     
   
    let songObj = new songModel(song);
    songObj.save()
    .then(()=>{
        res.send("Song Created Successfully!")
    })
    .catch((err)=>{
        console.log(err);
        res.send("some Error ")
    })
})


// endpoint for song api for get 

app.get("/Song",(req,res)=>{
    
})

app.listen(8000);