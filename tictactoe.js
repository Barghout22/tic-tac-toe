//create a module that is an array that saves player choices and displays them 
const gameBoard=(()=>{
const gameChoices=[];

const inputPlayerchoice=(player,position)=>
{
    if(!gameChoices[position-1])
    {
        gameChoices[position-1]=player;
    }

};
const dipslayBoard=()=> console.log(gameChoices);
    //add a method to display my gameboard on the DOM



return{
inputPlayerchoice,
dipslayBoard,
};


})();

