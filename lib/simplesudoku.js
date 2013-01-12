
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
                positions.push({ x: k, y: y, offset: getOffset(k, y) });

        for (var k = 0; k < 9; k++)
            if (k !== y)
                positions.push({ x: x, y: k, offset: getOffset(x, k) });

        var x0 = Math.floor(x / 3) * 3;
        var y0 = Math.floor(y / 3) * 3;

        for (var k = 0; k < 3; k++)
            for (var j = 0; j < 3; j++) {
                var nx = x0 + k;
                var ny = y0 + j;

                if (nx !== x && ny !== y)
                    positions.push({ x: nx, y: ny, offset: getOffset(nx, ny) });
            }

        return positions;
    }

    function Game(nums) {
        var numbers = nums ? nums.slice() : [];
        var candidates = [];

        this.getNumber = function (x, y) {
            var offset = getOffset(x, y);
            var number = numbers[offset];

            if (!number)
                return null;

            return number;
        };

        this.getNumberPositions = function () {
            var positions = [];

            for (var y = 0; y < Height; y++)
                for (var x = 0; x < Width; x++) {
                    var number = this.getNumber(x, y);
                    if (number)
                        positions.push({ x: x, y: y, number: number });
                }

            return positions;
        };

        this.getCount = function () {
            var count = 0;

            numbers.forEach(function (number) { if (number) count++; });
            return count;
        };

        this.solve = function () {
            if (this.getCount() === Width * Height)
                return this;

            var best = this.getBestCandidates();

            if (!best)
                return null;

            var l = best.candidates.length;

            if (l === 1) {
                this.setNumber(best.x, best.y, best.candidates[0]);
                return this.solve();
            }

            for (var k = 0; k < l; k++) {
                var game = new Game(numbers);
                game.setNumber(best.x, best.y, best.candidates[k]);
                var result = game.solve();

                if (result) return result;
            }

            return null;
        };

        this.asString = function () {
            var result = '';

            for (var y = 0; y < Height; y++) {
                for (var x = 0; x < Width; x++) {
                    if (x)
                        result += ' ';
                    var number = this.getNumber(x, y);
                    if (number)
                        result += number;
                    else
                        result += '.';
                }

                result += '\n';
            }

            return result;
        }

        this.setNumber = function (x, y, number) {
            numbers[getOffset(x, y)] = number;
            flush();
        };

        this.getCandidates = function (x, y) {
            var offset = getOffset(x, y);

            if (numbers[offset])
                return [];

            var result = candidates[offset];

            if (result)
                return result;

            var associates = positions[offset];
            var existing = [numbers[offset]];

            associates.forEach(function(associate) {
                existing.push(numbers[associate.offset]);
            });

            result = [];

            for (var n = 1; n <= 9; n++)
                if (existing.indexOf(n) < 0)
                    result.push(n);

            return result;
        };

        this.load = function (text) {
            var l = text.length;
            var x = 0;
            var y = 0;

            for (var k = 0; k < l; k++) {
                var ch = text[k];

                if (ch === '.')
                    x++;
                else if (ch >= '1' && ch <= '9') {
                    this.setNumber(x, y, ch - '0');
                    x++;
                }

                if (x >= Width) {
                    y++;
                    x = 0;
                }
            }
        };

        this.getBestCandidates = function () {
            var result = null;

            for (var x = 0; x < Width; x++)
                for (var y = 0; y < Height; y++) {
                    var candidates = this.getCandidates(x, y);                    

                    if (!candidates || candidates.length == 0)
                        if (!this.getNumber(x, y))
                            return null;
                        else
                            continue;

                    if (!result || result.candidates.length > candidates.length)
                        result = { x: x, y: y, candidates: candidates };
                }

            return result;
        };

        function flush() {
            candidates = [];
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
