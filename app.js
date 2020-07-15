const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    //start game
    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')
        
        playButton.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        });
    };

    //play match
    const playMatch= ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands =document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = "";
            })
        })
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option=>{
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                //here is where we call compare hands
                setTimeout(()=>{
                    compareHands(this.textContent,computerChoise);
                    //update images
                    playerHand.src=`images/${this.textContent}.png`;
                    computerHand.src=`images/${computerChoise}.png`;
                }, 1500)

                //animation
                playerHand.style.animation = 'shakePlayer 1.5s ease'
                computerHand.style.animation = 'shakeComputer 1.5s ease'
            });
        });
        
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent=cScore;
    }

    const compareHands = (playerChoice,computerChoice)=>{
        //update text
        const winner = document.querySelector('.winner')
        if(playerChoice===computerChoice){
            winner.textContent = 'It is a Tie';
            return;
        }
        if (playerChoice ==='rock'){
            if(computerChoice==='scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        else if (playerChoice ==='paper'){
            if(computerChoice==='rock'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        else{
            if(computerChoice==='paper'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    playMatch();
};
//start the game function
game();