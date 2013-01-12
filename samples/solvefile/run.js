
var simplesudoku = require('../..'),
    fs = require('fs');

var game = simplesudoku.createGame();
var filenames = process.argv.slice(2);

filenames.forEach(function (filename) {
    var text = fs.readFileSync(filename).toString();
    
    for (var pos = text.indexOf('\n'); text && pos >= 0; text = text.substring(pos + 1)) {
        var line = text.substring(0, pos);
        if (!line)
            continue;
        var game = simplesudoku.createGame();
        game.load(line);
        if (game.getCount() <= 10)
            continue;
        console.log(game.asString());
        var solution = game.solveSync();
        if (solution)
            console.log(solution.asString());
        else
            console.log("No solution");
    }
});

