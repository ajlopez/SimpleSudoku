
var simplesudoku = require('..'),
    assert = require('assert');

// Get Candidates in empty game

var game = simplesudoku.createGame();

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++) {
        var candidates = game.getCandidates(x, y);
        assert.ok(candidates);
        assert.equal(candidates.length, 9);

        for (var k = 1; k <= 9; k++)
            assert.ok(candidates.indexOf(k) >= 0);
    }

// Put a number

game.setNumber(1, 1, 1);

var result = game.getCandidates(1, 1);
assert.ok(result);
assert.equal(result.length, 8);
assert.ok(result.indexOf(1) < 0);

var result = game.getCandidates(0, 0);
assert.ok(result);
assert.equal(result.length, 8);
assert.ok(result.indexOf(1) < 0);

var result = game.getCandidates(8, 0);
assert.ok(result);
assert.equal(result.length, 8);
assert.ok(result.indexOf(1) < 0);

var result = game.getCandidates(0, 8);
assert.ok(result);
assert.equal(result.length, 8);
assert.ok(result.indexOf(1) < 0);
