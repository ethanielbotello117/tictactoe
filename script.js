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
        } else {
            document.getElementById('box4').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b4s == "taken") {
        console.log("item already placed");
    }
    b4s = "taken";
    console.log(b4s)
    winner()
    noWinner()
}
function select5() {
    if (b5s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box5').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box5').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b5s == "taken") {
        console.log("item already placed");
    }
    b5s = "taken";
    console.log(b5s)
    winner()
    noWinner()
}
function select6() {
    if (b6s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box6').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box6').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b6s == "taken") {
        console.log("item already placed");
    }
    b6s = "taken";
    console.log(b6s)
    winner()
    noWinner()
}
function select7() {
    if (b7s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box7').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box7').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b7s == "taken") {
        console.log("item already placed");
    }
    b7s = "taken";
    console.log(b7s)
    winner()
    noWinner()
}
function select8() {
    if (b8s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box8').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box8').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b8s == "taken") {
        console.log("item already placed");
    }
    b8s = "taken";
    console.log(b8s)
    winner()
    noWinner()
}
function select9() {
    if (b9s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box9').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box9').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b9s == "taken") {
        console.log("item already placed");
    }
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
}



// winner declarer

let winnerCheck = 'none'

function winner(){
    if(b1s == "takenByX" && b2s == "takenByX" && b3s == "takenByX"){
    document.getElementById('turnDisplayer').textContent = "Player 1 Wins!!!"
    winnerCheck = 'won'
    }else if(b1s == "takenByO" && b2s == "takenByO" && b3s == "takenByO"){
    document.getElementById('turnDisplayer').textContent = "Player 2 Wins!!!"
    winnerCheck = 'won'
    }
}

function noWinner(){
    if(winnerCheck == 'none' && i == 10){
        document.getElementById('turnDisplayer').innerHTML = "Its a draw :(";
    }
}
