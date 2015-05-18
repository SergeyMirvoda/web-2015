function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    canvas.font = "bold 20px segoe UI";
    canvas.fillText("Здесь должна быть Ваша игра", 100, 250);
}

addEventListener("load", initiate);