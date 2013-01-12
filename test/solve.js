
var simplesudoku = require('..'),
    assert = require('assert');

// Problems from http://magictour.free.fr/sudoku.htm
// http://magictour.free.fr/topn87

// Solve problem 1

var game = simplesudoku.createGame();
game.load("4...3.......6..8..........1....5..9..8....6...7.2........1.27..5.3....4.9........");
var solution = game.solve();

assert.ok(solution);
assert.equal(solution.getCount(), 81);

// Solve problem 2

var game = simplesudoku.createGame();
game.load("7.8...3.....2.1...5.........4.....263...8.......1...9..9.6....4....7.5...........");
var solution = game.solve();

assert.ok(solution);
assert.equal(solution.getCount(), 81);
