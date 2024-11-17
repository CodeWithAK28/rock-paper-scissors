let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");
console.log("hello");

let choices = document.querySelectorAll(".choice");
let res = document.querySelector("#result");

const userscore = document.querySelector("#userscr");
const compscore = document.querySelector("#compscr");
let userscr = 0;
let compscr = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceid = choice.getAttribute("id");
    playgame(choiceid);
    // console.log("choice was clicked ", choiceid);
  });
});

const drawgame = () => {
  console.log("Game was draw!! \n\n");
  result.innerText = "Its a draw!!";
  result.style.color = "#d4a373";
};

const playgame = (choiceid) => {
  console.log("User choice is : " + choiceid);
  const compchoice = gencompchoice();
  console.log("computer's choice = ", compchoice);

  if (choiceid === compchoice) {
    //game draw
    drawgame();
  } else {
    let userWin = true;
    if (choiceid === "stone") {
      userWin = compchoice === "paper" ? false : true;
    } else if (choiceid === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else if (choiceid === "scissors") {
      userWin = compchoice === "stone" ? false : true;
    }
    showWinner(userWin, compchoice, choiceid);
  }
};

const showWinner = (userWin, compchoice, choiceid) => {
  if (userWin === true) {
    userscr++;
    userscore.innerText = userscr;
    console.log("you win :) !! \n\n");
    result.innerText = "You Win!! \n your " + choiceid + " beats " + compchoice;
    result.style.color = "#72b01d";
  } else {
    compscr++;
    compscore.innerText = compscr;
    console.log("You lose :( !! \n\n");
    result.innerText =
      "You lose!! \n " + compchoice + " beats your " + choiceid;
    result.style.color = "#d00000";
  }
};

const gencompchoice = () => {
  //rock , paper scissors
  const options = ["stone", "paper", "scissors"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};
