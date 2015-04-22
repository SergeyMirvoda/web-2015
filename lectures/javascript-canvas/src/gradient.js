function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    var gradient = canvas.createLinearGradient(0, 0, 10, 100);
    gradient.addColorStop(0.5, '#0088FF');
    gradient.addColorStop(1, '#FF0000');
    canvas.fillStyle = gradient;

    canvas.fillRect(150, 10, 200, 100);
    //!!!Градиент отрисовывается относительно поверхности, а не прямоугольника
    canvas.fillRect(400, 10, 100, 100);

    canvas.fillRect(400, 150, 200, 100);
}

addEventListener("load", initiate);