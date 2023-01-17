$(document).ready(function(){
    $('.navbar-toggler-open').click(function(){
        $('.navbar-collapse').addClass('navbarShow');
    });

    $('.navbar-toggler-close').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, Options = 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

$(document).ready(function(){
    $('.scroll .scroll-one button').click(function(){
        $('.scroll .scroll-one button').removeClass("checked");
        $(this).addClass("checked");

        var selectedProperty = $(this).attr("data-checker");
        $('.property-lists').removeClass("active").hide();
        $('.property-lists.'+selectedProperty).addClass("active").show();
    });
   
});

let navbarr = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbarr.classList.add('color');
    } else {
        navbarr.classList.remove('color');
    }
};


let backVideo = document.getElementById("backVideo");
let btn = document.getElementById("play-btnn");

btn.onclick = function(){
    backVideo.style.display = "block";

    if(backVideo.paused){
        backVideo.play();
        btn.src = "images/pause.PNG";
    } else{
        backVideo.pause();
        btn.src = "images/i25.PNG";
    }
}