function cards() {
    var test = document.createElement("img");
    test.style.width = "300px";
    test.style.height = "300px";
    test.style.backgroundImage = "url(./images/cardBack.jpg)";
    test.addEventListener("click", function() {
        test.style.backgroundImage = "url(./images/deck5.jpg)";
    });
    document.body.appendChild(test);

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