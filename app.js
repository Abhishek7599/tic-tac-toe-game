let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")
let container = document.querySelectorAll(".container")

let turno = true;
let count = 0;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText = "O"
            turno=false;
        }else{
            box.innerText = "X"
            turno=true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();

        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});
const showwinner=(winner)=>{
    msg.innerText = `Congratulations! the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1!=""&& position2!=""&& position3!=""){
            if(position1===position2 && position2===position3){
                showwinner(position1);
                return true;
            }
        }
    }
};
const gamedraw=()=>{
    msg.innerText= `game is Dwar`;
    msgcontainer.classList.remove("hide") 
    disablebtns();
}
const disablebtns=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const resetbuttons = () =>{
    turno =true;
    count = 0;
    enablebtns();
    msgcontainer.classList.add("hide");
    
   
}
const enablebtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
resetbtn.addEventListener("click",resetbuttons);
newGameBtn.addEventListener("click",resetbuttons);
