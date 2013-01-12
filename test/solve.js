
var simplesudoku = require('..'),
    assert = require('assert');

// Solve a problem

var game = simplesudoku.createGame();
game.load("4...3.......6..8..........1....5..9..8....6...7.2........1.27..5.3....4.9........");
var solution = game.solve();

assert.ok(solution);
assert.equal(solution.getCount(), 81);

