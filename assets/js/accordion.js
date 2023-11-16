$(function(){
    $('.flip').click(function(){
        $('.panel').slideUp('slow');
        $(this).next().slideToggle('slow');
    });
});