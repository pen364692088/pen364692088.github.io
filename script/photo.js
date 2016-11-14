
var getWH =function(){
var width = document.body.clientWidth;
var height = document.body.clientHeight;
if (width<=1440||height<=960){
	$(".back img").css({transform:"scale(1)"});
}
}
getWH();

document.onreadystatechange = function () {      
               if(document.readyState=="complete") {            
                   $("#onload").css({display:"none"});;      
               }     
           }      
$(document).ready(function(){
$(".pic img").mouseenter(function(){
	$("this").css({transition:"translate 1s ease-in-out "});
})
.mouseover(function(){

})			 
.mouseleave(function(){
	$("this").css({translate: "rotate(5deg)"});
	//$("this").css({translate :""});
	$("this").css({transition:"translate 1s ease-in-out "});

})

$(".pic img").click(function(){
	var src=$(this).attr("src");
	console.log(src);
	$(".back img").attr("src",src);
	$(".back").css({display:"block"});
	$(".pic li img").css({display:"none"});
	
})
$(".back p").click(function(){
	$(".back").css({display:"none"});
	$(".pic li img").css({display:"block"});
	
})

})  
