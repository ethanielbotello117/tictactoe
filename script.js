"use script"

let i = 1;
let X = "X";
let O = "O";

let b1s = "empty"
let b2s = "empty"
let b3s = "empty"
let b4s = "empty"
let b5s = "empty"
let b6s = "empty"
let b7s = "empty"
let b8s = "empty"
let b9s = "empty"

function select1() {
    if (b1s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box1').innerHTML = 'O';
            b1s = "takenByO"
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box1').innerHTML = 'X';
            b1s = "takenByX"
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b1s == "taken") {
        console.log("item already placed");
    }
    winner()
    noWinner()
}
function select2() {
    if (b2s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box2').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b2s = "takenByO"
        } else {
            document.getElementById('box2').innerHTML = 'X';
            b2s = "takenByX"
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b2s == "taken") {
        console.log("item already placed");
    }
    winner()
    noWinner()
}
function select3() {
    if (b3s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box3').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b3s = "takenByO"
        } else {
            document.getElementById('box3').innerHTML = 'X';
            b3s = "takenByX"
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b3s == "taken") {
        console.log("item already placed");
    }
    winner()
    noWinner()
}
function select4() {
    if (b4s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box4').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b4s = "takenByO"
        } else {
            document.getElementById('box4').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b4s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b4s == "taken") {
        console.log("item already placed");
    }
    console.log(b4s)
    winner()
    noWinner()
}
function select5() {
    if (b5s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box5').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b5s = "takenByO"
        } else {
            document.getElementById('box5').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b5s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b5s == "taken") {
        console.log("item already placed");
    }
    console.log(b5s)
    winner()
    noWinner()
}
function select6() {
    if (b6s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box6').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b6s = "takenByO"
        } else {
            document.getElementById('box6').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b6s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b6s == "taken") {
        console.log("item already placed");
    }
    console.log(b6s)
    winner()
    noWinner()
}
function select7() {
    if (b7s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box7').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b7s = "takenByO"
        } else {
            document.getElementById('box7').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b7s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b7s == "taken") {
        console.log("item already placed");
    }
    console.log(b7s)
    winner()
    noWinner()
}
function select8() {
    if (b8s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box8').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b8s = "takenByO"
        } else {
            document.getElementById('box8').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b8s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b8s == "taken") {
        console.log("item already placed");
    }
    console.log(b8s)
    winner()
    noWinner()
}
function select9() {
    if (b9s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box9').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            b9s = "takenByO"
        } else {
            document.getElementById('box9').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            b9s = "takenByX"
        }
        i++;
        console.log(i)
    } else if (b9s == "taken") {
        console.log("item already placed");
    }
    console.log(b9s)
    winner()
    noWinner()
}



// reset button

function reset() {

    console.log(b1s)
    for (let bob = 1; bob <= 9; bob++) {
        document.getElementById(`box${bob}`).innerHTML = " ";
        b1s = "empty";
        b2s = "empty";
        b3s = "empty";
        b4s = "empty";
        b5s = "empty";
        b6s = "empty";
        b7s = "empty";
        b8s = "empty";
        b9s = "empty";
    }
    i = 1;
    document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn"
    console.log("All cells reset")
    winnerCheck = 'none'
    // p1s = 0;
    // p2s = 0;
}



// winner declarer

let p1s = 0;
let p2s = 0;
let winnerCheck = 'none'

function winner() {

    //Horizontal


    if (b1s == "takenByX" && b2s == "takenByX" && b3s == "takenByX") {
        document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
        winnerCheck = 'won'
        p1s++
    } else if (b1s == "takenByO" && b2s == "takenByO" && b3s == "takenByO") {
        document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
        winnerCheck = 'won'
        p2s++
    } else
        if (b4s == "takenByX" && b5s == "takenByX" && b6s == "takenByX") {
            document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
            winnerCheck = 'won'
            p1s++
        } else if (b4s == "takenByO" && b5s == "takenByO" && b6s == "takenByO") {
            document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
            winnerCheck = 'won'
            p2s++
        }
        else if (b7s == "takenByX" && b8s == "takenByX" && b9s == "takenByX") {
            document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
            winnerCheck = 'won'
            p1s++
        } else if (b7s == "takenByO" && b8s == "takenByO" && b9s == "takenByO") {
            document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
            winnerCheck = 'won'
            p2s++
        } else

            //Vertical

            if (b1s == "takenByX" && b4s == "takenByX" && b7s == "takenByX") {
                document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
                winnerCheck = 'won'
                p1s++
            } else if (b1s == "takenByO" && b4s == "takenByO" && b7s == "takenByO") {
                document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
                winnerCheck = 'won'
                p2s++
            } else if (b2s == "takenByX" && b5s == "takenByX" && b8s == "takenByX") {
                document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
                winnerCheck = 'won'
                p1s++
            } else if (b2s == "takenByO" && b5s == "takenByO" && b8s == "takenByO") {
                document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
                winnerCheck = 'won'
                p2s++
            } else if (b3s == "takenByX" && b6s == "takenByX" && b9s == "takenByX") {
                document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
                winnerCheck = 'won'
                p1s++
            } else if (b3s == "takenByO" && b6s == "takenByO" && b9s == "takenByO") {
                document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
                winnerCheck = 'won'
                p2s++
            } else

                //Diagnal... or is it "nol"? idk how to type :)

                if (b1s == "takenByX" && b5s == "takenByX" && b9s == "takenByX") {
                    document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
                    winnerCheck = 'won'
                    p1s++
                } else if (b1s == "takenByO" && b5s == "takenByO" && b9s == "takenByO") {
                    document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
                    winnerCheck = 'won'
                    p2s++
                } else if (b3s == "takenByX" && b5s == "takenByX" && b7s == "takenByX") {
                    document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
                    winnerCheck = 'won'
                    p1s++
                } else if (b3s == "takenByO" && b5s == "takenByO" && b7s == "takenByO") {
                    document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
                    winnerCheck = 'won'
                    p2s++
                }

    playerscores();
    playerStop();

}

function noWinner() {
    if (winnerCheck == 'none' && i == 10) {
        document.getElementById('turnDisplayer').innerHTML = "Its a draw :(";
    }
    console.log(winnerCheck);
}

function playerscores() {
    if (i % 2 == 0 && winnerCheck == 'won') {
        document.getElementById("player1").textContent = `Player X: ${p1s} wins`
    } else if (i % 2 > 0 && winnerCheck == 'won') {
        document.getElementById("player2").textContent = `Player O: ${p2s} wins`
    }
}

function playerStop() {
    if (winnerCheck == 'won') {
        b1s = "taken"
        b2s = "taken"
        b3s = "taken"
        b4s = "taken"
        b5s = "taken"
        b6s = "taken"
        b7s = "taken"
        b8s = "taken"
        b9s = "taken"
    }
} A