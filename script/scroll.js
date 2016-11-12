
$('.section4').find('p').hide();
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
$(".top").css({width:width});
$(".pic_1").css({width:width});
$(".pic_2").css({width:width});
$(".pic_3").css({width:width});
$(".pic_4").css({width:width});
$(".pic_5").css({width:width});

$(function(){
    $('#dowebok').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90',"#F00"],//背景颜色
    navigation: true,//开启导航栏
    resize:true,  //字体是否随着窗口改变
    navigationPosition:"left", //导航栏的位置
    navigationTooltips: ['燕海', '学风浓厚', '青春操场','燕郊之日','燕之冬心',],
    afterLoad: function(anchorLink, index){
           
            if(index == 2){
                $('.section2').find('p').delay(300).animate({
                    top: '20%'
                }, 1000, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('p').delay(300).animate({
                    right: '30%'
                }, 1000, 'easeOutExpo');
            }
            if(index == 4){
                
                //$('.section4').find('p').css({visibility:"visible"});
               /*$('.section4').find('p').delay(300).animate({
                    left: '30%'
                }, 1000, 'easeOutExpo');*/
                $('.section4').find('p').fadeIn(700);
            }
            if(index == 5){
                $('.section5').find('p').delay(300).animate({
                    left: '30%'
                }, 1000, 'easeOutExpo');
            }
        },
    onLeave: function(index, direction){
            
            if(index == '2'){
                $('.section2').find('p').delay(100).animate({
                    top: '-200%'
                }, 700, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('p').delay(100).animate({
                    right:'-120%'
                }, 700, 'easeOutExpo');
            }
            
            if(index == "4"){
                /*$('.section4').find('p').delay(100).animate({
                    left: '-120%'
                }, 700, 'easeOutExpo');*/
                $('.section4').find('p').fadeOut(700);
            }
            
            if(index == "5"){
               $('.section5').find('p').delay(100).animate({
                    left: '-120%'
                }, 700, 'easeOutExpo');
            }
            
        }

    })
    $(window).resize(function(){
    autoScrolling();
    });


$(".article").delay(300).animate({
    left:"10%",
    opacity:1
},1000)
function autoScrolling(){
    var $ww = $(window).width();
    if($ww < 800){
        $.fn.fullpage.setAutoScrolling(false); //当浏览器宽度小于800的时候不再响应式收缩
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
    }
autoScrolling();
});


