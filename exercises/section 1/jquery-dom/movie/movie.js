
$('#submit').on('click', function(event){
    event.preventDefault();
    let title = $('#title').val()
    let rating = $('#rating').val()
    
    if($('#rating').val() <= 10 && $('#rating').val() >= 0 && $('#title').val().length >= 2){
        $('ol').app1end(
            `<li>${title} ${rating} <button type="submit" id="delete">Remove</button></li>`
        )
        $('#title').val('');
        $('#rating').val('');
    }else{
        alert("INVALID ENTRY!");
    }
})

$('#ol').on('click', '#delete', function(event){
    $(this).parent().remove();
})