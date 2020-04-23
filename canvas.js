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
    aCard.draw(c);
    deck.push(aCard);
}

let mouse =
{
    x: undefined,
    y: undefined
};

window.addEventListener('resize', function ()
{
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
});

window.addEventListener('mousemove', function (e)
{
    mouse.x = event.x;
    mouse.y = event.y;
    //redraw();
});

window.addEventListener('onmousedown', function ()
{
    
});

function redraw()
//function animate()
{
    //requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (card in deck)
    {
        card.draw(c);
    };
};
