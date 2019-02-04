$(document).ready(function(){
    let scrollPoint = $('.utility-nav').offset();

   $(window).scroll(function(){
       
       console.log( scrollPoint.top);
       if(window.scrollY >= scrollPoint.top+100){

        $('.utility-nav').css({"background":"#0062CC"});
        $('.primary-nav').css({"background":"#fff", "color":"#000 !important"});
       }
       else if(window.scrollY <= scrollPoint.top+100){

            $('.utility-nav').css({"background":"transparent"});
            $('.primary-nav').css({"background":"transparent", "color":"#fff"});
       }
   })
});