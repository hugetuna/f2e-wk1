var i;

document.getElementById("icon1").onclick = aaa;
function aaa() {
    document.getElementById("body").style.backgroundImage = "url(./images/bg2.png)";
    document.getElementById("photo").src = "./images/photo2.jpg";

    for (i = 1; i <= 6; i++) {
        document.getElementById("box" + i).className = "xxx";
    }
}

document.getElementById("icon2").onclick = bbb;
function bbb() {
    document.getElementById("body").style.backgroundImage = "url(./images/bg1.png)";
    document.getElementById("photo").src = "./images/photo1.jpg";

    for (i = 1; i <= 6; i++) {
        document.getElementById("box" + i).className = "box";
    }
}