var MemoryGame = {};

MemoryGame.gameImages =  [];
    MemoryGame.gameImages.push("url(./images/s1.jpg)");
    MemoryGame.gameImages.push("url(./images/s2.jpg)");
    MemoryGame.gameImages.push("url(./images/s3.jpg)");
    MemoryGame.gameImages.push("url(./images/s4.jpg)");
    MemoryGame.gameImages.push("url(./images/s5.jpg)");
    MemoryGame.gameImages.push("url(./images/s6.jpg)");

MemoryGame.startGame = function() {
    MemoryGame.newBoard();
};

MemoryGame.shuffleCards = function() {
    var shuffle = MemoryGame.gameImages.length;
    while (shuffle) {
       var i = Math.floor(Math.random() * shuffle--);
       var temp = MemoryGame.gameImages[shuffle];
       MemoryGame.gameImages[shuffle] = MemoryGame.gameImages[i];
       MemoryGame.gameImages[i] = temp;
    }
  return MemoryGame.gameImages;
}

MemoryGame.newBoard = function() {
    var board = document.createElement("div");
    board.id = "gameBoard";
    board.style.width = "auto";
    board.style.height = "100%";

    var newGame = document.createElement("button");
    newGame.id = "newGame";
    newGame.innerHTML = "New Game";
    newGame.classList.add("clickable");
    newGame.addEventListener("click", MemoryGame.shuffleCards);
    document.body.appendChild(newGame);

    for(var s = 0; s < MemoryGame.gameImages.length; s++) {
        var cardDiv = document.createElement("div");
        cardDiv.style.backgroundImage = MemoryGame.gameImages[s];
        cardDiv.style.height = "300px";
        cardDiv.style.width = "300px";
        document.body.appendChild(cardDiv);
    }   
}

MemoryGame.startGame();