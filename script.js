let randomNum = Math.floor(Math.random() * 20) + 1;
let Attempts = 0;
// ----------guess btn----------
function guessbutton() {
    let userGuess = document.getElementById('inputGuess').value;
    let msg = document.getElementById('msg');
    Attempts++;

    if(userGuess === randomNum){
        msg.textContent = `Congratulations! You Guessed The Right Number ${guessbutton} Correctly in ${Attempts}`;
        msg.style.color = "green";
    }
    else if(userGuess > randomNum){
        msg.textContent = "Too High Try Again!"
        msg.style.color = "red";
    }
    else if(userGuess < randomNum){
        msg.textContent = "Too Low Try Again!"
        msg.style.color = "Blue";
    }

    document.getElementById('attempts').textContent = `Attempts: ${Attempts}`;
}
// ---------restart-----
function restartbutton(){
    randomNum = Math.floor(Math.random() * 20) + 1;
    numAttempts = 0;
    document.getElementById('inputGuess').value = "";
    msg = document.getElementById('msg').textContent = "";
    document.getElementById('attempts').textContent = `Attempts: 0`;
}