var cards = [
{
  rank: "queen" ,
  suit: "hearts" ,
  cardImage: "/Users/relam/Documents/Git/fundamentals/wdi-fundamentals-memorygame/memory_game/images/queen-of-hearts.png"
},
{
  rank: "queen" ,
  suit: "diamonds" ,
  cardImage: "/Users/relam/Documents/Git/fundamentals/wdi-fundamentals-memorygame/memory_game/images/queen-of-diamonds.png"
},
{
  rank: "king" ,
  suit: "hearts" ,
  cardImage: "/Users/relam/Documents/Git/fundamentals/wdi-fundamentals-memorygame/memory_game/images/king-of-hearts.png"
},
{
  rank: "king" ,
  suit: "diamonds" ,
  cardImage: "/Users/relam/Documents/Git/fundamentals/wdi-fundamentals-memorygame/memory_game/images/king-of-diamonds.png"
}
];
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";
 console.log("User flipped " +cardOne);
 console.log("User flipped " +cardThree);
var cardsInPlay = []
cardsInPlay.push(cards["queen","king"].rank);
var checkForMatch = function () {
  if (cardsInPlay [0] === cardsInPlay[1]) {
    console.log("You found a match!");
} else {
    console.log("Sorry, try again.");
}
};
checkForMatch();
var flipCard = function () {
  this.getAttribute('data-id');
    console.log("User flipped" + cards["queen","king"].rank)
    cardImage.setAttribute(src[cardId].images)
  if (cardsInPlay.length === [2]) {
    ("cardOne" === "cardTwo");
} if (true) {
    alert ("You found a match!");
} else {
    alert ("Sorry, try again");
}
};
flipCard(0);
flipCard(2);
var createBoard = function () {
 console.log("Cards is", cards)
 console.log("cards.length is" , cards.length)
 console.log("createBoard is" , createBoard)
 console.log("createBoard.length is" , createBoard.length)
  for (var i = 0; i <createBoard.length; i++) {
var newImg = document.createElement('img');
cardElement('data-id')[i].setAttribute('src', "images/back.png");
cardElement.addEventListener('click', flipCard);
document.cardElement.appendChild(game-board);
}
}
createBoard();
