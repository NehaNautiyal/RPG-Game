$(document).ready(function () {


    //Declare my Model object
    //the ID name is the same as the id in the html! 
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

    //Declare other variables
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

        //Reset the Health TEXT of all Models
        $('#model-1-health').text('1803');
        $('#model-2-health').text('1904');
        $('#model-3-health').text('1911');
        $('#model-4-health').text('1913');

        //Reset the Points of Evidence for each of the Models 
        modelInfo.model1.Evidence = 150;
        modelInfo.model2.Evidence = 200;
        modelInfo.model3.Evidence = 300;
        modelInfo.model4.Evidence = 270;

        //Reset the Health Points for each of the Models 
        modelInfo.model1.Health = 1803;
        modelInfo.model2.Health = 1904;
        modelInfo.model3.Health = 1911;
        modelInfo.model4.Health = 1913;

        //Reset the Points of Inconclusive Data for each of the Models 
        modelInfo.model1.inconclusiveData = 270;
        modelInfo.model2.inconclusiveData = 250;
        modelInfo.model3.inconclusiveData = 200;
        modelInfo.model4.inconclusiveData = 300;

        //Change text from Chosen Model to Choose a Model
        $("#startingModel").text("Choose Your Model to begin:");
        $("#vs").empty();
        $("#expSection").text("");
        $(".btn").hide();
        $("#heading").text("");
        $("#disprove").text("Models to Disprove:");



        //Be sure there is nothing written in the status section
        $("#status-chosenModel").text("");
        $("#status-chosenDefender").text("");

        //For each model (defined the html), reset positioning and classes 
        $(".model").each(function () {
            $("#models").append(this);
            $(this).show().removeClass("chosenModel chosenDefender possibleDefender zero-health");
        });

        chosenModel = false;
        allPossibleDefenders = false;
        chosenDefender = false;
        allDefended = false;
        disproved = false;
        defendersLeft = 3;
        evidenceIncrementer = 1;

        //Reset buttons goes back to Experiment Begin
        $(".btn").addClass("btn-experiment").removeClass("reset-btn").text("Data Collection");

        console.log("Reset: chosen model health: " + chosenModelHealth);
        console.log("Reset: chosen model evidence: " + chosenModelEvidence);
        console.log("Reset: chosen defender health: " + chosenDefenderHealth);
        console.log("Reset: chosen defender inconclusive: " + chosenDefenderInconclusive);

    }

    $(".btn").hide();


    //When ANY model is clicked, need to check if 
    $(".model").on("click", function () {
        var modelID = $(this).attr("id");
        console.log(modelID + "was clicked");
        //is there a chosen model? if not...
        if (chosenModel === false) {
            $(this).addClass("chosenModel");
            chosenModel = true;
            //Change text to  Chosen Model
            $("#startingModel").text("Chosen Model:");
            $("#vs").html('<h3>vs</h3>');

            if (allPossibleDefenders === false) {
                $(".model").each(function () {
                    if ($(this).attr("id") !== modelID) {
                        $("#disprove").after(this);
                        $(this).addClass("possibleDefender");
                    }

                });
                $("#disprove").append("<br>(Choose a model to disprove)</br>");
                allPossibleDefenders = true;
            }
        } else {
            console.log(chosenDefender);
            console.log(modelID);
            //if model is already chosen, other models need to be disproved
            if (chosenDefender === false) {
                $(".possibleDefender").each(function () {
                    if ($(this).attr("id") === modelID) {
                        $(this).removeClass("possibleDefender").addClass("chosenDefender");
                        $("#models").append(this);
                    }
                });

                $("#expSection").text("Experiment Section:");
                $("#heading").html("You have entered the lab.<br>(Click Data Collection to begin your experiment)<br>");
                $(".btn").show();
                $("#vs").html('<h3>vs</h3>');

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
                console.log("starting chosen model health: " + chosenModelHealth);
                console.log("starting chosen model evidence: " + chosenModelEvidence);
                console.log("starting chosen defender health: " + chosenDefenderHealth);
                console.log("starting chosen defender inconclusive: " + chosenDefenderInconclusive);
                chosenDefender = true;

                console.log("ChosenModelName: " + chosenModelName);
                console.log("Chosen model health: " + chosenModelHealth);
                console.log("Chosen Model evidence points: " + chosenModelEvidence);
            }
        }
    });

    $(".btn-experiment").on("click", function () {
        if (!chosenDefender && chosenModel) {
            alert("Choose a model to disprove first");
        }
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
            }
            $(".models").append($("#status-chosenModel"));
            $(".models").append($("#status-chosenDefender"));

            $("#status-chosenModel").html('<h4>Your experiment claims ' + totalEvidence + ' points of evidence.</h4>');
            $("#status-chosenDefender").html('<h4>' + chosenDefenderName + ' counters with  ' + chosenDefenderInconclusive + ' points of inconclusive data.</h4><br><h4>Click Data Collection to continue.</h4>');
            $("[class*='chosenModel'] [class*='health']").text(chosenModelHealth);
            $("[class*='chosenDefender'] [class*='health']").text(chosenDefenderHealth);



            if (chosenModelHealth <= 0) {
                alert("You have been disproved! Try to gather more evidence next time. Press Reset to play again.")
                $(".btn").removeClass("btn-experiment").addClass("reset-btn").text("Reset");
                disproved = true;
                $(".chosenModel").addClass("zero-health");


            } else if (chosenDefenderHealth <= 0) {
                $(".chosenDefender").hide().addClass("model").removeClass("chosenDefender");
                defendersLeft--;
                chosenDefender = false;
                alert("You did it! You disproved the model! Pick another model to disprove!");
                $("[id*='status-chosenModel']").empty();
                $("[id*='status-chosenDefender']").empty();
                console.log(chosenModelName + chosenDefenderName);
                $("#expSection").text("");
                $("#vs").empty();
                $("#heading").empty();
                $(".btn-experiment").hide();

                if (defendersLeft === 0) {
                    $(".btn-experiment").show();
                    $(".btn").removeClass("btn-experiment").addClass("reset-btn").text("Reset");
                    alert("You defended all the models! Press Reset to play again.");
                    allDefended = true;
                }
            }
        }
    });

    $(".reset-btn").on("click", function () {
        console.log("Reset button pressed");
        refreshPage();
    });
});