// When the user clicks on the button, scroll to the top of the document
$("#returnTop").click(function () {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    });
});