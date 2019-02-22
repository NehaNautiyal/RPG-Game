// Upon Click of any character, the other 3 characters change color and move to "Enemies to Attack"

$(document).ready(function () {

    //Declare some variables

    var m1hp = 1803;
    var m2hp = 1904;
    var m3hp = 1911;
    var m4hp = 1913;

    $(".model-1").on("click", function () {
        console.log("I am model 1.");
        $(".model-1").animate({
            right: '250px'
        });
    });

    $(".model-2").on("click", function () {
        console.log("I am model 2.");
        // $(".model-1").animate({bottom: '250px'});
    });

    $(".model-3").on("click", function () {
        console.log("I am model 3.");
        // $(".model-1").animate({bottom: '250px'});
    });

    $(".model-4").on("click", function () {
        console.log("I am model 4.");
        // $(".model-1").animate({bottom: '250px'});
    });
    // If Begin Data collection is clicked, there is no model to disprove should be displayed
});