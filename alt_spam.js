var q1 = "Is fire hot or cold?";
var q2 = "Is the sky orange or blue?";
var q3 = "Do birds fly or crawl?";
var q4 = "Are flamingos yellow or pink?";

var ques = ["Is fire hot or cold?", "Is the sky orange or blue?", "Do birds fly or crawl?", "Are flamingos yellow or pink?"];
var answers = ["hot", "blue", "fly", "pink"];
var rand;
var currNum = 5;
var input;

function InitFilter() {
    rand = Math.floor(Math.random() * 4);

    if (currNum == rand) {
        if (rand != 0) {
            rand -= 1;
        }
        else {
            rand += 1;
        }
        currNum = rand;
        WriteElement();
    }
    else {
        currNum = rand;
        WriteElement();
    }
}

function WriteElement() {
    var input = "<p>Please answer the security question below. <img src='/branches/library/images/info_icon_sm.png' alt='Tooltip' data-toggle='tooltip' title='Answering this security question helps prevent automated programs from spamming this form.' /><br />" + ques[rand] + " <input type='text' id='question' class='form-control'/></p>";
    document.getElementById("questionBox").innerHTML = input;
}
