const mongoose = require('mongoose');

const Schema = mongoose.Schema;

item_schema = new Schema({

    content: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }

});

const Item = mongoose.model('Item', item_schema);

module.exports = Item;