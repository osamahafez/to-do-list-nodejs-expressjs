const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// database connection
mongoose.connect('mongodb://localhost/todolist',  { useNewUrlParser: true } );


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
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
    res.send(item);
});


app.listen(3000, function() {
    console.log('Listening on port 3000');
});
