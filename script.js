let playerScore = 0;
let computerScore = 0;

let btns = document.querySelectorAll('input');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.getAttribute('value'));
        if (playerScore < 5 && computerScore < 5){
            playRound(btn);
        }
    });
});

function playRound(btn){
        let computerSelection = Math.floor(Math.random()*3);
        let playerSelection = btn.getAttribute('value');

        function computerPlay(){
                if(computerSelection === 0){
                        computerSelection = "Rock";
                        return computerSelection;
                } else if(computerSelection === 1){
                        computerSelection = "Paper";
                        return computerSelection;
                } else if(computerSelection === 2){
                        computerSelection = "Scissors";
                        return computerSelection;
                }
        }

        computerPlay();

        if(playerSelection === computerSelection) { 
                let gameResult = document.getElementById('result');
                gameResult.innerHTML = "The Result is a tie!";
        } else if(playerSelection === "Rock"){
                if(computerSelection === "Paper"){
                        computerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You lose! Paper beats rock";
                } else if(computerSelection === "Scissors"){
                        playerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You win! Rock beats scissors"; 
                }
        } else if(playerSelection === "Paper"){
                if(computerSelection === "Rock"){
                        playerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You win! Paper beats rock";
                } else if(computerSelection === "Scissors"){
                        computerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You lose! Scissors beats paper";
                }
        } else if(playerSelection === "Scissors"){
                if(computerSelection === "Paper"){
                        playerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You win! Scissors beats paper";
                } else if(computerSelection === "Rock"){
                        computerScore++;
                        let gameResult = document.getElementById('result');
                        gameResult.innerHTML = "You lose! Rock beats scissors";
                }
        }

        let playerPoint = document.getElementById('player');
        playerPoint.innerHTML = playerScore;
        let computerPoint = document.getElementById('computer');
        computerPoint.innerHTML = computerScore;
        
        if (playerScore === 5){
                let gameWinner = document.getElementById('winner');
                gameWinner.innerHTML = "Congratulations! You Win!";
        } else if (computerScore === 5){
                let gameWinner = document.getElementById('winner');
                gameWinner.innerHTML = "You Lose! Refresh the page to try again";
        }

}
