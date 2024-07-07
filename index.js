const express = require('express');
const app = express();
const path = require('path');
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));   // in 2 lines ko we say parser 
app.use(express.static(path.join(__dirname , 'public'))); //basically we're trying to say kay har request kay liyay static files yahn dhoondna 
app.set('view engine','ejs');
app.get("/",function(req,res){
   res.render("index");
})
app.listen(3000);

// console.log(__dirname);