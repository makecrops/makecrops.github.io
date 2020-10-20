window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("returnTop").style.display = "block";
        $("#returnTop").fadeIn(1000);
    } else {
        document.getElementById("returnTop").style.display = "none";
        $("#returnTop").fadeOut(1000);
    }
}

// When the user clicks on the button, scroll to the top of the document
$("#returnTop").click(function () {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    });
});