const cells=document.querySelectorAll(".cell");
const statustext=document.querySelector("#status");
const restart=document.querySelector("#restart");
const winconditions=
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
let options=["","","","","","","","",""];
let currentplayer="x";
let running=false;
initialize();
function initialize(){
    running=true;
 cells.forEach(cell=>cell.addEventListener("click",clicked));
 restart.addEventListener("click",restartgame);
 statustext.textContent=`${currentplayer}'s turn`;
}
function clicked(){
 const cellindex=this.getAttribute("cellindex");
 if(options[cellindex]!=""||!running){
    return;
 }
updatecell(this,cellindex);
checkwinner();

}
function updatecell(cell,cellindex){
options[cellindex]=currentplayer;
cell.textContent=currentplayer;
}
function changeplayer(){
currentplayer=(currentplayer=="x")?"0":"x";
statustext.textContent=`${currentplayer}'s turn`;

}

function checkwinner(){
    let roundown=false;
    for(let i=0;i<winconditions.length;i++){
        const condition=winconditions[i];
        const cella=options[condition[0]];
        const cellb=options[condition[1]];
        const cellc=options[condition[2]];
        if(cella==""||cellb==""||cellc==""){
            continue;
        }
        if(cella==cellb&&cellb==cellc){
           roundown=true;
           break;
        }
    }
    if(roundown){
        statustext.textContent=`${currentplayer} wins!`;
        running=false;
    }
    else if(!options.includes("")){
        statustext.textContent="DRAW!";
        running=false;   
    }
    else{
        changeplayer();
    }
}
function restartgame(){
    options=["","","","","","","","",""];
    currentplayer="x";
    cells.forEach(cell=>cell.textContent="");
    running=true;
    statustext.textContent="start again!";
}
window.addEventListener(onload,()=>window.alert("hey"));