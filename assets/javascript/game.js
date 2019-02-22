// Upon Click of any character, the other 3 characters change color and move to "Enemies to Attack"

$(document).ready(function () {

    //Declare some variables

    var m1hp = 1803;
    var m2hp = 1904;
    var m3hp = 1911;
    var m4hp = 1913;

    //When I click on Model 1 (Models 2, 3, 4, text, & buttons) move
    $(".model-1").on("click", function () {
        console.log("I am model 1.");
        //model-1 is going to move down
        $(".model-2").animate({
            top: '270px',
            right: '140px'
        });
        $(".model-3").animate({
            top: '270px',
            right: '140px'
        });
        $(".model-4").animate({
            top: '270px',
            right: '140px'
        });
        $("#disprove").animate({
            top: '240px'
        });
        $("#expSection").animate({
            top: '240px'
        });
        $(".btn").animate({
            top: '240px'
        });
        $("#defender").animate({
            top: '240px'
        });
        console.log("I can make anything move.");
    });

    //When Model 2 is clicked, Models 1,3,4,text & btn move
    $(".model-2").on("click", function () {
        console.log("I am model 2.");
        $(".model-1").animate({
            top: '270px',
        });
        $(".model-3").animate({
            top: '270px',
            right: '148px'
        });
        $(".model-4").animate({
            top: '270px',
            right: '156px'
        });
        $("#disprove").animate({
            top: '240px'
        });
        $("#expSection").animate({
            top: '240px'
        });
        $(".btn").animate({
            top: '240px'
        });
        $("#defender").animate({
            top: '240px'
        });
    });

    //When Model 3 is clicked, Models 1,2,4,text & btn move
    $(".model-3").on("click", function () {
        console.log("I am model 3.");
        $(".model-1").animate({
            top: '270px',
        });
        $(".model-2").animate({
            top: '270px',
        });
        $(".model-4").animate({
            top: '270px',
            right: '148px'
        });
        $("#disprove").animate({
            top: '240px'
        });
        $("#expSection").animate({
            top: '240px'
        });
        $(".btn").animate({
            top: '240px'
        });
        $("#defender").animate({
            top: '240px'
        });
    });

    //When Model 4 is clicked, Models 1,2,3,text & btn move
    $(".model-4").on("click", function () {
        console.log("I am model 4.");
        $(".model-1").animate({
            top: '270px',
        });
        $(".model-2").animate({
            top: '270px',
        });
        $(".model-3").animate({
            top: '270px',
        });
        $("#disprove").animate({
            top: '240px'
        });
        $("#expSection").animate({
            top: '240px'
        });
        $(".btn").animate({
            top: '240px'
        });
        $("#defender").animate({
            top: '240px'
        });
    });
    // If Begin Data collection is clicked, there is no model to disprove should be displayed
});