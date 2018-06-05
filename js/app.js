/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

const cards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];

function startGame () {
  shuffle(cards);
};

startGame();

let ul = document.createElement('ul');
document.getElementById('template').appendChild(ul);
ul.classList.add('deck');

  cards.forEach(function(card) {

    let li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('card');

    let i = document.createElement('i');
    li.appendChild(i);
    for (var j = 0; j < cards.length; j++) {
    i.classList.add('fa', card);

  };

});


let allCards = document.querySelectorAll('.card');
let openCards = [];
let matchedCards = [];
let moves = 0;
let movesTotal = [];

allCards.forEach(function(card){
  card.addEventListener('click', function(e) {

    if (!card.classList.contains('open') && !card.classList.contains('show')) {
    openCards.push(card);
    card.classList.add('open', 'show');
    console.log('Open Cards:', openCards.length);
    movesTotal.push(moves);
    console.log(movesTotal.length);
    const totalMoves = document.querySelector('.moves');
    totalMoves.textContent = movesTotal.length;


      if (movesTotal.length <= 1) {
        const yellowStars = document.querySelector('.stars');
        yellowStars.style.color = '#FFA500';

      } else if (movesTotal.length >= 4 && movesTotal.length <=7) {

            console.log("2 stars");
            document.getElementById('star1').style.color = 'grey';
          } else if (movesTotal.length >= 8  ){

            document.getElementById('star2').style.color = 'grey';
      }

      if (openCards.length == 2) {

        if (openCards[0].innerHTML == openCards[1].innerHTML) {
          console.log("match");
          openCards[0].classList.add('match', 'open', 'show');
          openCards[1].classList.add('match', 'open', 'show');
          openCards = [];

        } else {

          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
            openCards = [];
          }, 700);
        }
      }
    }
  });
});
