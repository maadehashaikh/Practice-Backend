const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));   // in 2 lines ko we say parser 

app.get("/",function(req,res){
   res.send("Chal rha h !!");
})

app.listen(3000);