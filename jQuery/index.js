$(document).ready(function () {
    //manipulation();
    listManipulation();
    eventHandling();
})

function listManipulation() {
    $('ul').before('<p>Lista</p>');
    $('li.active').prepend("Dan ");
    $('li.active').append('.');
    $('li:last').after('<li>Cetvrti</li>')

    $('li.active').attr('id', 'active-item');

    $('li:last').addClass('active');
    $('li:last').removeClass('active');

    $('li').each(function(index, element) {
        console.log(index);
        if($(element).is('#active-item')) {
            $(element).css({'background-color':'yellow', 'color':'green'});
        } else {
            $(element).css({'background-color':'red', 'color':'blue'});
        }
    });
}

function eventHandling() {
    $('#active-item').on('click', function(event) {
        $('li:last').html('<p>Novi</p>')
        $('li:first').text('Dan prvi');
    })

    $('#active-item').next().on('click', function() {
        $('li:last').html('Cetvrti')
        $('li:first').text('Prvi')
    })
}

function submitInput(event) {
    var inputValue = $('input').val();
    if($.isNumeric(inputValue)) {
        alert('Vrednost broja je: '+inputValue)
    } else {
        alert(inputValue);
    }
}
