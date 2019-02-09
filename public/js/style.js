//const Item = require('../../models/Item');

$(document).ready(function(){
    
    $('input[type=checkbox]').click(function(){
        
        // if the click was made to check the box
        if($(this).prop('checked')){

            var id = $(this).attr('id');
            var label = $("label[for='" + id + "']");

            label.css({
                "color": "green", 
                "font-weight": "bold"
            });
            
            // method must be POST request to work
            $.ajax({
                type: 'POST',
                url: '/update',
                data: {id: id,  state: "checked"},
            });
        }

        // if the click was made to uncheck the box
        else if(!$(this).prop('checked')) {

            var id = $(this).attr('id');
            var label = $("label[for='" + id + "']");

            label.css({
                "color": "black",
                "font-weight": "normal" 
            });
        
            // method must be POST request to work
            $.ajax({
                type: 'POST',
                url: '/update',
                data: {id:id, state:"unchecked"},
            });
        }
    });

});