
words = ["belleayre", "gore", "plattekill", "hunter", "windham", "camelback", "shawnee", "killington", "bromley", "burke", "snow", "okemo", "pico", "stowe", "stratton", "sugarbush", "mammoth", "northstar", "vail", "aspen"];

var letters = document.querySelector(".letter");

//Words.List[0] = "belleayre";
//Words.List[1] = "gore";
//Words.List[2] = "plattekill";
//Words.List[3] = "hunter";
//Words.List[4] = "windham";
//Words.List[5] = "camelback";
//Words.List[6] = "shawnee";
//Words.List[7] = "killington";
//Words.List[8] = "bromley";
//Words.List[9] = "burke";
//Words.List[10] = "snow";
//Words.List[11] = "okemo";
//Words.List[12] = "pico";
//Words.List[13] = "stowe";
//Words.List[14] = "stratton";
//Words.List[15] = "sugarbush";
//Words.List[16] = "mammoth";
//Words.List[17] = "northstar";
//Words.List[18] = "vail";
//Words.List[19] = "aspen";

words.Length = words.length;


//contains letters for each word
wordArray = [];
//underline array
wordUnderLineArray = [];
//lives
lives = 10;
numInWord = words.Length;
word = "";
wordU = "";


//functions

//random word
pullWord = function() {
    word = words[(Math.floor(Math.random() * numInWord))];
}

//underline
setUnderline = function() {
    pullWord();
    for (i = 0; i < word.length; i++) {
        wordArray[i] = word.charAt(i);
        wordUnderLineArray[i] = "_";
    }
    wordU = wordUnderLineArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    document.getElementById("numLetters").innerHTML = word.length;
}



updateLetter = function(letter) {
    Changes = 0;
    for (i = 0; i < word.length; i++) {
        wordArray[i] = word.charAt(i);
        if (word.charAt(i) === letter) {
            wordUnderLineArray[i] = letter;
            Changes += 1;
        }
    }
    if (Changes < 1) {
        lives -= 1;
        document.getElementById("lives").innerHTML = lives;
    }
    wordU = wordUnderLineArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    word1 = wordArray.join("");
    word2 = wordUnderLineArray.join("");
    if (word1 === word2) {
        alert("You Won! Loading the next Word.");
        //3 second delay before the game resets with a new word
        setInterval('window.location.reload()', 3000);
        //window.location.reload();
    }
    if (lives < 1) {
        document.getElementById("WORD").innerHTML === word1;
        alert("You Have No More Lives, Try Again!");
        //3 second delay here also
        setInterval('window.location.reload()', 3000);
    }
}

pullWord();
setUnderline();


//LetterClicks
$(function() {

     $(".letter").click(function(event) {
        
        var answer = $(this).data('letter');
        //console.log(answer);
        event.preventDefault();
        updateLetter(answer);
    });

    // $("#a").click(function(event) {
    //     event.preventDefault();
    //     updateLetter("a");
    // });
});

// $(function() {
//     $("#b").click(function(event) {
//         event.preventDefault();
//         updateLetter("b");
//     });
// });
// $(function() {
//     $("#c").click(function(event) {
//         event.preventDefault();
//         updateLetter("c");
//     });
// });
// $(function() {
//     $("#d").click(function(event) {
//         event.preventDefault();
//         updateLetter("d");
//     });
// });
// $(function() {
//     $("#e").click(function(event) {
//         event.preventDefault();
//         updateLetter("e");
//     });
// });
// $(function() {
//     $("#f").click(function(event) {
//         event.preventDefault();
//         updateLetter("f");
//     });
// });
// $(function() {
//     $("#g").click(function(event) {
//         event.preventDefault();
//         updateLetter("g");
//     });
// });
// $(function() {
//     $("#h").click(function(event) {
//         event.preventDefault();
//         updateLetter("h");
//     });
// });
// $(function() {
//     $("#i").click(function(event) {
//         event.preventDefault();
//         updateLetter("i");
//     });
// });
// $(function() {
//     $("#j").click(function(event) {
//         event.preventDefault();
//         updateLetter("j");
//     });
// });
// $(function() {
//     $("#k").click(function(event) {
//         event.preventDefault();
//         updateLetter("k");
//     });
// });
// $(function() {
//     $("#l").click(function(event) {
//         event.preventDefault();
//         updateLetter("l");
//     });
// });
// $(function() {
//     $("#m").click(function(event) {
//         event.preventDefault();
//         updateLetter("m");
//     });
// });
// $(function() {
//     $("#n").click(function(event) {
//         event.preventDefault();
//         updateLetter("n");
//     });
// });
// $(function() {
//     $("#o").click(function(event) {
//         event.preventDefault();
//         updateLetter("o");
//     });
// });
// $(function() {
//     $("#p").click(function(event) {
//         event.preventDefault();
//         updateLetter("p");
//     });
// });
// $(function() {
//     $("#q").click(function(event) {
//         event.preventDefault();
//         updateLetter("q");
//     });
// });
// $(function() {
//     $("#r").click(function(event) {
//         event.preventDefault();
//         updateLetter("r");
//     });
// });
// $(function() {
//     $("#s").click(function(event) {
//         event.preventDefault();
//         updateLetter("s");
//     });
// });
// $(function() {
//     $("#t").click(function(event) {
//         event.preventDefault();
//         updateLetter("t");
//     });
// });
// $(function() {
//     $("#u").click(function(event) {
//         event.preventDefault();
//         updateLetter("u");
//     });
// });

// $(function() {
//     $("#v").click(function(event) {
//         event.preventDefault();
//         updateLetter("v");
//     });
// });
// $(function() {
//     $("#w").click(function(event) {
//         event.preventDefault();
//         updateLetter("w");
//     });
// });
// $(function() {
//     $("#x").click(function(event) {
//         event.preventDefault();
//         updateLetter("x");
//     });
// });
// $(function() {
//     $("#y").click(function(event) {
//         event.preventDefault();
//         updateLetter("y");
//     });
// });
// $(function() {
//     $("#z").click(function(event) {
//         event.preventDefault();
//         updateLetter("z");
//     });
// });
