"use script"

// player answer placers 

// let i = 0;

// function select1() {
    // if (i % 2 == 0) {
    //     if (document.getElementById('box1').innerHTML == 'X' || 'O') {
    //         console.log("these aren't the droids we're looking for")
    //     } else {
    //         document.getElementById('box1').innerHTML = 'O';
    //         document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    //         i++
    //     }
    // } else {
    //     if (document.getElementById('box1').innerHTML == 'X' || 'O') {
            
    //     } else {
    //         document.getElementById('box1').innerHTML = 'X';
    //         document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    //         i++
    //     }
    // }
    // console.log(i)

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
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box1').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b1s == "taken") {
        console.log("item already placed");
    }
    //(box1status)
    b1s = "taken";
    console.log(b1s)
}
function select2() {
    if (b2s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box2').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box2').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b2s == "taken") {
        console.log("item already placed");
    }
    //(box1status)
    b2s = "taken";
    console.log(b2s)
}
function select3() {
    if (b3s == "empty") {
        if (i % 2 == 0) {
            document.getElementById('box3').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
        } else {
            document.getElementById('box3').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
        }
        i++;
        console.log(i)
    } else if (b3s == "taken") {
        console.log("item already placed");
    }
    //(box1status)
    b3s = "taken";
    console.log(b3s)
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
    //(box1status)
    b4s = "taken";
    console.log(b4s)
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
    //(box1status)
    b5s = "taken";
    console.log(b5s)
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
    //(box1status)
    b6s = "taken";
    console.log(b6s)
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
    //(box1status)
    b7s = "taken";
    console.log(b7s)
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
    //(box1status)
    b8s = "taken";
    console.log(b8s)
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

    if(i == 10){
        document.getElementById('turnDisplayer').innerHTML = "winnner declared dumbass press the reset button"
    }
    i = 1;
}




// reset button

function reset() {
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
            console.log("All cells reset")
        console.log(b3s)
}

// winner declarer

document.getElementById('box3').onclick

console.log(b3s)

