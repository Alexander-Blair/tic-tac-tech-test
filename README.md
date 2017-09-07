# Tic-Tac-Tech-Test

The business logic for a game of Tic Tac Toe, written in Javascript.

### Cloning the repo

```sh
$ git clone git@github.com:Alexander-Blair/tic-tac-tech-test.git  
$ cd tic-tac-tech-test
```

### Running the tests

```sh
$ open jasmine/SpecRunner.html
```

### How a game would be set up
```javascript
var players = { 0: new Player('X', new ScoreTracker()),
                1: new Player('O', new ScoreTracker()) };
var board = new Board(Line, Field, 3);
var game = new Game(board, players, new TurnCounter());
// You could run these commands from Chrome developer tools console after opening the SpecRunner file.
// You can then enter a board position with the following:
game.play(1,1);
```

### Specification

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

### Approach

The game object orchestrates the playing of the game. Its direct responsibility is checking when the game is finished, but it also delegates work to the board, players and turn counter.

The turn counter simply keeps track of the turn, and is incremented after a successful field placement on the board.

Each player has a symbol (traditionally 'X' or 'O'), and a score tracker. The score tracker keeps track of the number of taken fields in a given row, column, or diagonal, and can then check these against the winning score.

The board holds a number of line objects in an array, based on its size, and each line similarly holds the same number of field objects in an array. Each field can then monitor whether it has been taken and return true or false.
