var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var gameBoardDisplayIDs = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];


function makePlay(divID, n) {

    // let clickSquare = document.getElementById(divID);

    // clickSquare.style.backgroundImage = "url(./images/X.jpg)";

    // gameBoard[n] = "X";

    if (!isSpotEmpty(n)) {
        return;
    }

    else {

        document.getElementById(divID).style.backgroundImage = "url(./images/X.jpg)";

        gameBoard[n] = "X";

    }

    if (isWinnerOrCat("You win...!!!")) {
        return;
    }


    cpuPlay();

    if (isWinnerOrCat("You Loose...!!!")) {
        return;
    }



}

function cpuPlay() {
    do {
        var randomNumber = Math.round(Math.random() * 7 + 1, 0);
    } while (isNaN(gameBoard[randomNumber]))

    gameBoard[randomNumber] = "O";

    document.getElementById(gameBoardDisplayIDs[randomNumber]).style.backgroundImage = "url(./images/O.jpg)";
}

function isWinner() {
    if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] || gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] || gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8])
        return true;

    else if (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] || gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] || gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8])
        return true;

    else if (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] || gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6])
        return true;

    else
        return false;
}


function isBoardFull() {

    for (var i = 0; i < gameBoard.length; i++) {

        if (isSpotEmpty(i)) {
            return false;
        }

    }

    return true;
}

function isSpotEmpty(position) {
    if (gameBoard[position] != "X" && gameBoard[position] != "O")
        return true;

    //return false;
}

function isWinnerOrCat(messagePassed) {
    if (isWinner()) {
        document.getElementById("divDeclareWinner").innerHTML = messagePassed;
        document.getElementById("btnPlayAgain").style.display = "block";
        return true;
    }

    else if (isBoardFull()) {
        document.getElementById("divDeclareWinner").innerHTML = "&#128049; cat game &#128049;";
        document.getElementById("btnPlayAgain").style.display = "block";
        return true;
    }
}

function newGame() {

    gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    for (var i = 0; i < gameBoard.length; i++) {
        document.getElementById(gameBoardDisplayIDs[i]).style.backgroundImage = "url(./images/blank.jpg)";
    }

    document.getElementById("divDeclareWinner").innerHTML = "";
    document.getElementById("btnPlayAgain").style.display = "none";

}
