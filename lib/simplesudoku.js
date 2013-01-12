
'use strict'

var simplesudoku = (function() {
    function Game() {
    }

    return {
        createGame: function () { return new Game(); }
    }
})();

if (typeof window === 'undefined') {
	module.exports = simplesudoku;
}
