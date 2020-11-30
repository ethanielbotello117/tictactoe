"use script"

// player answer placers 

let i = 0;

function select1() {
    if (i % 2 == 0) {
        if (document.getElementById('box1').innerHTML == 'X' || 'O') {
            console.log("these aren't the droids we're looking for")
        } else {
            document.getElementById('box1').innerHTML = 'O';
            document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
            i++
        }
    } else {
        if (document.getElementById('box1').innerHTML == 'X' || 'O') {
            
        } else {
            document.getElementById('box1').innerHTML = 'X';
            document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
            i++
        }
    }
    console.log(i)
}
function select2() {
    if (i % 2 == 0) {
        document.getElementById('box2').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box2').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select3() {
    if (i % 2 == 0) {
        document.getElementById('box3').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box3').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select4() {
    if (i % 2 == 0) {
        document.getElementById('box4').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box4').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select5() {
    if (i % 2 == 0) {
        document.getElementById('box5').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box5').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select6() {
    if (i % 2 == 0) {
        document.getElementById('box6').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box6').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select7() {
    if (i % 2 == 0) {
        document.getElementById('box7').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box7').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select8() {
    if (i % 2 == 0) {
        document.getElementById('box8').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box8').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}
function select9() {
    if (i % 2 == 0) {
        document.getElementById('box9').innerHTML = 'O';
        document.getElementById('turnDisplayer').innerHTML = "It's player 2's turn!"
    }else{
        document.getElementById('box9').innerHTML = 'X';
        document.getElementById('turnDisplayer').innerHTML = "It's player 1's turn!"
    }
    i++;
    console.log(i)
}

// reset button

function reset(){

}