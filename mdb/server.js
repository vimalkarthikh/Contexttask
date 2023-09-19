const express=require('express');
const bodyParser =require('body-parser');
const mongoose=require('mongoose');

const app=express();
const dburl='mongodb://0.0.0.0:27017/admin';
const PORT=3000;

app.use(bodyParser.json());

//define schema
const bookSchema=new mongoose.Schema({
    title:String,author:String,publish:Date
});

const Book=mongoose.model("Book",bookSchema);

mongoose.connect(dburl,{})
.then(()=>console.log('MOngo conection successful'))
.catch((err)=>console.log("Error",err));

app.get('/',(req,res)=>{
    res.status(200).send(`Hello I am the new server`);
})

app.listen(PORT,()=>{console.log(`Server is running in port ${PORT}`);})