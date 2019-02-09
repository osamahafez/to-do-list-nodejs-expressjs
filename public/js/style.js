//const Item = require('../../models/Item');

$(document).ready(function(){
    
    $('input[type=checkbox]').click(function(){
        
        // if the click was made to check the box
        if($(this).prop('checked')){

            var id = $(this).attr('id');
            //alert('check box with id '+ id +' is checked');
            
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
            //alert('check box with id '+ id +' is unchecked');

            // method must be POST request to work
            $.ajax({
                type: 'POST',
                url: '/update',
                data: {id:id, state:"unchecked"},
            });
        }
    });

});