
var simplesudoku = require('../..');

var game = simplesudoku.createGame();
game.load(process.argv[2]);

console.log(game.asString());

var solution = game.solve();

if (!solution)
    console.log("No solution");
else
    console.log(solution.asString());

