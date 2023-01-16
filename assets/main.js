$('.nav-link ').click(function () {
    $('.nav-link ').removeClass('setActive');
    $(this).addClass('setActive');

});

$('.menuBtn').click(function(){
    $('.nav-right').toggleClass('show-nav-links')
});

$('.bars li .bar').each(function(key, bar){
    let percentage = ($(this).data('percentage') /71.21 ) * 100 + "%";
    console.log(percentage);
    $(this).animate({
        'height' : percentage,
    },1000);
});

