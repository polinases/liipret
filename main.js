$('.image_island').each(function() {
    $( this ).hover(
        function() {
            $(this).removeClass("vual")
        },
        function() {
            $(this).addClass("vual")
        }
    )
})