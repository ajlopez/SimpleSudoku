
var simplesudoku = require('..'),
    assert = require('assert');

// Create Game

var game = simplesudoku.createGame();

assert.ok(game);

// Is empty

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++)
        assert.equal(game.getNumber(x, y), null);

