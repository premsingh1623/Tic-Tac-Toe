const selectBox = document.querySelector(".select-Box"),
    selectXBtn = selectBox.querySelector(".playerX"),
    selectOBtn = selectBox.querySelector(".playerO"),
    playBoard = document.querySelector(".playboard"),
    slider = document.querySelector(".slider"),
    xTurn = document.querySelector(".xTurn"),
    oTurn = document.querySelector(".oTurn");
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