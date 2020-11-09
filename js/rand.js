var i = 0;

function stringGen() {
    var doc = document.getElementById("randStr");
    doc.innerHTML = Math.random().toString(16).substring(2, 15);
    var color = ["red", "green", "blue"];
    doc.style.color = color[i];
    i = (i + 1) % color.length;
}

setInterval(stringGen, 500);