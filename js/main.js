function getComputerChoice(){
    let compChoice = getRandomInt(3);
    if (compChoice == 0) return 'rock';
    else if (compChoice == 1) return 'paper';
    else return 'scissors'
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerChoice(){
    let input = '';
    let test = true;
    do {
        input = prompt('Please enter Rock, Paper or Scissors to play');
        input = input.toLowerCase();
        if(input == 'rock' || input == 'paper' || input == 'scissors'){
            test = false;
        }

    } while (test)

    return input;
        
    
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    let result = '';
    if (playerSelection == computerSelection){
        result = 'Tie';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') 
            || (playerSelection == 'scissors' && computerSelection == 'paper') 
            || (playerSelection == 'paper' && computerSelection == 'rock')){
        result = 'Player Wins';
    }
    else {
        result = 'Computer Wins';
    }
    return result;

}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(getPlayerChoice(),getComputerChoice());
        if (roundResult == 'Player Wins'){
            playerScore++;
            console.log(roundResult);
        }
        else if (roundResult == 'Computer Wins'){
            compScore++;
            console.log(roundResult);
        }
        else{
            console.log(roundResult);
        }
        console.log('Score: Player: ' + playerScore + ' Computer: ' + compScore);
    }
    return 'Game Over'

}

// console.log(getComputerChoice())
console.log(game())

