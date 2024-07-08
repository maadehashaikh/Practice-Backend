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

app.get("/profile/:name",function(req,res){  // ab : kay sath wala word variable ban gya h and it is now dynamically working 
   res.send(`Welcome , ${req.params.name}`);
})

app.get("/profile/:name/:age",function(req,res){ 
   res.send(`Welcome , ${req.params.name} ap ki age ${req.params.age} hay na ?`);
})


app.listen(3000);

// console.log(__dirname);