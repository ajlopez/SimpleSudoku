
var simplesudoku = require('..'),
    assert = require('assert');

// Load empty board from string

var game = simplesudoku.createGame();

game.load("..........");

var positions = game.getNumberPositions();
assert.ok(positions);
assert.equal(positions.length, 0);

// Load first row from string

var game = simplesudoku.createGame();

game.load("123456789");

var positions = game.getNumberPositions();
assert.ok(positions);
assert.equal(positions.length, 9);

for (var k = 0; k < 9; k++) {
    var position = positions[k];
    assert.equal(position.y, 0);
    assert.equal(position.x, k);
    assert.equal(position.number, k + 1);
}

// Load second row from string

var game = simplesudoku.createGame();

game.load(".........123456789");

var positions = game.getNumberPositions();
assert.ok(positions);
assert.equal(positions.length, 9);

for (var k = 0; k < 9; k++) {
    var position = positions[k];
    assert.equal(position.y, 1);
    assert.equal(position.x, k);
    assert.equal(position.number, k + 1);
}

// Load third row from string, with spaces and new lines

var game = simplesudoku.createGame();

game.load(". . . . . . . . .\n. . . . . . . . .\n1 2 3 4 5 6 7 8 9");

var positions = game.getNumberPositions();
assert.ok(positions);
assert.equal(positions.length, 9);

for (var k = 0; k < 9; k++) {
    var position = positions[k];
    assert.equal(position.y, 2);
    assert.equal(position.x, k);
    assert.equal(position.number, k + 1);
}
