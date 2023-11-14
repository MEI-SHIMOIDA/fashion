$(function(){
    $(".btn-gnavi").on("click", function(){
        var rightVal = 0;
        if($(this).hasClass("open")){
            rightVal = -300; /*バーガー押す前に右−300に隠しとく*/
            $(this).removeClass("open");
        }else{
            $(this).addClass("open");
        }
        $("#global-navi").stop().animate({
            right: rightVal
        }),200;
    });
});