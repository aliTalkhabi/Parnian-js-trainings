var temp
function movement(event) {
    var x = (event.clientX);
    $('.box1').css('clip-path', 'polygon(0 0 , ' + (x / 9) + '% 0 ,' + ((x / 9) - 25) + '% 100%,0 100%)');
    temp = x;
}