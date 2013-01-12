
'use strict'

var simplesudoku = (function() {
    var Width = 9;
    var Height = 9;

    function Game() {
        var numbers = [];

        this.getNumber = function (x, y) {
            var offset = getOffset(x, y);
            var number = numbers[offset];

            if (!number)
                return null;

            return number;
        }

        function getOffset(x, y) {
            return y * Width + x;
        }
    }

    return {
        createGame: function () { return new Game(); }
    }
})();

if (typeof window === 'undefined') {
	module.exports = simplesudoku;
}
