window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("returnTop").style.display = "block";
        $("#returnTop").fadeIn(1000);
        document.getElementById("nav").style.backgroundColor = "rgba(30, 30, 30, 0.2)";
    } else {
        document.getElementById("returnTop").style.display = "none";
        $("#returnTop").fadeOut(1000);
        document.getElementById("nav").style.backgroundColor = "transparent";
    }
}