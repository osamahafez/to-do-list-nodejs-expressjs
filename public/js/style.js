//const Item = require('../../models/Item');

$(document).ready(function(){
    
    $('input[type=checkbox]').click(function(){
        
        // if the click was made to check the box
        if($(this).prop('checked')){

            var id = $(this).attr('id');
            alert('check box with id '+ id +' is checked');
           
            $.ajax({
                type: 'GET',
                url: '/update',
                data: id,
                success: function() {
                    alert('success');
                },
                error: function() {
                    alert('error');
                }
            });
        }

        // if the click was made to uncheck the box
        else if(!$(this).prop('checked')) {

            var id = $(this).attr('id');
            alert('check box with id '+ id +' is unchecked');

            $.ajax({
                type: 'GET',
                url: '/update',
                data: {id:id, state:'unchecked'},
                success: function() {
                    alert('success');
                },
                error: function() {
                    alert('error');
                }
            });
        }
    });

});