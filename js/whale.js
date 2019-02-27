$(function(){
    $(document).mousemove(function(e) {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        $('#aa').css("left", mouseX+15).css("top", mouseY+15).html("x:"+mouseX+" y:"+mouseY);
    });
});