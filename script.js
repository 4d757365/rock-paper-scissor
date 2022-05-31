//Get players selection 
let choice = prompt('Enter choice: ', 'ROCK');
//Change case to upper case to accept any variation entered
let playerSelection = choice.toUpperCase();
//Get computer selection
let computerSelection = computerPlay();

//One round of the game
function playRound(playerSelection, computerSelection)
{
    //Rock
    if(computerSelection == 'Rock' && playerSelection == 'PAPER')
    {
        return 1;
    }
    else if(computerSelection == 'Rock' && playerSelection == 'SCISSOR')
    {
        return -1;
    }
    else if(computerSelection == 'Paper' && playerSelection == 'ROCK')
    {
        return -1;
    }
    else if(computerSelection == 'Scissor' && playerSelection == 'ROCK')
    {
        return 1;
    }
    else if(computerSelection == 'Paper' && playerSelection == 'SCISSOR')
    {
        return 1;
    }
    else if(computerSelection == 'Scissor' && playerSelection == 'PAPER')
    {
        return -1;
    }
    else if((computerSelection == 'Paper' && playerSelection == 'PAPER' )|| (computerSelection == 'Scissor' && playerSelection == 'Scissor') || (computerSelection == 'Rock' && playerSelection == 'ROCK'))
    {
        return 0;
    }

}

//Computer selection randomly generated
function computerPlay()
{
    let choice = ['Rock', 'Paper', 'Scissor'];
    const rand = choice[Math.floor(Math.random() * choice.length)];
    return rand;
}

//Five round of the game
function game()
{
    let p = 0;
    let c = 0;
    let t = 0;
    
    
    for(let i = 0; i < 5; i++)
    {
        choice = prompt('Enter choice: ', 'ROCK');
        playerSelection = choice.toUpperCase();
        computerSelection = computerPlay();

        
        if(playRound(playerSelection, computerSelection) == 1)
        {
            console.log("Player Won");
            p++;
        }
        else if(playRound(playerSelection, computerSelection) == -1)
        {
            console.log("Computer Won");
            c++;
        }
        else
        {
            console.log("Tie!");
            t++;
        }
    }

    if(p > c && t < p)
    {
        console.log("Player is the winner!");
    }
    else if(c > p && t < c)
    {
        console.log("Computer is the winner!");
    }
    else
    {
        console.log("Tie! Try Again!");
    }

}


console.log(game());
