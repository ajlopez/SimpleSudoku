
var simplesudoku = require('..'),
    assert = require('assert');

// Get Associated Positions

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++) {
        var positions = simplesudoku.getPositions(x, y);
        assert.ok(positions);
        assert.equal(positions.length, 8+8+4);

        positions.forEach(function (position) {
            assert.ok(position.x !== undefined);
            assert.ok(position.y !== undefined);
            assert.ok(position.x !== x || position.y !== y);
        });
    }

// Contains position

function contains(positions, position) {
    for (var n in positions) {
        var pos = positions[n];

        if (pos.x === position.x && pos.y === position.y)
            return true;
    }

    return false;
}

var positions = simplesudoku.getPositions(0, 0);

for (var x = 0; x < 3; x++)
    for (var y = 0; y < 3; y++)
        if (x !== 0 || y !== 0)
            assert.ok(contains(positions, { x: x, y: y }));

var positions = simplesudoku.getPositions(2, 2);

for (var x = 0; x < 3; x++)
    for (var y = 0; y < 3; y++)
        if (x !== 2 || y !== 2)
            assert.ok(contains(positions, { x: x, y: y }));

