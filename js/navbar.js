$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("#navbar1").css("background-color","rgba(255, 255, 255, 1)");
        }
        else{
            $("#navbar1").css("background-color","rgba(255, 255, 255, 0)"); 	
        }
    })
  })