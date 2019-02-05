$(document).ready(function(){

    //Calculating windows innerWidth
    var innerwidth = window.innerWidth;
    $(window).resize(function(){
        innerwidth = window.innerWidth;
    });

    

    //Navigation color change effect on scrolling 

    let scrollPoint = $('.utility-nav').offset();
    if(innerwidth >= 768){
        $(window).scroll(function(){

        //console.log( scrollPoint.top);
        if(window.scrollY >= scrollPoint.top+50){

        $('.utility-nav').css({"background":"#001933"});
        $('.primary-nav').css({"background":"rgb(0,98,204,0.9)"});
        }
        else if(window.scrollY <= scrollPoint.top+50){

            $('.utility-nav').css({"background":"transparent"});
            $('.primary-nav').css({"background":"transparent","padding":0});
        }
        });
    }

    // Explore Button Click
    $("#explore-btn").click(function(e){
        e.preventDefault();
        var pos = $("#events").offset();
        $('html, body').animate({scrollTop:pos.top}, 500);
    })
});
