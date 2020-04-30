const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

console.log(jsonDecks.decks[1].name);

var rand = new RNG();

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

var cardInDeckOffset = 10;
var minDeckSeparation = 10;
var cardWidth = 157;
var cardHeight = 224;
var cardBorderRatio = 8 / 224;
var sizeRatio = cardWidth / cardHeight;
var numDecks = jsonDecks.decks.length;
var mostCardsInADeck = 0;
for (let deck of jsonDecks.decks)
{
  if (deck.cards.length > mostCardsInADeck)
  {
    mostCardsInADeck = deck.cards.length;
  }
}
var maxCardHeight = ((cvs.height / 2) - 2 * mostCardsInADeck + 2) / (1 + mostCardsInADeck * cardBorderRatio - cardBorderRatio);
//(cvs.height / 2) - (mostCardsInADeck - 1) * cardInDeckOffset;
var maxCardWidth = (cvs.width - (numDecks + 1) * minDeckSeparation) / numDecks;
if (sizeRatio * maxCardHeight > maxCardWidth)
{
  cardWidth = maxCardWidth;
  cardHeight = maxCardWidth / sizeRatio;
}
else
{
  cardHeight = maxCardHeight;
  cardWidth = sizeRatio * maxCardHeight;
}
cardInDeckOffset = cardBorderRatio * cardHeight + 2;
console.log(cardHeight);
console.log(cardWidth);
var deckSpacing = (cvs.width - numDecks * cardWidth) / (numDecks + 1);

allCards = new Array();
var deckIdx = 0;
for (let deck of jsonDecks.decks)
{
  var foregroundColor = rand.randomColor();
  var backgroundColor = rand.randomColor();
  var cardIdx = 0;

  shuffleDeck(deck.cards);

  for (let card of deck.cards)
  {
    var aCard = new Card((deckIdx + 1) * deckSpacing + (deckIdx) * cardWidth,
                         (cvs.height / 2) - (cardHeight) - (cardIdx * cardInDeckOffset),
                         foregroundColor,
                         backgroundColor,
                         deck.name,
                         card,
                         cardWidth,
                         cardHeight,
                         cardInDeckOffset - 2,
                         c);
    allCards.push(aCard);
    cardIdx = cardIdx + 1;
  }
  deckIdx = deckIdx + 1;
}

redraw();

let mouse =
{
    x: undefined,
    y: undefined
};

var draggedCard;
var dragging = false;

window.addEventListener('resize', function ()
{
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    redraw();
});

window.addEventListener('mousemove', function (e)
{
    mouse.x = e.x;
    mouse.y = e.y;
    if (dragging)
    {
        debuglog("dragging");
        draggedCard.drag(mouse.x, mouse.y);
        redraw();
    }
});

window.addEventListener('mousedown', function (e)
{
    // check if click is within card boundry
    sortDeck();
    debuglog("checking cards");
    for (let card of allCards)
    {
        if (card.pointWithin(mouse.x, mouse.y))
        {
            draggedCard = card;
            dragging = true;
        }
    }
    if (dragging)
    {
        debuglog("starting to drag");
        draggedCard.startDragging(mouse.x, mouse.y);
        redraw();
    }
});

window.addEventListener('mouseup', function (e)
{
    debuglog("stopping dragging");
    dragging = false;
});

function redraw()
{
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    sortDeck();
    allCards.forEach(function(card, idx, arr)
    {
        card.draw(c);
    });
};

function sortDeck()
{
    allCards.sort(function(a, b)
    {
        // draw bottom to top, left to right
        var ydif = b.y - a.y;
        if (0 == ydif)
        {
            return a.x - b.x;
        }
        else
        {
            return ydif;
        }
    });
};

// using Fisher-Yates shuffle
function shuffleDeck(array)
{
  for (let i = array.length - 1; i > 0; --i)
  {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
};

function debuglog(msg)
{
    //console.log(msg);
}
