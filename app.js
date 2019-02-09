const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/Item');

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
    
    Item.find({}, function(err, items){
        res.render('home', {items: items});  
    });
    
});

// create new item
app.post('/new', function(req, res){

    let item = new Item();
    item.content = req.body.content;
    item.checked = false;
    item.save();
    res.redirect('/');
});

// update item
app.post('/update', function(req, res){
    
    let id = req.body.id;
    let state = req.body.state;

    if(state == 'checked') {
        Item.updateOne({_id:id}, {checked: true}, function(err){
            if(err) 
                throw err;
            else 
                console.log('item updated')
        });
    }
    else if(state == 'unchecked') {
        Item.updateOne({_id:id}, {checked: false}, function(err){
            if(err) 
                throw err;
            else 
                console.log('item updated')
        });
    }

    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
