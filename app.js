const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// adding the public folder 
app.use(express.static('public'));

// render the ejs template engine
app.set('views', './views'); 
app.set('view engine', 'ejs'); 


// Home route
app.get('/', function(req, res){
    res.render('home');
});

