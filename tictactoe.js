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
const clrBoard=()=>{
    gameChoices=[];

}


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
let numberOfMoves='';
let returnHolder='';

const makeAmove=()=>{
    const gameBlocks=document.querySelectorAll('.gameBlock');
    let currentMove='';
    gameBlocks.forEach(block=>block.addEventListener('click',()=>{
        returnHolder=gameBoard.inputPlayerchoice(playerIcon,block['id']);
        currentMove=`${block['id']}`;    
        if(returnHolder==1)
        {
            numberOfMoves++;
            moves.push(currentMove);
            returnHolder=0;
        }
    
    }));
   return checkForaWin(moves);
    
}

const checkForaWin=(myMovesSoFar)=>
{
    const winningCombintations=[['0','1','2'],
    ['0','3','6'],
    ['0','4','8'],
    ['3','4','5'],
    ['6','7','8'],
    ['1','4','7'],
    ['2','5','8'],
    ['2','4','6']];
    if((myMovesSoFar.length)>=3)
    {
        for(let i=0;i<9;i++)
        {
            const multipleExist = winningCombintations[i].every(combi => {
                    return myMovesSoFar.includes(combi);
                });
                if (multipleExist) return 'win';
        }

    } 
            return 'not yet';
    }




return{
    playerName,
    makeAmove,
    

};

}

const player1=player('player1','X');
const player2=player('player2','O');


player1.makeAmove();




