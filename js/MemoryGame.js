var MemoryGame = {};

MemoryGame.arrImgs = [];
    MemoryGame.arrImgs.push("url(./images/s1.jpg)");
    MemoryGame.arrImgs.push("url(./images/s2.jpg)");
    MemoryGame.arrImgs.push("url(./images/s3.jpg)");
    MemoryGame.arrImgs.push("url(./images/s4.jpg)");
    MemoryGame.arrImgs.push("url(./images/s5.jpg)");
    MemoryGame.arrImgs.push("url(./images/s6.jpg)");

MemoryGame.newArray = [];

MemoryGame.cardBack = "url(./images/blank-sticky-note.png)";

MemoryGame.clickCount = 0;

MemoryGame.matchCount = 0;

MemoryGame.startGame = function() {
    MemoryGame.createBoard();
    MemoryGame.duplicateArray(MemoryGame.arrImgs);
    MemoryGame.shuffleArray(MemoryGame.newArray);
    MemoryGame.assignCardImgs(MemoryGame.newArray); 
}


//Wecome
MemoryGame.welcome = function() {
    document.body.style.backgroundImage = "url(./images/chalkboard.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    var welcome = document.createElement("div");
    welcome.classList.add("welcome");
    welcome.innerHTML = "WELCOME TO MEMORY GAME!"
    var container = document.getElementById("container");
    container.appendChild(welcome);

    // var popUp = document.createElement("div");
    //     popUp.id = "popUp";
    //     popUp.style.display = "none";

    //     var popUpText = document.createElement("div");
    //     popUpText.classList.add("popUpText");
    //     popUpText.innerHTML = "Congrats! You Won!";
    //     popUp.appendChild(popUpText);
        
    //     var popUpBtn = document.createElement("button");
    //     popUpBtn.classList.add("popUpBtn");
    //     popUpBtn.innerHTML = "New Game";
    //     popUp.appendChild(popUpBtn);

    //     document.body.appendChild(popUp);

    //     popUpBtn.addEventListener("click", function() {
    //         MemoryGame.startGame();
    //         popUp.style.display = "none";
    //     });
}
MemoryGame.welcome();


//Create Board
MemoryGame.createBoard = function() {
    var cardNum = 1;
    for(var r = 0; r < 3; r++) {
        //Create row
        var row = document.createElement("div"); 
        row.classList.add("row");
        row.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");

        //Create card div
        for(var c = 0; c < 4; c++) {
            var card = document.createElement("div");
            card.classList.add("card");
            card.addEventListener("click", MemoryGame.userClicks);
            card.id = "num" + cardNum;
            cardNum += 1;
            row.appendChild(card);
        }

        //Append to main container
        var container = document.getElementById("container");
        container.appendChild(row);
    }
}


//Duplicate array
MemoryGame.duplicateArray = function(originalArray) {
    var clone = originalArray.slice(0);
    MemoryGame.newArray = originalArray.concat(clone);
    // console.log(newArray);
    return MemoryGame.newArray;
}


//Assign duplicated array to new array
MemoryGame.assignCardImgs = function(newArray) {
    var cardNum = 1;
    for(var i = 0; i < newArray.length; i++) {
        var newCard = document.getElementById("num" + cardNum);
        newCard.style.backgroundImage = MemoryGame.cardBack;
        newCard.setAttribute("memGameData", newArray[i]);
        cardNum += 1;
    }
}


//Shuffle array
MemoryGame.shuffleArray = function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
  return array;
}


//THE GAME


//User clicks cards
MemoryGame.userClicks = function(e) {
    var clickedCard = e.target;
    MemoryGame.addClass(clickedCard, "clicked");
    MemoryGame.changeSrcFace(clickedCard);
    MemoryGame.clickCount++;

    if(MemoryGame.clickCount === 2) {
        setTimeout(function() {
        var compare = document.getElementsByClassName("clicked");
        if(compare[0].style.backgroundImage === compare[1].style.backgroundImage) {
            MemoryGame.addClass(compare[0], "match");
            MemoryGame.addClass(compare[1], "match");
            MemoryGame.removeClass(compare[0], "clicked");
            MemoryGame.removeClass(compare[0], "clicked");
            MemoryGame.clickCount = 0;
            MemoryGame.matchCount++;
            if(MemoryGame.matchCount === MemoryGame.arrImgs.length) {
                MemoryGame.gameOver();
                // var popUp = document.getElementById("popUp");
                // popUp.style.display = "block"; 
                MemoryGame.matchCount = 0;
            }

        } else {
            MemoryGame.changeSrcBack(compare[0], MemoryGame.cardBack);
            MemoryGame.changeSrcBack(compare[1], MemoryGame.cardBack);
            MemoryGame.removeClass(compare[0], "clicked");
            MemoryGame.removeClass(compare[0], "clicked");
            MemoryGame.clickCount = 0;
        } }, 800);
    } 
}


//add class
MemoryGame.addClass = function(element, newClass) {
    element.classList.add(newClass);
}


//remove class
MemoryGame.removeClass = function(element, removeClass) {
    element.classList.remove(removeClass);
}


//Change img source to face up
MemoryGame.changeSrcFace = function(element) {
    element.style.backgroundImage = element.getAttribute("memGameData");
}


//Change img source to face down
MemoryGame.changeSrcBack = function(element, source) {
    element.style.backgroundImage = source;
}


//remove popup
MemoryGame.removePopUp = function() {
    var popUpRem = document.getElementById("popUp");
    popUpRem.remove(popUp);
}


//new game popup
MemoryGame.gameOver = function() {
    var popUp = document.createElement("div");
    popUp.id = "popUp";

    var popUpText = document.createElement("div");
    popUpText.classList.add("popUpText");
    popUpText.innerHTML = "Congrats! You Won!";
    popUp.appendChild(popUpText);
    
    var popUpBtn = document.createElement("button");
    popUpBtn.classList.add("popUpBtn");
    popUpBtn.innerHTML = "New Game";
    popUp.appendChild(popUpBtn);

    document.body.appendChild(popUp);

    popUpBtn.addEventListener("click", function() {
        // document.body.style.backgroundImage = "none";
        // document.body.style.backgroundSize = "none";
        MemoryGame.startGame();
        MemoryGame.removePopUp();
        
    }); 
}


MemoryGame.startGame();