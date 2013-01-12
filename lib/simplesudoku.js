
'use strict'

var simplesudoku = (function() {
    var Width = 9;
    var Height = 9;

    var positions = [];

    for (var x = 0; x < 9; x++)
        for (var y = 0; y < 9; y++)
            positions[getOffset(x, y)] = calculatePositions(x, y);

    function getOffset(x, y) {
        return y * Width + x;
    }

    function calculatePositions(x, y) {
        var positions = [];

        for (var k = 0; k < 9; k++)
            if (k !== x)
                positions.push({ x: k, y: y });

        for (var k = 0; k < 9; k++)
            if (k !== y)
                positions.push({ x: x, y: k });

        var x0 = Math.floor(x / 3);
        var y0 = Math.floor(y / 3);

        for (var k = 0; k < 3; k++)
            for (var j = 0; j < 3; j++) {
                var nx = x + k;
                var ny = y + j;

                if (nx !== x || ny !== y)
                    positions.push({ x: nx, y: ny });
            }

        return positions;
    }

    function Game() {
        var numbers = [];

        this.getNumber = function (x, y) {
            var offset = getOffset(x, y);
            var number = numbers[offset];

            if (!number)
                return null;

            return number;
        }

        this.setNumber = function (x, y, number) {
            numbers[getOffset(x, y)] = number;
        }
    }

    return {
        createGame: function () { return new Game(); },
        getPositions: function (x, y) { return positions[getOffset(x, y)]; }
    }
})();

if (typeof window === 'undefined') {
	module.exports = simplesudoku;
}
