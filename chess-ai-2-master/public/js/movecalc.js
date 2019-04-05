/**
 * Finds a random move to make
 * @return {string} move to make
 */
var randomMove = function() {
  var possibleMoves = game.moves();
  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[randomIndex];
};

/**
 * Evaluates current chess board relative to player
 * @param {string} color - Players color, either 'b' or 'w'
 * @return {Number} board value relative to player
 */
 var evaluateBoard1 = function(board, color) {
   // Sets the value for each piece using standard piece value
   var pieceValue = {
     'p': 100,
     'n': 350,
     'b': 350,
     'r': 525,
     'q': 1000,
     'k': 10000
   };

   // Loop through all pieces on the board and sum up total
   var value = 0;
   board.forEach(function(row) {
     row.forEach(function(piece) {
       if (piece) {
         // Subtract piece value if it is opponent's piece
         value += pieceValue[piece['type']]
                  * (piece['color'] === color ? 1 : -1);
       }
     });
   });

   return value;
 };

var evaluateBoard2 = function(board, color) {
  // Sets the value for each piece using standard piece value
  var pieceValue = {
    'p': 100,
    'n': 350,
    'b': 350,
    'r': 525,
    'q': 1000,
    'k': 10000
  }


var boardPW = [[0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
              [50.0,  50.0,  50.0,  50.0,  50.0,  50.0,  50.0,  50.0],
              [10.0,  10.0,  20.0,  30.0,  30.0,  20.0,  10.0,  10.0],
              [5.0,  5.0,  10.0,  25.0,  25.0,  10.0,  5.0,  5.0],
              [0.0,  0.0,  0.0,  20.0,  20.0,  0.0,  0.0,  0.0],
              [5.0, -5.0, -10.0,  0.0,  0.0, -10.0, -5.0,  5.0],
              [5.0,  10.0, 10.0,  -20.0, -20.0,  10.0,  10.0,  5.0],
              [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]];

var boardNW = [[-50.0, -40.0, -30.0, -30.0, -30.0, -30.0, -40.0, -50.0],
              [-40.0, -20.0, 0.0, 0.0, 0.0, 0.0, -20.0, -40.0],
              [-30.0, 0.0, 10.0, 15.0, 15.0, 10.0, 0.0, -30.0],
              [-30.0, 5.0, 15.0, 20.0, 20.0, 15.0, 5.0, -30.0],
              [-30.0, 5.0, 15.0, 20.0, 20.0, 15.0, 5.0, -30.0],
              [-30.0, 0.0, 10.0, 15.0, 15.0, 10.0, 0.0, -30.0],
              [-40.0, -20.0, 0.0, 0.0, 0.0, 0.0, -20.0, -40.0],
              [-50.0, -40.0, -30.0, -30.0, -30.0, -30.0, -40.0, -50.0]];

var boardBW = [[-20.0, -10.0, -10.0, -10.0, -10.0, -10.0, -10.0, -20.0],
              [-10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 10.0, 10.0, 5.0, 0.0, -10.0],
              [-10.0, 5.0, 5.0, 10.0, 10.0, 5.0, 5.0, -10.0],
              [-10.0, 0.0, 10.0, 10.0, 10.0, 10.0, 10.0, -10.0],
              [-10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, -10.0],
              [-10.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, -10.0],
              [-20.0, -10.0, -10.0, -10.0, -10.0, -10.0, -10.0, -20.0]];

var boardRW = [[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
              [5.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0 ],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [0.0, 0.0, 0.0, 5.0, 5.0, 0.0, 0.0, 0.0]];


var boardQW = [[ -20.0, -10.0, -10.0, -5.0, -5.0, -10.0, -10.0, -20.0],
              [-10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -10.0],
              [-5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -5.0],
              [ 0.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -5.0],
              [ -10.0, 5.0, 5.0, 5.0, 5.0, 5.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [ -20.0, -10.0, -10.0, -5.0, -5.0, -10.0, -10.0, -20.0]];

var boardKW = [[ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -20.0, -30.0, -30.0, -40.0, -40.0, -30.0, -30.0, -20.0],
               [ -10.0, -20.0, -20.0, -20.0, -20.0, -20.0, -20.0, -10.0],
               [20.0, 20.0, 0.0, 0.0, 0.0, 0.0, 20.0, 20.0],
               [20.0, 30.0, 10.0, 0.0, 0.0, 10.0, 30.0, 20.0]];



var boardPB = boardPW.slice().reverse();
var boardNB = boardNW.slice().reverse();
var boardBB = boardBW.slice().reverse();
var boardRB = boardRW.slice().reverse();
var boardQB = boardQW.slice().reverse();
var boardKB = boardKW.slice().reverse();


  // Loop through all pieces on the board and sum up total
 var i = 0;
  var j = 0;
  var value = 0;
  board.forEach(function(row) {
    row.forEach(function(piece) {
      if (piece) {
        // Subtract piece value if it is opponent's piece
        value += pieceValue[piece['type']]
                 * (piece['color'] === color ? 1 : -1);
        if (color === 'w'){
          if(piece['type']==='p'){
            value += (boardPW[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='n'){
            value += (boardNW[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='b'){
            value += (boardBW[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='r'){
            value += (boardRW[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='q'){
            value += (boardQW[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='k'){
            value += (boardKW[i][j])
                     *(piece['color'] === color ? 1 : -1);}
}
        //value += (positionValueW[piece['type']][i][j])
                 //* (piece['color'] === color ? 1 : -1);}
        else{
          if(piece['type']==='p'){
            value += (boardPB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='n'){
            value += (boardNB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='b'){
            value += (boardBB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='r'){
            value += (boardRB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='q'){
            value += (boardQB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          else if(piece['type']==='k'){
            value += (boardKB[i][j])
                     *(piece['color'] === color ? 1 : -1);}

          //value += (positionValueB[piece['type']][i][j])
                 //* (piece['color'] === color ? 1 : -1);
        }
      }
      j = j+1;
    });
	j=0;
    i = i+1;
  });

  return value;
};

var evaluateBoard3 = function(board, color) {
  // Sets the value for each piece using standard piece value
  var pieceValue = {
    'p': 100,
    'n': 350,
    'b': 350,
    'r': 525,
    'q': 1000,
    'k': 10000
  }


var boardPW = [[0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
              [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
              [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
              [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
              [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
              [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
              [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
              [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]];

var boardNW = [[-50.0, -40.0, -30.0, -30.0, -30.0, -30.0, -40.0, -50.0],
              [-40.0, -20.0, 0.0, 0.0, 0.0, 0.0, -20.0, -40.0],
              [-30.0, 0.0, 10.0, 15.0, 15.0, 10.0, 0.0, -30.0],
              [-30.0, 5.0, 15.0, 20.0, 20.0, 15.0, 5.0, -30.0],
              [-30.0, 5.0, 15.0, 20.0, 20.0, 15.0, 5.0, -30.0],
              [-30.0, 0.0, 10.0, 15.0, 15.0, 10.0, 0.0, -30.0],
              [-40.0, -20.0, 0.0, 0.0, 0.0, 0.0, -20.0, -40.0],
              [-50.0, -40.0, -30.0, -30.0, -30.0, -30.0, -40.0, -50.0]];

var boardBW = [[-20.0, -10.0, -10.0, -10.0, -10.0, -10.0, -10.0, -20.0],
              [-10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 10.0, 10.0, 5.0, 0.0, -10.0],
              [-10.0, 5.0, 5.0, 10.0, 10.0, 5.0, 5.0, -10.0],
              [-10.0, 0.0, 10.0, 10.0, 10.0, 10.0, 10.0, -10.0],
              [-10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, -10.0],
              [-10.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, -10.0],
              [-20.0, -10.0, -10.0, -10.0, -10.0, -10.0, -10.0, -20.0]];

var boardRW = [[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
              [5.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0 ],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [-5.0, 0.0, 0.0, 0.0 ,0.0 , 0.0, 0.0, -5.0],
              [0.0, 0.0, 0.0, 5.0, 5.0, 0.0, 0.0, 0.0]];


var boardQW = [[ -20.0, -10.0, -10.0, -5.0, -5.0, -10.0, -10.0, -20.0],
              [-10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -10.0],
              [-5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -5.0],
              [ 0.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, -5.0],
              [ -10.0, 5.0, 5.0, 5.0, 5.0, 5.0, 0.0, -10.0],
              [-10.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, -10.0],
              [ -20.0, -10.0, -10.0, -5.0, -5.0, -10.0, -10.0, -20.0]];

var boardKW = [[ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -30.0, -40.0, -40.0, -50.0, -50.0, -40.0, -40.0, -30.0],
               [ -20.0, -30.0, -30.0, -40.0, -40.0, -30.0, -30.0, -20.0],
               [ -10.0, -20.0, -20.0, -20.0, -20.0, -20.0, -20.0, -10.0],
               [20.0, 20.0, 0.0, 0.0, 0.0, 0.0, 20.0, 20.0],
               [20.0, 30.0, 10.0, 0.0, 0.0, 10.0, 30.0, 20.0]];



var boardPB = boardPW.slice().reverse();
var boardNB = boardNW.slice().reverse();
var boardBB = boardBW.slice().reverse();
var boardRB = boardRW.slice().reverse();
var boardQB = boardQW.slice().reverse();
var boardKB = boardKW.slice().reverse();

var i = 0;
 var j = 0;
 var value = 0;
 var bishopCounterBlack = 0;
 var bishopCounterWhite = 0;
 board.forEach(function(row) {
   row.forEach(function(piece) {
     if (piece) {
       // Subtract piece value if it is opponent's piece
       value += pieceValue[piece['type']]
                * (piece['color'] === color ? 1 : -1);
       if (color === 'w'){
         if(piece['type']==='p'){
           value += (boardPW[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='n'){
           value += (boardNW[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='b'){
           value += (boardBW[i][j])
                    *(piece['color'] === color ? 1 : -1);
                    bishopCounterWhite+= 1;
                  }

         else if(piece['type']==='r'){
           value += (boardRW[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='q'){
           value += (boardQW[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='k'){
           value += (boardKW[i][j])
                    *(piece['color'] === color ? 1 : -1);}
}
       //value += (positionValueW[piece['type']][i][j])
                //* (piece['color'] === color ? 1 : -1);}
       else{
         if(piece['type']==='p'){
           value += (boardPB[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='n'){
           value += (boardNB[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='b'){
           value += (boardBB[i][j])
                    *(piece['color'] === color ? 1 : -1);
                    bishopCounterBlack += 1;
                  }

         else if(piece['type']==='r'){
           value += (boardRB[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='q'){
           value += (boardQB[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         else if(piece['type']==='k'){
           value += (boardKB[i][j])
                    *(piece['color'] === color ? 1 : -1);}

         //value += (positionValueB[piece['type']][i][j])
                //* (piece['color'] === color ? 1 : -1);
       }
     }
     j = j+1;
   });
 j=0;
   i = i+1;
 });

 if(color === 'w'){
   if(bishopCounterWhite === 2){
     value = value + 50;
   }
   if (bishopCounterBlack === 2){
     value = value - 50;
   }
 }

 else{
   if(bishopCounterBlack === 2){
     value = value + 50;
   }
   if(bishopCounterWhite === 2){
     value = value - 50;
   }
 }

 return value;
};



/**
 * Calculates the best move looking one move ahead
 * @param {string} playerColor - Players color, either 'b' or 'w'
 * @return {string} the best move
 */
var calcBestMoveOne = function(playerColor) {
  // List all possible moves
  var possibleMoves = game.moves();
  // Sort moves randomly, so the same move isn't always picked on ties
  possibleMoves.sort(function(a, b){return 0.5 - Math.random()});

  // exit if the game is over
  if (game.game_over() === true || possibleMoves.length === 0) return;

  // Search for move with highest value
  var bestMoveSoFar = null;
  var bestMoveValue = Number.NEGATIVE_INFINITY;
  possibleMoves.forEach(function(move) {
    game.move(move);
    var moveValue = evaluateBoard(game.board(), playerColor);
    if (moveValue > bestMoveValue) {
      bestMoveSoFar = move;
      bestMoveValue = moveValue;
    }
    game.undo();
  });

  return bestMoveSoFar;
}

/**
 * Calculates the best move using Minimax without Alpha Beta Pruning.
 * @param {Number} depth - How many moves ahead to evaluate
 * @param {Object} game - The game to evaluate
 * @param {string} playerColor - Players color, either 'b' or 'w'
 * @param {Boolean} isMaximizingPlayer - If current turn is maximizing or minimizing player
 * @return {Array} The best move value, and the best move
 */
var calcBestMoveNoAB = function(depth, game, playerColor,
                                isMaximizingPlayer=true) {
  // Base case: evaluate board
  if (depth === 0) {
    value = evaluateBoard(game.board(), playerColor);
    return [value, null]
  }

  // Recursive case: search possible moves
  var bestMove = null; // best move not set yet
  var possibleMoves = game.moves();
  // Set random order for possible moves
  possibleMoves.sort(function(a, b){return 0.5 - Math.random()});
  // Set a default best move value
  var bestMoveValue = isMaximizingPlayer ? Number.NEGATIVE_INFINITY
                                         : Number.POSITIVE_INFINITY;
  // Search through all possible moves
  for (var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    // Make the move, but undo before exiting loop
    game.move(move);
    // Recursively get the value of this move
    value = calcBestMoveNoAB(depth-1, game, playerColor, !isMaximizingPlayer)[0];
    // Log the value of this move
    //console.log(isMaximizingPlayer ? 'Max: ' : 'Min: ', depth, move, value,
             //   bestMove, bestMoveValue);

    if (isMaximizingPlayer) {
      // Look for moves that maximize position
      if (value > bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
    } else {
      // Look for moves that minimize position
      if (value < bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
    }
    // Undo previous move
    game.undo();
  }
  // Log the best move at the current depth
 // console.log('Depth: ' + depth + ' | Best Move: ' + bestMove + ' | ' + bestMoveValue);
  // Return the best move, or the only move
  return [bestMoveValue, bestMove || possibleMoves[0]];
}

/**
 * Calculates the best move using Minimax with Alpha Beta Pruning.
 * @param {Number} depth - How many moves ahead to evaluate
 * @param {Object} game - The game to evaluate
 * @param {string} playerColor - Players color, either 'b' or 'w'
 * @param {Number} alpha
 * @param {Number} beta
 * @param {Boolean} isMaximizingPlayer - If current turn is maximizing or minimizing player
 * @return {Array} The best move value, and the best move
 */
var calcBestMove1 = function(depth , game, playerColor,
                            alpha=Number.NEGATIVE_INFINITY,
                            beta=Number.POSITIVE_INFINITY,
                            isMaximizingPlayer=true) {
  // Base case: evaluate board
  if (depth === 0) {
    value = evaluateBoard1(game.board(), playerColor);
    return [value, null]
  }

  // Recursive case: search possible moves
  var bestMove = null; // best move not set yet
  var possibleMoves = game.moves();
  // Set random order for possible moves
  possibleMoves.sort(function(a, b){return 0.5 - Math.random()});
  // Set a default best move value
  var bestMoveValue = isMaximizingPlayer ? Number.NEGATIVE_INFINITY
                                         : Number.POSITIVE_INFINITY;
  // Search through all possible moves
  for (var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    // Make the move, but undo before exiting loop
    game.move(move);
    // Recursively get the value from this move
    value = calcBestMove1(depth-1, game, playerColor, alpha, beta, !isMaximizingPlayer)[0];
    // Log the value of this move
   // console.log(isMaximizingPlayer ? 'Max: ' : 'Min: ', depth, move, value,
  //              bestMove, bestMoveValue);

    if (isMaximizingPlayer) {
      // Look for moves that maximize position
      if (value > bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      alpha = Math.max(alpha, value);
    } else {
      // Look for moves that minimize position
      if (value < bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      beta = Math.min(beta, value);
    }
    // Undo previous move
    game.undo();
    // Check for alpha beta pruning
    if (beta <= alpha) {
   //   console.log('Prune', alpha, beta);
      break;
    }
  }
  // Log the best move at the current depth
 // console.log('Depth: ' + depth + ' | Best Move: ' + bestMove + ' | ' + bestMoveValue + ' | A: ' + alpha + ' | B: ' + beta);
  // Return the best move, or the only move
  return [bestMoveValue, bestMove || possibleMoves[0]];
}


var calcBestMove2 = function(depth, game, playerColor,
                            alpha=Number.NEGATIVE_INFINITY,
                            beta=Number.POSITIVE_INFINITY,
                            isMaximizingPlayer=true) {
  // Base case: evaluate board
  if (depth === 0) {
    value = evaluateBoard2(game.board(), playerColor);
    return [value, null]
  }

  // Recursive case: search possible moves
  var bestMove = null; // best move not set yet
  var possibleMoves = game.moves();
  // Set random order for possible moves
  possibleMoves.sort(function(a, b){return 0.5 - Math.random()});
  // Set a default best move value
  var bestMoveValue = isMaximizingPlayer ? Number.NEGATIVE_INFINITY
                                         : Number.POSITIVE_INFINITY;
  // Search through all possible moves
  for (var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    // Make the move, but undo before exiting loop
    game.move(move);
    // Recursively get the value from this move
    value = calcBestMove2(depth-1, game, playerColor, alpha, beta, !isMaximizingPlayer)[0];
    // Log the value of this move
   // console.log(isMaximizingPlayer ? 'Max: ' : 'Min: ', depth, move, value,
     //           bestMove, bestMoveValue);

    if (isMaximizingPlayer) {
      // Look for moves that maximize position
      if (value > bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      alpha = Math.max(alpha, value);
    } else {
      // Look for moves that minimize position
      if (value < bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      beta = Math.min(beta, value);
    }
    // Undo previous move
    game.undo();
    // Check for alpha beta pruning
    if (beta <= alpha) {
   //   console.log('Prune', alpha, beta);
      break;
    }
  }
  // Log the best move at the current depth
 // console.log('Depth: ' + depth + ' | Best Move: ' + bestMove + ' | ' + bestMoveValue + ' | A: ' + alpha + ' | B: ' + beta);
  // Return the best move, or the only move
  return [bestMoveValue, bestMove || possibleMoves[0]];
}


var calcBestMove3 = function(depth, game, playerColor,
                            alpha=Number.NEGATIVE_INFINITY,
                            beta=Number.POSITIVE_INFINITY,
                            isMaximizingPlayer=true) {
  // Base case: evaluate board
  if (depth === 0) {
    value = evaluateBoard3(game.board(), playerColor);
    return [value, null]
  }

  // Recursive case: search possible moves
  var bestMove = null; // best move not set yet
  var possibleMoves = game.moves();
  // Set random order for possible moves
  possibleMoves.sort(function(a, b){return 0.5 - Math.random()});
  // Set a default best move value
  var bestMoveValue = isMaximizingPlayer ? Number.NEGATIVE_INFINITY
                                         : Number.POSITIVE_INFINITY;
  // Search through all possible moves
  for (var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    // Make the move, but undo before exiting loop
    game.move(move);
    // Recursively get the value from this move
    value = calcBestMove3(depth-1, game, playerColor, alpha, beta, !isMaximizingPlayer)[0];
    // Log the value of this move
  //  console.log(isMaximizingPlayer ? 'Max: ' : 'Min: ', depth, move, value,
   //             bestMove, bestMoveValue);

    if (isMaximizingPlayer) {
      // Look for moves that maximize position
      if (value > bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      alpha = Math.max(alpha, value);
    } else {
      // Look for moves that minimize position
      if (value < bestMoveValue) {
        bestMoveValue = value;
        bestMove = move;
      }
      beta = Math.min(beta, value);
    }
    // Undo previous move
    game.undo();
    // Check for alpha beta pruning
    if (beta <= alpha) {
   //   console.log('Prune', alpha, beta);
      break;
    }
  }
  // Log the best move at the current depth
 // console.log('Depth: ' + depth + ' | Best Move: ' + bestMove + ' | ' + bestMoveValue + ' | A: ' + alpha + ' | B: ' + beta);
  // Return the best move, or the only move
  return [bestMoveValue, bestMove || possibleMoves[0]];
}
