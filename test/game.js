
var simplesudoku = require('..'),
    assert = require('assert');

// Create Game

var game = simplesudoku.createGame();

assert.ok(game);

// Is empty

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++)
        assert.equal(game.getNumber(x, y), null);

// No numbers

var positions = game.getNumberPositions();
assert.ok(positions);
assert.equal(positions.length, 0);

assert.equal(game.getCount(), 0);

// Set number

game.setNumber(0, 0, 1);
assert.equal(game.getNumber(0, 0), 1);
assert.equal(game.getCount(), 1);
game.setNumber(0, 1, 2);
assert.equal(game.getNumber(0, 1), 2);
assert.equal(game.getNumber(0, 2), null);
assert.equal(game.getCount(), 2);

