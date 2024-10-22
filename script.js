
let boxes = document.querySelectorAll(".box");
let turnX = true;
let winnerDiv = document.querySelector(".winner");
let container = document.querySelector(".container");
let newGameBtn = document.querySelector(".newGame");
let count = 0;

let winArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText = "0";
            box.classList.remove("xColor");
            box.classList.add("oColor");
            turnX = false;
        }
        else{
            box.innerText = "X";
            box.classList.remove("oColor");
            box.classList.add("xColor");
            turnX = true;
        }
        count++;
        box.disabled = true;
        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gameOver();
        }
    })
});

const checkWinner = ()=>{
    for(let win of winArr){
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}

const showWinner = (player)=>{
    container.classList.add("hide");
    winnerDiv.classList.remove("hide");
    winnerDiv.innerText = "Winner is " + player + " ! ";
}

const gameOver = ()=>{
    container.classList.add("hide");
    winnerDiv.classList.remove("hide");
    winnerDiv.innerText = " Game Over !";
}

const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const newGame = ()=>{
    count = 0;
    winnerDiv.classList.add("hide");
    container.classList.remove("hide");
    turnX = true;
    enableBox();
}

newGameBtn.addEventListener("click", newGame);
