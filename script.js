const boxes = document.querySelectorAll('#boxes');
const reset = document.querySelector('#reset');
const newGame = document.querySelector('.new');
const msg = document.querySelector('.msg');
const unhide = document.querySelector('.hide');
let win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let turnO = true;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const showWinner = (winner)=>{
    msg.innerText = `The Winner is ${winner}`;
    unhide.classList.remove('hide');
}
const checkWinner = ()=>{
    for(let pattern of win){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        if(pos1Val !="", pos2Val !="", pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

const empty = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const resetGame = ()=>{
    turnO = true; 
    empty();
    unhide.classList.add('hide');
}

reset.addEventListener("click", resetGame, ()=>{
});
newGame.addEventListener("click", resetGame);