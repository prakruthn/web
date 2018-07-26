$(function() {
$(".vtu").hover(
function() { $(".vtusub").slideToggle(400); },
function() { $(".vtusub").hide(); }
);
});

$(function() {
$(".menu").hover(
function() { $(".sub").slideToggle(400); },
function() { $(".sub").hide(); }
);
});
//Nav Bar dropdown start
$(function() {
$(".tt").hover(
function() { $(".ttt").slideToggle(400); },
function() { $(".ttt").hide(); }
);
});

$(function() {
$(".notes").hover(
function() { $(".notes_d").slideToggle(400); },
function() { $(".notes_d").hide(); }
);
});

$(function() {
$(".qpn").hover(
function() { $(".qsn").slideToggle(400); },
function() { $(".qsn").hide(); }
);
});

$(function() {
$(".cls").hover(
function() { $(".clss").slideToggle(400); },
function() { $(".clss").hide(); }
);
});
//Nav Bar dropdown end
//Img carsoule start

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 4000});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

//IMG carasoule end
$('na').addClass('disabled');
