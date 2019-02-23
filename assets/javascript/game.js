// Upon Click of any character, the other 3 characters change color and move to "Enemies to Attack"

$(document).ready(function () {

    //Declare some variables

    //Model# Data Points - starting point
    var m1DataPts = 1803;
    var m2DataPts = 1904;
    var m3DataPts = 1911;
    var m4dDataPts = 1913;

    //Model# Data Power - increases incrementally
    var m1DataPower = 150;
    var m2DataPower = 200;
    var m3DataPower = 300;
    var m4DataPower = 270;

    //Model# Counter Data Manipulation - never changes
    var m1DataManip = 270;
    var m2DataManip = 250;
    var m3DataManip = 200;
    var m4DataManip = 300;

    var chosenModel = false;
    var chosenDefender = false;
    var defenderThere = false;
//___________________________________________________________________________________________________________________________
    var refreshPage = function () {
    }

    var m1 = $(".model-1");
    var m2 = $(".model-2");
    var m3 = $(".model-3");
    var m4 = $(".model-4");

    //When model 1 is picked as the chosen Model
    m1.on("click", function () {
        //Model 1 becomes the chosenModel
        m1.addClass("chosenModel");
        //Model 2 becomes "enemy"
        m2.addClass("possibleDefender");
        //Model 3 becomes "enemy"
        m3.addClass("possibleDefender");
        //Model 4 becomes "enemy"
        m4.addClass("possibleDefender");
        //Text moves to make space for the models 
        $("#expSection").animate({
            bottom: '290px',
            left: '500px'
        });
        $(".btn").animate({
            bottom: '290px',
            left: '500px'
        });
        $("#defender").animate({
            bottom: '290px',
            left: '500px'
        });
        checkChosenModel();
    });


// If any of the models have the chosenModel class, then chosenModel is true
var checkChosenModel = function() {   
if (m1.hasClass("chosenModel") ||
    m2.hasClass("chosenModel") ||
    m3.hasClass("chosenModel") ||
    m4.hasClass("chosenModel")
    ) {
        chosenModel = true;
        console.log("A model has been chosen: " + chosenModel);
    }
    else {
        console.log("No model has been chosen.");
        alert("You have not yet chosen a model.");
    }
}

if (m2.hasClass("possibleDefender")) {
        m2.on("click", function() {
            chosenDefender = true;
            console.log("Defender has been chosen: " + chosenDefender);
            m2.addClass("chosenDefender");
            m2.removeClass("possibleDefender");
        });
    } else if (m3.hasClass("possibleDefender")) {
        m3.addClass("chosenDefender");
        m3.removeClass("possibleDefender");
    }

    //In the beginning, nothing is chosen. Any model can be chosen at first = no class 
    //Once any model is chosen, the clicked model = chosenModel and the other 3 = "chosenDefender"

    if (m2.hasClass("chosenDefender") === true) {
        chosenDefender = true;
        defenderThere = true;
    }
    if (defenderThere === true) {
        $(".btn").on("click", function () {
            console.log("Experiment begin! Starting health: " + m1DataPts);
            m1DataPts -= 250;
            console.log(m2DataPts);
            $("#model-1-health").text(m1DataPts);
            m2DataPts -= m1DataPower;
            $("#model-2-health").text(m2DataPts);
            $("#status").html("Your experiment has begun to disprove the Plum Pudding model using " + m1DataPower + " data damage. Thomson experimented back for 250 data manipulation points.");
            m1DataPower += 150;
            // checkHealthOf1vs2();
        });
    } else {
        $(".btn").on("click", function () {
            alert("Pick a defender first, before you can begin your experiment.");
        });
    }

    //if there is no model in the defender position, I want this to alert when the button is pressed
    // $(".btn").on("click", function () {
    //     alert("There is no model yet to disprove.")
    // });

    //When I click on Model 1 (Models 2, 3, 4, text, & buttons) move
    // $(".model-1").on("click", function () {
    //     console.log("I am model 1.");
    //     //model-1 is going to move down
    //     $(".model-2").animate({
    //         top: '290px',
    //         right: '140px'
    //     });
    //     $(".model-2").css('background', '#64CFD2');
    //     $(".model-3").animate({
    //         top: '290px',
    //         right: '140px'
    //     });
    //     $(".model-3").css('background', '#64CFD2');
    //     $(".model-4").animate({
    //         top: '290px',
    //         right: '140px'
    //     });
    //     $(".model-4").css('background', '#64CFD2');
    //     $("#expSection").animate({
    //         bottom: '290px',
    //         left: '500px'
    //     });
    //     $(".btn").animate({
    //         bottom: '290px',
    //         left: '500px'
    //     });
    //     $("#defender").animate({
    //         bottom: '290px',
    //         left: '500px'
    //     });
    //     console.log("I can make anything move.");
    //});
    //Once Model1 is selected, then Models 2, 3, 4 need to be moved to Models to Disprove

    // var checkHealthOf1vs2 = function () {
    //     if (m2DataPts <= 0) {
    //         $(".model-2").hide();
    //         alert("You did it! You disproved Thomson's model!");
    //     }
    //     if (m1DataPts <= 0) {
    //         alert("Thomson won! GAME OVER. Refresh the page to play again.");
    //     }
    // }

    //Upon click of either Models 2, 3, 4, they must be moved to the Experiment section

    // $(".model-2").on("click", function () {
    //     $(".model-2").animate({
    //         left: '360px',
    //         top: '150px'
    //     });
    //     $(".model-2").css('background', 'plum');
    // $(".model-3").animate({
    //     left: '-275px',
    // });
    // $(".model-4").animate({
    //     left: '-275px',
    // });
    //});





    // $(".model-2").on("click", function () {

    // });
    // $(".model-2").on("click", function () {

    // });
    //___________________________________________________________________________________________________________________________
    //When Model 2 is clicked, Models 1,3,4,text & btn move

    // $(".model-2").on("click", function () {
    //     console.log("I am model 2.");
    //     $(".model-2").animate({
    //         right: '140px',
    //     });
    //     $(".model-1").animate({
    //         top: '330px',
    //     });
    //     $(".model-1").css('background', '#64CFD2');
    //     $(".model-3").animate({
    //         top: '330px',
    //         right: '148px'
    //     });
    //     $(".model-3").css('background', '#64CFD2');
    //     $(".model-4").animate({
    //         top: '330px',
    //         right: '156px'
    //     });
    //     $(".model-4").css('background', '#64CFD2');
    //     $("#expSection").animate({
    //         top: '210px'
    //     });
    //     $(".btn").animate({
    //         top: '210px'
    //     });
    //     $("#defender").animate({
    //         top: '210px'
    //     });
    // });

    // //___________________________________________________________________________________________________________________________
    // //When Model 3 is clicked, Models 1,2,4,text & btn move

    // $(".model-3").on("click", function () {
    //     console.log("I am model 3.");
    //     $(".model-3").animate({
    //         right: '278px',
    //     });
    //     $(".model-1").animate({
    //         top: '330px',
    //     });
    //     $(".model-1").css('background', '#64CFD2');
    //     $(".model-2").animate({
    //         top: '330px',
    //     });
    //     $(".model-2").css('background', '#64CFD2');
    //     $(".model-4").animate({
    //         top: '330px',
    //         right: '148px'
    //     });
    //     $(".model-4").css('background', '#64CFD2');
    //     $(".model-4").css('background', '#64CFD2');
    //     $("#expSection").animate({
    //         top: '210px'
    //     });
    //     $(".btn").animate({
    //         top: '210px'
    //     });
    //     $("#defender").animate({
    //         top: '210px'
    //     });
    // });
    // //___________________________________________________________________________________________________________________________
    // //When Model 4 is clicked, Models 1,2,3,text & btn move

    // $(".model-4").on("click", function () {
    //     console.log("I am model 4.");
    //     $(".model-4").animate({
    //         right: '432px',
    //     });
    //     $(".model-1").animate({
    //         top: '330px',
    //     });
    //     $(".model-1").css('background', '#64CFD2');
    //     $(".model-2").animate({
    //         top: '330px',
    //     });
    //     $(".model-2").css('background', '#64CFD2');
    //     $(".model-3").animate({
    //         top: '330px',
    //     });
    //     $(".model-3").css('background', '#64CFD2');
    //     $("#expSection").animate({
    //         top: '210px'
    //     });
    //     $(".btn").animate({
    //         top: '210px'
    //     });
    //     $("#defender").animate({
    //         top: '210px'
    //     });
    // });

    // If Begin Data collection is clicked, there is no model to disprove should be displayed
});