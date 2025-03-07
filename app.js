const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.set('view engine','ejs' );

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var today = new Date();
  var options ={

    day: "numeric",
    month: "long",
    weekday: "long"
  }


var day = today.toLocaleDateString("en-US",options);
res.render("list",{listTitle: day, newItemNames:items});
});


app.post("/",function(req,res){

  //console.log(item);
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("server started");
});
