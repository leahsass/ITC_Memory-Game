var MemoryGame = {};

MemoryGame.clicks = 0;
MemoryGame.firstClick = "";
MemoryGame.secondClick = "";
MemoryGame.cards = ["A", "B", "C", "D", "E", "F"];

// for(var i = 1; i <= cards.length; i++) {
//     var newCard = document.createElement("img");
//     newCard.src = "./images/s" + i + ".jpg";
//     cards.push();
// }

MemoryGame.start = function() {
    //initialize game
    //randomize array (each card can be a new object)
    //create board

    MemoryGame.createBoard();
};

MemoryGame.randomize = function() {
    var selected = [];
    for (var i = 0; i < cards.length; i++) {
        var randomImg = floor(random(cards.length));
        var newCard = cards[randomImg];
        // Push 2 copies into new array
        selected.push(newCard);
        selected.push(newCard);
        // Remove from array old array
        newCard.splice(randomImg, 1);
    }
}

MemoryGame.createBoard = function() {
    var main = document.createElement("div");
    main.id = "main";
    for(var r = 0; r < 3; r++) {
        // var faceCard = document.createElement("img");
        var faceCard = document.createElement("div");
        faceCard.id = "card" + r;
        faceCard.classList.add("gameCards");
        faceCard.style.width = "300px";
        faceCard.style.height = "300px";
        // faceCard.style.backgroundImage = "url(./images/cardBack.jpg)";
        faceCard.style.backgroundColor = "black";
        faceCard.addEventListener("click", function() {
            // faceCard.style.backgroundImage = "url(./images/deck5.jpg)";
            faceCard.style.backgroundColor = "red";
        });
    }
    var faceCard = document.getElementsByClassName("gameCards");
    main.appendChild(faceCard);
}

MemoryGame.start();