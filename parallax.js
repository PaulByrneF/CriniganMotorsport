var $window = $(window);
var $firstBG = $('#intro');
var $secondBG = $('#second');
var $thirdBG = $('#third');
var $fourthBG = $('#fourth');
var trainers = $("#second .bg");

var windowHeight = $window.height();

$('#intro, #second, #third, #fourth').bind('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass("inview");
    }else{
      $(this).removeClass("inview");
    }
});

function RepositionNav(){
    var windowHeight = $window.height();
    var navHeight = $('#nav').height() / 2;
    var windowCenter = (windowHeight / 2);
    var newtop = windowCenter - navHeight;
    $('#nav').css({"top": newtop});
}

function newPos(x, windowHeight, pos, adjuster, inertia){
    return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
    }