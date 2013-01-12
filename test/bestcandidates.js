
var simplesudoku = require('..'),
    assert = require('assert');

// Get Best Candidates in empty game

var game = simplesudoku.createGame();

var best = game.getBestCandidates();

assert.ok(best);
assert.equal(best.x, 0);
assert.equal(best.y, 0);
assert.ok(best.candidates);
assert.equal(best.candidates.length, 9);

// Get Best Candidates in game with one number

var game = simplesudoku.createGame();
game.setNumber(1, 1, 1);

var best = game.getBestCandidates();

assert.ok(best);
assert.equal(best.x, 0);
assert.equal(best.y, 0);
assert.ok(best.candidates);
assert.equal(best.candidates.length, 8);
assert.ok(best.candidates.indexOf(1) < 0);

// Get Best Candidates in game with two numbers

var game = simplesudoku.createGame();
game.setNumber(1, 1, 1);
game.setNumber(2, 2, 2);

var best = game.getBestCandidates();

assert.ok(best);
assert.equal(best.x, 0);
assert.equal(best.y, 0);
assert.ok(best.candidates);
assert.equal(best.candidates.length, 7);
assert.ok(best.candidates.indexOf(1) < 0);
assert.ok(best.candidates.indexOf(2) < 0);

// Get Best Candidates in game with three numbers

var game = simplesudoku.createGame();
game.setNumber(1, 1, 1);
game.setNumber(2, 2, 2);
game.setNumber(1, 8, 3);

var best = game.getBestCandidates();

assert.ok(best);
assert.equal(best.x, 1);
assert.equal(best.y, 0);
assert.ok(best.candidates);
assert.equal(best.candidates.length, 6);
assert.ok(best.candidates.indexOf(1) < 0);
assert.ok(best.candidates.indexOf(2) < 0);
assert.ok(best.candidates.indexOf(3) < 0);
