const express =require("express");
const bodyParser=require("body-parser");

const app =express();

const PORT =3001;

app.use(bodyParser.json());

let items=[{id:1,age:23,name:"Vimal"},{id:2,age:25,name:"Gopi"}];

app.get("/getItems",(req,res)=>{res.json();});

app.post("/postItems",(req,res)=>{
    const newItems=req.body;
    if(!newItems.id||!newItems.age||!newItems.name){
        return res.status(500).send("Enter ID , AGE , Name is maandatory");
    }
    items.push(newItems);

    res.status(201).send(`Data added in ID: ${newItems.id}`)
})

app.listen(PORT,()=>{console.log(`SERVER IS Running in: ${PORT}`);})