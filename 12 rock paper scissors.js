let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };


  updateScoreElement();
  function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      BotMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      BotMove = "paper";
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
      BotMove = "scissors";
    }
    console.log(BotMove);
    return BotMove;
  }
  let isautoplaying= false;
  let intervalID;

  // const autoPlay=()=>{}
  
  function autoPlay(){
      if(!isautoplaying){
        intervalID=setInterval(()=> {
          const playerMove=pickComputerMove();
          pickResult(playerMove);
          isautoplaying=true;
        }, 1000);
      } else{
          clearInterval(intervalID);
          isautoplaying=false;
      }
      

      
    }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties} `;
  }

  function pickResult(cheekButton) {
    const BotMove = pickComputerMove();

    if (cheekButton === "rock") {
      if (BotMove === "rock") {
        result = "Tie";
      } else if (BotMove === "paper") {
        result = "You lose";
      } else if (BotMove === "scissors") {
        result = "You win";
      }
      console.log(result);
    } else if (cheekButton === "paper") {
      if (BotMove === "rock") {
        result = "You win";
      } else if (BotMove === "paper") {
        result = "Tie";
      } else if (BotMove === "scissors") {
        result = "You lose";
      }
      console.log(result);
    } else if (cheekButton === "Scissors") {
      if (BotMove === "rock") {
        result = "You lose";
      } else if (BotMove === "paper") {
        result = "You win";
      } else if (BotMove === "scissors") {
        result = "Tie";
      }
      console.log(result);
    }
    if (result === "You win") {
      score.wins += 1;
    } else if (result === "You lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `you <img src="emojis/${cheekButton}-emoji.png" alt="" class="rock-img" />
    <img src="emojis/${BotMove}-emoji.png" alt="" class="rock-img" />Computer;`

    /*alert(
      `You picked ${cheekButton}, Computer picked ${BotMove}, ${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties} `
    );*/
  }