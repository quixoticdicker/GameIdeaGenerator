# Game Idea Generator
As the title implies, this project provides inspiration for new games. Instead of taking a direct approach of just spitting out a game idea, this generator takes the form of a game in itself by providing decks of categories from which the would-be game creator draws inspiration.

## Background
I was originally inspired by Sebastian Lague's [game idea generator](https://seblague.github.io/ideagenerator/) and his briliant [video describing it](https://www.youtube.com/watch?v=--GB9qyZJqg). After poking Sebastian's "generate idea" button for quite a while, there were several times when the game ideas presented were close to perfect, but not quite right. I wanted to give the creator a bit more agency by allowing them to replace cards they dislike or give themselves more direction by drawing more. I was also fresh off of Ludum Dare 46, so my creative juices were flowing, and I liked the idea of creating a meta game.

## What You Can Do
##### Try it out!
You can find it on [github pages](https://quixoticdicker.github.io/GameIdeaGenerator/) or clone it [on github](https://github.com/quixoticdicker/GameIdeaGenerator).
##### Add more cards
You can modify the "[decks_simple.json](https://github.com/quixoticdicker/GameIdeaGenerator/blob/master/decks_simple.json)" file to have new cards or completely new decks.
##### Use it for anything else
I created this thing to come up with game ideas, but it could be pretty easily modified to play simple hot-seat card games as well. Use it to make a game of war or play king's cup. Be creative; have fun.

## Future Work
I consider this to be basically done, but there are a few things I might change or improve.
1. **Make the colors always readable.**
The colors are currently random. I like it quite a bit as is, but sometimes you get unlucky and can barely read what's on the card. I made a small program in the past that measures the readability of colored text on a colored background, so maybe I'll keep the randomness and recycle some of that code.
2. ~**Scale the cards based on the screen size.**
Currently, the width and height of the cards is hard coded. This means that the cards are a great size for the screen that I developed this on, but even if I run it on my laptop screen, the cards are too big. This would be super easy to fix.~ **Added 4/30/2020**
3. **Scale the text on the cards better.**
Currently, the text is displayed at a specific size, and if the width of the text doesn't fit on the card, the size is shrinked. For the deck "mcguffin descriptor" the text could be broken into multiple lines rather than just shrinking the text size. I don't think this would be too hard to fix, I just don't really want to do it.
4. **Add more complex graphics to the cards.**
Originally, I wanted each card to have custom vector graphics. I had ideas for most of the cards, but I found it a little difficult to translate those ideas to vector graphics and those vector graphics to a json file and that json file to a card on the screen. I might come back to this later, but I don't really think its needed right now. You can sort of see what I was thinking in the "decks.json" file.

