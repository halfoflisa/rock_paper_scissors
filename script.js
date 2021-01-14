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
                gameWinner.innerHTML = "You Lose!";
        }

        if (playerScore === 5 || computerScore === 5){

                let restart = document.getElementById('restart');
                restart.setAttribute('class', 'selections');

                let restartBtn  = document.createElement('input');
                restartBtn.setAttribute('type', 'image');
                restartBtn.setAttribute('src', 'image/restart.jpg');
                restartBtn.setAttribute('ontouchstart', '');
                restartBtn.setAttribute('id', 'restartImage');
                restartBtn.setAttribute('alt', 'restart');
                restartBtn.setAttribute('value', 'restart');

                let restartText = document.createElement('p');
                restartText.appendChild(document.createTextNode('Try Again?'));

                restart.appendChild(restartBtn);
                restart.appendChild(restartText);                

                function reload(){
                        document.location.href = "/rock_paper_scissors/index.html";
                }

                restartBtn.addEventListener('click', reload);

                let coffee = document.getElementById('coffee');
                coffee.setAttribute('class', 'selections');

                let coffeeBtn  = document.createElement('input');
                coffeeBtn.setAttribute('type', 'image');
                coffeeBtn.setAttribute('src', 'image/coffeeCup.jpg');
                coffeeBtn.setAttribute('ontouchstart', '');
                coffeeBtn.setAttribute('id', 'coffeeImage');
                coffeeBtn.setAttribute('alt', 'take a break');
                coffeeBtn.setAttribute('value', 'break');

                let coffeeText = document.createElement('p');
                coffeeText.appendChild(document.createTextNode('Take a break?'));

                coffee.appendChild(coffeeBtn);
                coffee.appendChild(coffeeText);

                function pageJump(){
                        document.location.href = "https://www.youtube.com/watch?v=_lQdILorkGU";
                }

                coffeeBtn.addEventListener('click', pageJump);

                let removeParent = document.getElementById('selectionParent');
                removeParent.remove();
        }

}
