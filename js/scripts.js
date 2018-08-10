/*
Answer choices and their corresponding track:
a - Python
b - Java
c - PHP
*/

//BACK-END LOGIC
var findResult = function (answerArray) {
    
    var i = 0;
    var aCount = 0;
    var bCount = 0;
    var cCount = 0;

    for (i=0;i<answerArray.length;i++) {
        if (answerArray[i] === "a") {
            aCount++;
        }
        else if (answerArray[i] === "b") {
            bCount++;
        }
        else {
            cCount++;
        }
    }
    var resultCount = Math.max(aCount, bCount, cCount);
    var result ="";
    if (resultCount === aCount) {
        result = "Python";
    }
    else if (resultCount === bCount) {
        result = "Java";
    }
    else {
        result = "PHP";
    }
    return result;
}

var createAnswerArray = function (questionCount) {
    var j = 0;
        var answerArray=[];
        for (j=0;j<questionCount;j++) {
            var destination = "input:radio[name=q"+ j +"]:checked";
            answerArray.push[$(destination).val()];
        }
    return answerArray;
}

// FRONT-END LOGIC
$(document).ready(function () {
    $("form#userInfo").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        $(".name").text(name);
        $("#surveyInput").show();
    });

    $("form#surveyInput").submit(function (event) {
        event.preventDefault();
        var questionCount = $(".radio label").length/3;
        var answerArray = createAnswerArray(questionCount);
        var result = findResult(answerArray);
        $(".result").text(result);
       
        $("#result").show();
    });
});