//Get players selection 
const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')


const SELECTIONS = [
    {
        name: 'Rock', emoji: '✊', beats: 'Scissor'
    },
    {
        name: 'Paper', emoji: '✋', beats: 'Rock'
    },
    {
        name: 'Scissor', emoji: '✌️', beats: 'Paper'
    }
];


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const playerSelection = selectionButton.dataset.selection;
      const selection = SELECTIONS.find(selection => selection.name === playerSelection);
      makeSelection(selection);
      
    })
  })

    function makeSelection(playerSelection)
    {
        const computerSelection = computerPlay();    
        const you = isWinner(playerSelection, computerSelection);
        const computer = isWinner(computerSelection, playerSelection);
  
        console.log(you);
        console.log(computer);
  
        if (you) incrementScore(yourScoreSpan)
        if (computer) incrementScore(computerScoreSpan)
    }


 
    
  function incrementScore(scoreSpan) 
    {
      scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  }

  function isWinner(a, b)
  {
      return a.beats === b.name;
  }

  function allWinner(yourScoreSpan, computerScoreSpan)
  {
      if(yourScoreSpan > computerScoreSpan)
      {
          return 1;
      }
      else if(computerScoreSpan > yourScoreSpan)
      {
          return -1;
      }
      else
      {
          return 0;
      }
  }
    function computerPlay()
  {
    const rand = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
    return rand;
  }

  