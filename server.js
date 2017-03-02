var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = 3000;


app.use(express.static(__dirname + "/public"));
app.listen(port,function(){
  console.log("Server running on port 3000"); 
});

app.post('/user', function(req, res){
  console.log(req.body);
              res.json({'msg':'log in successfull','vcolor':'red','CStatus':true});
})