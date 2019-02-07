const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// adding the public folder 
app.use(express.static('public'));

// render the ejs template engine
app.set('views', './views'); 
app.set('view engine', 'ejs'); 


// Home route
app.get('/', function(req, res){
    res.render('home');
});

app.post('/new', function(req, res){

    let item = req.body.item;

});


app.listen(3000, function() {
    console.log('Listening on port 3000');
});
