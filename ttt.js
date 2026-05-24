let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () =>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO){
            btn.innerText = "O";
            turnO=false;
        }else{
            btn.innerText = "X";
            turnO=true;
        }
        btn.disabled = true;

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner = (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for(let pattern of winpattern){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if(post1 !="" && post2 !="" && post3 !=""){
            if(post1==post2 && post2==post3){
                showwinner(post1);
            }
        }
    }
};

newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);