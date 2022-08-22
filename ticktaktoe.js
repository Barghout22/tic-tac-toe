//create a module that is an array that saves player choices and displays them 
const gameContainer=document.querySelector('.gameContainer');
let gameBlocks='';
let checkWinStatus=undefined;



const gameBoard=(()=>{

  
  let gameChoices=[];
  
  const inputPlayerchoice=(player,position)=>
  {
      if(!(gameChoices[position]))
      {
          gameChoices[position]=player;
          document.getElementById(`${position}`).textContent=player;
          
          return true;
      }
      
      else 
      {
          return false;
  
      }
  };
  
  const displayBoard=()=>{ 
  
      for(let i=0;i<9;i++)
          {
          const gameBlock=document.createElement('div');
          gameBlock.classList.add('gameBlock');
          gameBlock.setAttribute("id",`${i}`);
          gameBlock.textContent=gameChoices[i];
          gameContainer.appendChild(gameBlock);
          }
  }
      //add a method to display my gameboard on the DOM
  const clrBoard=()=>{
      while(gameContainer.firstChild)
      {
          gameContainer.removeChild(gameContainer.lastChild);
      }
  
  }
  
  const newGame=()=>
  {
      clrBoard();
      gameChoices=[];
      player1.moves=[];
      player2.moves=[];
      player1.turnStatus=true;
      player2.turnStatus=false;
      checkWinStatus=undefined;
      document.getElementById('Winner-decleration').textContent=' ';
  
  
  }
  
  
  return{
  inputPlayerchoice,
  displayBoard,
  clrBoard,
  newGame,
  };
  })();
  
  
  const player=(name,icon,turnStatus)=>{
    const playerName=name;
    let playerIcon=icon;
    let moves=[];

    return{
        playerName,moves,playerIcon,turnStatus
    };
}

const player1=player('Player 1','X',true);
  const player2=player('Player 2','O',false);

  const playGame=(()=>{
    const startNewGame=(firstPlayer,secondPlayer)=>{
            gameBoard.displayBoard();     
            let turnCounter=0;
            let firstPlayerWins=undefined;
            let secondPlayerWins=undefined;
            gameBlocks=document.querySelectorAll('.gameBlock');
            gameBlocks.forEach(block=>block.addEventListener('click',()=>processPressedBlock(block['id'])));
            
            
        const processPressedBlock=(value)=>
            {
                let currentMove='';

                let returnHolder=false;
                if(!checkWinStatus)
                {
                    if(firstPlayer.turnStatus)
                    {
                      returnHolder=gameBoard.inputPlayerchoice(firstPlayer.playerIcon,value);
                      currentMove=`${value}`;
                     
                      if(returnHolder)
                         {
                
                           firstPlayer.moves.push(currentMove);
                           returnHolder=undefined;
                           currentMove='';
                           firstPlayer.turnStatus=false;
                           secondPlayer.turnStatus=true;
                           checkWinStatus=checkForaWin(firstPlayer.moves);
                           firstPlayerWins=checkWinStatus;
                           if(firstPlayerWins)
                             {
                                 displayWinner(firstPlayer.playerName);
                             }
                         
                         }
                          }
                          else if(secondPlayer.turnStatus)
                          {
                             returnHolder=gameBoard.inputPlayerchoice(secondPlayer.playerIcon,value);
                         currentMove=`${value}`;
         
                         if(returnHolder)
                         {
                         
                             secondPlayer.moves.push(currentMove);
                             returnHolder=undefined;
                             currentMove='';
                             firstPlayer.turnStatus=true;
                             secondPlayer.turnStatus=false;
                             checkWinStatus=checkForaWin(secondPlayer.moves);
                             secondPlayerWins=checkWinStatus;
                             if(secondPlayerWins)
                               {
                                   displayWinner(secondPlayer.playerName);
               
               
                               }
                         }
         
          
                          }
                     

            


            }
            else
            {
               
                return;
            }
              
           
                



            }

         
        }


    const checkForaWin=(myMovesSoFar)=>
        {   
            let checkWinStatus=false;
            function multipleExist(arr,values) {
                return values.every(value=> arr.includes(value));
              }
            const winningCombintations=[['0','1','2'],
            ['0','3','6'],
            ['0','4','8'],
            ['3','4','5'],
            ['6','7','8'],
            ['1','4','7'],
            ['2','5','8'],
            ['2','4','6']];
          
                for(let i=0;i<8;i++)
                {
                 checkWinStatus=false||( multipleExist(myMovesSoFar,winningCombintations[i]));   
                 if(checkWinStatus)
                 {
                    return checkWinStatus;
                 }     
                }
                return checkWinStatus;
        }

        
const displayWinner=(result)=>
{
    if(result==='tie')
    {
        document.getElementById('Winner-decleration').textContent='the game is a tie!';
       
    }
    else
    {
        document.getElementById('Winner-decleration').textContent=`${result} is the winner!`;

    }
    

}

return{
startNewGame,
}


})();

playGame.startNewGame(player1,player2);

const newGameBttn=document.querySelector('.startNewGame');
newGameBttn.addEventListener('click',()=>
{
    gameBoard.newGame();
    playGame.startNewGame(player1,player2);
});