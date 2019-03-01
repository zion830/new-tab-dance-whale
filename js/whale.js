$(function () {
    // 마우스 커서 따라다니는 효과
    $(document).mousemove(function (e) {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        $('#whale-img').css("left", mouseX).css("top", mouseY).html("x:" + mouseX + " y:" + mouseY);
    });
});