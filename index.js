var express = require('express'); 
var app = express();

app.get('/', function (req, res) { 
	res.send('Hello World');
}) 
app.listen(8080,function(){
// Put a friendly message on the terminal
console.log("Friendly NodeJS Server running at http://127.0.0.1:8080/");	
});


