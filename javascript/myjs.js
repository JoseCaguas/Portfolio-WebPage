/**
 * Created by josec on 5/4/2016.
 */

// These variables are for the Rock Paper Scissors Game
playerScore = 0;
computerScore = 0;
tieScore = 0;
playerChoice;
computerChoice;
/*
 This function is for the Rock button. 
 After registering the players choice it starts the computers turn.
 */
function rockFunction() {
    this.playerChoice = 1;
    document.getElementById("playerChoice").innerHTML = '<img src="../images/rock.jpe" alt="Rock" style="height: 100px;"/>';
    compChoice();
}
/*
 This function is for the Paper button. 
 After registering the players choice it starts the computers turn.
 */
function paperFunction() {
    this.playerChoice = 2;
    document.getElementById("playerChoice").innerHTML = '<img src="../images/paper.jpe" alt="Paper" style="height: 100px;"/>';
    compChoice();
}
/*
 This function is for the Scissors button. 
 After registering the players choice it starts the computers turn.
 */
function scissorsFunction() {
    this.playerChoice = 3;
    document.getElementById("playerChoice").innerHTML = '<img src="../images/scissors.jpe" alt="Paper" style="height: 100px;"/>';
    compChoice();
}
/*
This function runs after it is called by another function.
It randomly selects a number between 1 and 3 and then registers it as the computers choice.
It then runs a nested if-else statement to see who won and adds the point to the score board.
 */
function compChoice() {
    computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice == 1) {
        document.getElementById("compChoice").innerHTML = '<img src="../images/rock.jpe" alt="Rock" style="height: 100px;"/>';
    } else if (computerChoice == 2) {
        document.getElementById("compChoice").innerHTML = '<img src="../images/paper.jpe" alt="Rock" style="height: 100px;"/>';
    } else {
        document.getElementById("compChoice").innerHTML = '<img src="../images/scissors.jpe" alt="Rock" style="height: 100px;"/>';
    }

    if (playerChoice == computerChoice)
    {
        tieScore++;
        document.getElementById("tieScore").innerHTML = tieScore;
    }
    else if (playerChoice == 1 && computerChoice == 3)
    {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
    else if (playerChoice == 2 && computerChoice == 1)
    {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
    else if (playerChoice == 3 && computerChoice == 2)
    {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
    else
    {
        computerScore++;
        document.getElementById("compScore").innerHTML = computerScore;
    }

}