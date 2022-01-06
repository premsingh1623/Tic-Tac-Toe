const selectBox = document.querySelector(".select-Box"),
    selectXBtn = selectBox.querySelector(".playerX"),
    selectOBtn = selectBox.querySelector(".playerO"),
    playBoard = document.querySelector(".playboard"),
    slider = document.querySelector(".slider"),
    xTurn = document.querySelector(".xTurn"),
    oTurn = document.querySelector(".oTurn"),
    result = document.querySelector(".result"),
    replayBtn = result.querySelector("button");
let turn = ""


window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        turn = "X"
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        slider.style.left = "50%";
        xTurn.style.color = "#f961b8";
        oTurn.style.color = "#fff";
        turn = "O"
    }
}
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            element.style.pointerEvents = "none";
            checkDraw();
            checkWin();
            
        }
        
        sliders();
    })
})

function sliders() {
    if (slider.style.left == "50%") {
        slider.style.left = "0";
        oTurn.style.color = "#f961b8";
        xTurn.style.color = "#fff";

    } else {
        slider.style.left = "50%";
        xTurn.style.color = "#f961b8";
        oTurn.style.color = "#fff";
    }
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            setTimeout(() => {
                playBoard.classList.remove("show");
                result.classList.add("show");
            }, 500);
            console.log(boxtext[e[0]].innerHTML);
            document.getElementById("wonText").innerHTML = `Player <strong>${boxtext[e[0]].innerHTML}</strong> won the game!`;
        }
    })
}

const checkDraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerHTML !== "") && (boxtext[e[1]].innerHTML !== "") && (boxtext[e[2]].innerHTML !== "") && (boxtext[e[3]].innerHTML !== "") && (boxtext[e[4]].innerHTML !== "") && (boxtext[e[5]].innerHTML !== "") && (boxtext[e[6]].innerHTML !== "") && (boxtext[e[7]].innerHTML !== "") &&(boxtext[e[8]].innerHTML !== "")) {
            console.log("hello");
            setTimeout(() => {
                playBoard.classList.remove("show");
                result.classList.add("show");
            }, 500);
            document.getElementById("wonText").innerHTML = `Match Drawn`;
        }
    })
}
replayBtn.onclick = ()=>{
    window.location.reload();
}