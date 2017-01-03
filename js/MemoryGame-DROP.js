var memoryGame = {};
var NUM_OF_IMAGES = 6;

// memoryGame.welcome = function() {
//     var welcome = document.createElement("div")
//     welcome.id = "welcome";
//     welcome.innerHTML = "Welcome to The Memory Game!";
//     var newGame = document.createElement("button");
//     newGame.id = "newGame";
//     newGame.innerHTML = "New Game";
//     newGame.addEventListener("click", memoryGame.shuffle);
//     var cancel = document.createElement("button");
//     cancel.id = "cancel";
//     cancel.innerHTML = "Cancel";
//     document.body.appendChild(welcome);
//     welcome.appendChild(newGame);
//     welcome.appendChild(cancel);
// }

// memoryGame.main = function() {
//     var main = document.createElement("div");
//     main.id = "main";
//     main.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
//     // main.style.background = "url(../images/board.jpg) no-repeat center center";
//     // main.style.backgroundSize = "cover";
//     document.body.appendChild(main);
// }

memoryGame.cards = function() {
    var cardDown = document.createElement("img");
    cardDown.id = "gameCard";
    cardDown.style.width = "300px";
    cardDown.style.height = "300px";
    for(var r = 0; r < 4; r++) {
        // var main = document.getElementById("main");
        var row = document.getElementById("gameCard");
        document.body.appendChild(row) 
        row.classList.add("row");
        row.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
        for(var c = 0; c < 3; c++) {
            var newCard = document.getElementById("gameCard");
            newCard.classList.add("newCard", "clickable");
            newCard.style.backgroundImage = "url(./images/cardBack.jpg)";
            row.appendChild(newCard);
        }
    }
    cardDown.addEventListener("click", flipcard);

    // for(var r = 0; r < 4; r++) {
    //     var row = document.createElement("div");
    //     document.body.appendChild(row) 
    //     row.classList.add("row");
    //     row.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
    //     for(var c = 0; c < 3; c++) {
    //         var card = document.createElement("div");
    //         card.id = "memCard";
    //         card.classList.add("card", "clickable");
    //         card.style.backgroundColor = "black";
    //         row.appendChild(card);
    //     }
    // }
}

// memoryGame.shuffle = function() {
//     var images = [];
//     for(var i = 1; i <= NUM_OF_IMAGES; i++) {
//         var newImg = document.createElement("img");
//         var imgSrc = newImg.src = "../images/deck" + i + ".jpg";
//         images.push(imgSrc);
    


//     while (images.length) {
//     var randImg = Math.floor(Math.random() * images.length--);
//     var temp = array[images.length];
//     array[images.length] = array[i];
//     array[i] = temp;
//     }
//     return array;

//     var shuffledImgs = images;
//     for(var i = 0; i < shuffledImgs.length-1; i++) {
//         var shuffledCards = document.getElementsByClassName("card");
//         shuffledCards[i].style.backgroundImage = shuffledImgs[i];
//     }
// }
function flipcard() {
        cardDown.style.backgroundImage = "url(./images/deck5.jpg)";
}



memoryGame.init = function() {
    // memoryGame.welcome();
    // memoryGame.main();
    memoryGame.cards();
    // memoryGame.random();
    // memoryGame.flip();
    // memoryGame.newGame();
}