function openSideNav() {
    document.getElementById("contentSidebar").style.width = "250px";
    document.getElementById("nav").style.marginLeft = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSideNav() {
    document.getElementById("contentSidebar").style.width = "0";
    document.getElementById("nav").style.marginLeft = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function onoff() {
    currentvalue = document.getElementById('sidebario').value;
    if (currentvalue == "open") {
        document.getElementById("sidebario").value = "close";
        openSideNav();
    } else {
        document.getElementById("sidebario").value = "open";
        closeSideNav();
    }
}