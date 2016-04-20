$(function () {
//    Cache the window object
    var $window = $(window);

//    Parallax background effect
    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this);   //assigning the object
        $(window).scroll(function () {
            //scroll the backgrund at var speed
            //yPos is a negative value because it's scrolling UP!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            //Final background position
            var coords = '50%' + yPos + 'px';

            //Move the background
            $bgobj.css({ backgroundPosition:coords });
        }); //end window scroll
    });
});