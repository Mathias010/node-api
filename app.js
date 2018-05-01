var express = require("express");
var app = express();
var bodyParser = require ("body-parser");
var users = [
    {
        "id": 10,
        "name": "davi",
        "age": 19
        
    },
    {
        "id": 20,
        "name": "bete",
        "age": 35
        
    },
    {
        "id": 30,
        "name": "carlos rodrigues",
        "age": 33
        
    }
    
];

app.use(bodyParser.json());

app.get ("/user", function (req, res) {

    if(req.query.id){
      var filtro = users.filter(function(user){
          return user.id == req.query.id;
          
      });
      res.send(filtro);
    }else{
      res.send(users);
    }
    
    
});

app.post('/user', function (req, res) {
    users.push(req.body);
    res.send("ok");

});

app.put ("/user/:id", function(req, res){

    var userchange = users.filter(function(user){
        return user.id == req.params.id;
        
    });

    userchange[0].name = req.body.name;
    userchange[0].age = req.body.age;    

    console.log(userchange[0]);

    res.send("ok");
});

app.delete("/user/:id", function (req, res){

    var userRemain = users.filter(function(user){
        return user.id != req.params.id;
        
    });

    users = userRemain;
    res.send("ok");
});

app.listen(3000, function () {
 console.log("example app listening on port 3000!");
});
