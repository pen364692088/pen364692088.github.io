$(document).ready(function(){
$("#onload").css({display:"none"});
$("#logo img").mouseenter(function(){
    var src=$(this).attr("src");
    $(this).attr("src","images/logo_2.png");
    }).mouseleave(function(){
    var src=$(this).attr("src");
    $(this).attr("src","images/logo.png");
    })
function light(){
    $("#logo_light img").stop().css({left:"0%"}).animate({
        "left":"550px",

    },1400);
    };
setInterval(light,2000);
$(".ysunav li ").mouseenter(function(){
    $(this).children("img").hide();
    $(this).children("img").css({visibility:"visible"})        
    $(this).children("img").fadeIn(700);
     
    }).mouseover(function(){
    $(this).children("img").show();

    }).mouseleave(function(){   
    $(this).children("img").fadeOut();
})


})
    