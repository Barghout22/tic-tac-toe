//create a module that is an array that saves player choices and displays them 
const gameContainer=document.querySelector('.gameContainer');


const gameBoard=(()=>{
const gameChoices=[];

for(let i=0;i<9;i++)
{
const gameBlock=document.createElement('div');
gameBlock.classList.add('gameBlock');
gameBlock.setAttribute("id",`${i}`);
gameBlock.textContent=gameChoices[i];
gameContainer.appendChild(gameBlock);
}

const inputPlayerchoice=(player,position)=>
{
    if(!gameChoices[position])
    {
        gameChoices[position]=player;
        document.getElementById(`${position}`).textContent=player;
        return 1;
    }
    else return 0;


};


const dipslayBoard=()=>{ 
    console.log(gameChoices);
}
    //add a method to display my gameboard on the DOM
const clrBoard=()=>gameChoices=[];


return{
inputPlayerchoice,
dipslayBoard,
clrBoard,
};


})();

const player=(name,icon)=>{
const playerName=name;
const playerIcon=icon;
let moves=[];
let numberOfMoves=0;
let returnHolder=0;

const makeAmove=(position)=>{
    const gameBlocks=document.querySelectorAll('.gameBlock');
    gameBlocks.forEach(block=>block.addEventListener('click',()=>returnHolder=gameBoard.inputPlayerchoice(playerIcon,block['id'])));
      
     if(returnHolder==1)
    {
        numberOfMoves++;
        moves.push(position);
        returnHolder=0;
    }
}
return{
    playerName,
    makeAmove,

};

}

const player1=player('player1','X');
const player2=player('player2','O');


player1.makeAmove(1);
player2.makeAmove(2);
player2.makeAmove(1);
player1.makeAmove(6);



