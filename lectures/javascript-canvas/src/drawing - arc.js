function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');

    canvas.beginPath();
    canvas.arc(200,200,75,0,Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
    canvas.stroke();
    var radFromDeg = Math.PI / 180 * 60;
    
    //canvas.arc(0,200,75,0, radFromDeg, false);
    //canvas.stroke();
}

addEventListener("load", initiate);