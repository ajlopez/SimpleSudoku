
var simplesudoku = require('..'),
    assert = require('assert');

// Get Associated Positions

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++) {
        var positions = simplesudoku.getPositions(x, y);
        assert.ok(positions);
        assert.equal(positions.length, 8+8+8);
    }
