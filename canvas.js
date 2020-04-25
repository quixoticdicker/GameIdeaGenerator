const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

var rand = new RNG();

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

deck = new Array();
for (let idx = 0; idx < 5; idx++)
{
    var aCard = new Card(rand.randomInt(0, window.innerWidth),
                         rand.randomInt(0, window.innerHeight),
                         rand.randomColor(),
                         rand.randomColor());
    deck.push(aCard);
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
    for (let card of deck)
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
    deck.forEach(function(card, idx, arr)
    {
        card.draw(c);
    });
};

function sortDeck()
{
    deck.sort(function(a, b)
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

function debuglog(msg)
{
    console.log(msg);
}
