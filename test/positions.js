
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

function check(px, py) {
    var positions = simplesudoku.getPositions(px, py);

    var x0 = Math.floor(px / 3) * 3;
    var y0 = Math.floor(py / 3) * 3;

    for (var x = 0; x < 3; x++)
        for (var y = 0; y < 3; y++)
            if (x0 + x !== px || y0 + y !== py)
                assert.ok(contains(positions, { x: x0 + x, y: y0 + y }));
}

for (var x = 0; x < 9; x++)
    for (var y = 0; y < 9; y++)
        check(x, y);

