/*
Answer choices and their corresponding track:
a - C#
b - Java
c - PHP
*/

$(document).ready(function () {
    $("form#surveyInput").submit(function (event) {
        event.preventDefault();
        var answer1 = $("input:radio[name=q1]:checked").val();
        var answer2 = $("input:radio[name=q2]:checked").val();
        var answer3 = $("input:radio[name=q3]:checked").val();
        var answer4 = $("input:radio[name=q4]:checked").val();
        var answer5 = $("input:radio[name=q5]:checked").val();
        var answer6 = $("input:radio[name=q6]:checked").val();
        var answerArray = [answer1, answer2, answer3, answer4, answer5, answer6];

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
            result = "C#";
        }
        else if (resultCount === bCount) {
            result = "Java";
        }
        else {
            result = "PHP";
        }

        $(".result").text(result);
        $("#result").show();
    });
});