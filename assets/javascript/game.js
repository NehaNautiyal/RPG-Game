// Upon Click of any character, the other 3 characters change color and move to "Enemies to Attack"

$(document).ready(function () {

    //Declare some variables

    var modelInfo = {
        model1: {
            Name: "Dalton's Solid Sphere",
            ID: "dalton",
            Health: 1803,
            Evidence: 150,
            inconclusiveData: 270
        },
        model2: {
            Name: "Thomson's Plum Pudding Model",
            ID: "thomson",
            Health: 1904,
            Evidence: 200,
            inconclusiveData: 250
        },
        model3: {
            Name: "Rutherford's Nuclear Model",
            ID: "rutherford",
            Health: 1911,
            Evidence: 300,
            inconclusiveData: 200
        },
        model4: {
            Name: "Bohr's Planetary Model",
            ID: "bohr",
            Health: 1913,
            Evidence: 270,
            inconclusiveData: 300
        }
    }

    var chosenModel = false;
    var allPossibleDefenders = false;
    var chosenDefender = false;
    var allDefended = false;
    var disproved = false;
    var defendersLeft = 3;
    var evidenceIncrementer = 1;

    //Initialize variables that will be updated later...
    var chosenModelName;
    var chosenModelHealth;
    var chosenModelEvidence;
    var chosenDefenderName;
    var chosenDefenderHealth;
    var chosenDefenderInconclusive;
    //___________________________________________________________________________________________________________________________
    var refreshPage = function () {

        //Reset the Health of all Models
        $('#model-1').find('.health').text('1803');
        $('#model-2').find('.health').text('1904');
        $('#model-3').find('.health').text('1911');
        $('#model-4').find('.health').text('1913');

        //Reset the Points of Evidence for each of the Models 
        modelInfo.model1.Evidence = 150;
        modelInfo.model2.Evidence = 200;
        modelInfo.model3.Evidence = 300;
        modelInfo.model4.Evidence = 270;

        //Change text from Chosen Model to Choose a Model
        $("#startingModel").text("Choose Your Model to begin:");

        //Be sure there is nothing written in the status section
        $("#status").empty();
    }

    var m1 = $("#model-1");
    var m2 = $("#model-2");
    var m3 = $("#model-3");
    var m4 = $("#model-4");



    //When ANY model is clicked, need to check if 
    $(".model").on("click", function () {
        var modelID = $(this).attr("id");
        console.log(modelID + "was clicked");
        //is there a chosen model? if not...
        if (chosenModel === false) {
            $(this).addClass("chosenModel");
            chosenModel = true;
            $("#expSection").animate({
                bottom: '190px',
                left: '600px'
            });
            $(".btn").animate({
                bottom: '190px',
                left: '600px'
            });
            $("#defender").animate({
                bottom: '190px',
                left: '600px'
            });
            //Change text to  Chosen Model
            $("#startingModel").text("Chosen Model:");
            // checkChosenModel();



            console.log(this.id);
            console.log(modelID);
            if (allPossibleDefenders === false) {
                $(".model").each(function () {
                    if ($(this).attr("id") !== modelID) {
                        $("#disprove").after(this);
                        $(this).addClass("possibleDefender");
                        // $(this).find(".model-name").removeClass("model-name").addClass("possibleDefender");
                    }
                });
                allPossibleDefenders = true;
            }
        } else {
            console.log(chosenDefender);
            console.log(modelID);
            //if model is already chosen, other models need to be disproved
            if (chosenDefender === false) {
                $(".possibleDefender").each(function () {
                    if ($(this).attr("id") === modelID) {
                        $("#experiment").append(this);
                        $(this).removeClass("possibleDefender").addClass("chosenDefender");
                    }
                });

                for (prop in modelInfo) {
                    if (modelInfo[prop].ID === $(".chosenModel").attr("id")) {
                        chosenModelName = modelInfo[prop].Name;
                        chosenModelHealth = modelInfo[prop].Health;
                        chosenModelEvidence = modelInfo[prop].Evidence;
                        console.log(modelInfo[prop].ID);
                    } else if (modelInfo[prop].ID === $(".chosenDefender").attr("id")) {
                        chosenDefenderName = modelInfo[prop].Name;
                        chosenDefenderHealth = modelInfo[prop].Health;
                        chosenDefenderInconclusive = modelInfo[prop].inconclusiveData;
                    }
                }
                chosenDefender = true;
                
                console.log("ChosenModelName: " + chosenModelName);
                console.log("Chosen model health: " + chosenModelHealth);
                console.log("Chosen Model evidence points: " + chosenModelEvidence);
            }
        }
    });

    $(".btn").on("click", function () {
        if (allDefended || disproved) {
            refreshPage();
        }
        else if (chosenDefender) {
            var totalEvidence = chosenModelEvidence * evidenceIncrementer;
            evidenceIncrementer++;
            chosenModelHealth = chosenModelHealth - chosenDefenderInconclusive;
            chosenDefenderHealth = chosenDefenderHealth - totalEvidence;
            for (property in modelInfo) {
                if (modelInfo[property].ID === $(".chosenModel").attr("id")) {
                    modelInfo[property].Health = chosenModelHealth;
                } else if (modelInfo[property].ID === $(".chosenDefender").attr("id")) {
                    modelInfo[property].Health = chosenDefenderHealth
                }
                console.log()
            }
            $("#status-chosenModel").html('<h4>Your experiment has begun using' + totalEvidence + ' points of evidence.</h4>');
            $("#status-chosenDefender").html('<h4>' chosenDefenderName' has intervened with  ' + chosenDefenderInconclusive + ' points of inconclusive data.</h4>');
            $("[class*='chosenModel'] [class*='health']").text(chosenModelHealth);
            $("[class*='chosenDefender'] [class*='health']").text(chosenDefenderHealth);

            if (chosenModelHealth <= 0) {
                disproved = true;
                $(".chosenModel").removeClass("chosenModel").addClass("#zero-health");
            }
        }
    });


        // //When model 1 is clicked
        // m1.on("click", function () {
        //     console.log("Model 1 has been clicked.");
        //     //Change text to  Chosen Model
        //     $("#startingModel").text("Chosen Model:");
        //     //Model 1 becomes the chosenModel
        //     m1.addClass("chosenModel");
        //     //Model 2 becomes "enemy"
        //     m2.addClass("possibleDefender");
        //     //Model 3 becomes "enemy"
        //     m3.addClass("possibleDefender");
        //     //Model 4 becomes "enemy"
        //     m4.addClass("possibleDefender");
        //     //Text moves to make space for the models 
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
        //     checkChosenModel();
        // });


        // // If any of the models have the chosenModel class, then chosenModel is true
        // var checkChosenModel = function () {
        //     if (m1.hasClass("chosenModel") ||
        //         m2.hasClass("chosenModel") ||
        //         m3.hasClass("chosenModel") ||
        //         m4.hasClass("chosenModel")
        //     ) {
        //         chosenModel = true;
        //         console.log("A model has been chosen: " + chosenModel);
        //     }
        //     else {
        //         console.log("No model has been chosen.");
        //         alert("You have not yet chosen a model.");
        //     }
        // }

        // m2.on("click", function () {
        //     if (m2.hasClass("possibleDefender") &&
        //         m3.hasClass("possibleDefender") &&
        //         m4.hasClass("possibleDefender")) {
        //         m2.addClass("chosenDefender");
        //         m2.removeClass("possibleDefender");
        //         checkChosenDefender()
        //         console.log("Model 2 has been clicked.");
        //     } else {
        //     }
        // });

        // m3.on("click", function () {
        //     if ($("[class*='chosenModel']") && m3.hasClass("possibleDefender")) {
        //         m3.hasClass("chosenDefender");
        //         m3.removeClass("possibleDefender");
        //         chosenDefender = true;
        //         console.log("Model 3 has been chosen as the defender.");
        //     }
        // });


        // var checkChosenDefender = function () {
        //     if (m2.hasClass("chosenDefender") ||
        //         m3.hasClass("chosenDefender") ||
        //         m4.hasClass("chosenDefender")) {
        //         chosenDefender = true;
        //         console.log("A defender has been chosen: " + chosenDefender);
        //     } else
        //         console.log("There is no model chosen to defend.");
        // }


        // //In the beginning, nothing is chosen. Any model can be chosen at first = no class 
        // //Once any model is chosen, the clicked model = chosenModel and the other 3 = "chosenDefender"

        // //Needs fixing- right now, only set for model 1 and model 2. What if another model is picked? Needs to be by class. the chosenModel's data points and the chosenDefender's model points needs to be edited accordingly
        // $(".btn").on("click", function () {
        //     // if (chosenModel === true && chosenDefender === true) {
        //     //     console.log("Experiment begin! Starting health: " + m1DataPts);
        //     //     m1DataPts -= 250;
        //     //     console.log(m2DataPts);
        //     //     $("#model-1-health").text(m1DataPts);
        //     //     m2DataPts -= m1DataPower;
        //     //     $("#model-2-health").text(m2DataPts);
        //     //     $("#status").html(`'<h4>Your experiment has begun to disprove the Plum Pudding model using ${m1DataPower} points of evidence. <br>Thomson countered back with 250 points of inconclusive data.</h4>'`);
        //     //     m1DataPower += 150;
        //     //     checkHealth(m1DataPts, m2DataPts);
        //     // } else {
        //     //     alert("Pick a defender first, before you can begin your experiment.");
        //     // }
        //     runExperiment(model1.Health, model1.Evidence, model2.Health, model2.inconclusiveData);
        // });

        // //HEALTH = DATA POINTS = HEALTH
        // //ATTACK POWER = DATA POWER = EVIDENCE
        // //COUNTER ATTACK POWER = MANIPULATION = INCONCLUSIVE DATA


        // function runExperiment(chosenModelHealth, chosenModelEvidence, defenderModelHealth, defenderModelInconclusiveData) {
        //     if (chosenModel === true && chosenDefender === true) {
        //         console.log("Experiment begin! Starting health: " + chosenModelHealth);
        //         chosenModelHealth -= defenderModelInconclusiveData;
        //         console.log(defenderModelHealth);
        //         defenderModelHealth -= chosenModelEvidence;
        //         $("#status").html(`'<h4>Your experiment has begun using ${chosenModelEvidence} points of evidence. <br>Defender countered back with ${defenderModelInconclusiveData} points of inconclusive data.</h4>'`);
        //         chosenModelEvidence += 150;
        //         checkHealth(chosenModelHealth, defenderModelHealth);
        //         updateHealth(chosenModelHealth, defenderModelHealth);
        //     } else {
        //         alert("Pick a defender first, before you can begin your experiment.");
        //     }
        // }

        // function updateHealth(chosenModelHealth, defenderModelHealth) {
        //     $("[class*='chosenModel'] [class*='health']").text(chosenModelHealth);
        //     $("[class*='chosenDefender'] [class*='health']").text(defenderModelHealth);
        // }


        // function checkHealth(chosenModelDataPoints, defenderModelDataPoints) {
        //     if (chosenModelDataPoints <= 0) {
        //         alert("You lost! Game Over!");
        //         $("#reset-btn").html('<button type="button" class="btn btn-primary btn-lg">Reset Game</button>');
        //     } else if (defenderModelDataPoints <= 0) {
        //         $("[class*='chosenDefender']").hide();
        //         $("[class*='chosenDefender']").removeClass("chosenDefender");
        //         chosenDefender = false;
        //         alert("You did it! You disproved the model! Pick another model to defend.");
        //         $("#status").empty();
        //     }
        // }



    });