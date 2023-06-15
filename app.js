const firstPlyrScore = document.querySelector("#firstPlyrScore"); //span
const secondPlyrScore = document.querySelector("#secondPlyrScore"); //span
const finishScore = document.querySelector("#finish"); //select
const setCount = document.querySelector("#setCount"); //select
const plyrOneInc = document.querySelector("#plyrOneInc"); //button
const plyrTwoInc = document.querySelector("#plyrTwoInc"); //button
const reset = document.querySelector("#resetBtn"); //button
const newSet = document.querySelector("#newSet"); //button
const p1SetScoreDisp = document.querySelector("#plyOneSetScore"); //sub
const p2SetScoreDisp = document.querySelector("#plyTwoSetScore"); //sub
const winnerTitle = document.querySelector("#winnerTitle"); //p
const setScores = document.querySelector("#setScores"); //div
const score = document.querySelector("#score"); //h1
const scoresTable = []; // to keep set scores to able to delete after reset
let fin = parseInt(finishScore.value);
let setToWin = Math.ceil(parseInt(setCount.value) / 2);
let curSet = 1;
let p1SetScore = parseInt(p1SetScoreDisp.textContent);
let p2SetScore = parseInt(p2SetScoreDisp.textContent);

const declareWinner = () => {
  if (p1SetScore === setToWin) {
    winnerTitle.textContent = `${plyOneName} Wins`;
  } else {
    winnerTitle.textContent = `${plyTwoName} Wins`;
  }
};

const typeSetScore = () => {
  const setScore = document.createElement("p");
  setScore.id = `set${curSet}`;
  setScore.classList.add("is-size-7", "m-0");
  setScore.textContent = `${firstPlyrScore.textContent} - ${secondPlyrScore.textContent}`;
  score.append(setScore);
  scoresTable.push(setScore);
  return setScore;
};

const increment = (obj) => {
  let curScore = parseInt(obj.innerText);
  let newScore = ++curScore;
  obj.innerText = newScore;
  if (
    firstPlyrScore.innerText === secondPlyrScore.innerText &&
    firstPlyrScore.innerText === `${fin - 1}`
  ) {
    fin++;
  }
  if (newScore === fin) {
    // to check whether the last point was the set point
    obj.classList.add("has-text-success");
    curSet++;
    const setScore = typeSetScore();
    if (obj.id === "firstPlyrScore") {
      // to check who was to take last point
      secondPlyrScore.classList.add("has-text-danger");
      p1SetScoreDisp.textContent = ++p1SetScore;
      setScore.classList.add("has-text-left");
    } else {
      firstPlyrScore.classList.add("has-text-danger");
      p2SetScoreDisp.textContent = ++p2SetScore;
      setScore.classList.add("has-text-right");
    }
    plyrOneInc.disabled = true;
    plyrTwoInc.disabled = true;
    newSet.classList.remove("is-hidden");
    if (p1SetScore === setToWin || p2SetScore === setToWin) {
      //to check whether this was the last set
      newSet.disabled = true;
      declareWinner();
    }
  }
};

const resetScores = (newGame = false) => {
  firstPlyrScore.innerText = "0";
  secondPlyrScore.innerText = "0";
  plyrOneInc.disabled = false;
  plyrTwoInc.disabled = false;
  newSet.disabled = false;
  firstPlyrScore.classList.remove("has-text-success", "has-text-danger");
  secondPlyrScore.classList.remove("has-text-success", "has-text-danger");
  fin = parseInt(finishScore.value);
  newSet.classList.add("is-hidden");
  if (newGame) {
    curSet = 1;
    p1SetScore = 0;
    p2SetScore = 0;
    p1SetScoreDisp.textContent = p1SetScore;
    p2SetScoreDisp.textContent = p2SetScore;
    for (const node of scoresTable) {
      node.remove();
    }
    winnerTitle.textContent = "";
  }
};

plyrOneInc.addEventListener("click", () => {
  increment(firstPlyrScore);
});

plyrTwoInc.addEventListener("click", () => {
  increment(secondPlyrScore);
});

reset.addEventListener("click", () => {
  resetScores(true);
});

finishScore.addEventListener("input", () => {
  fin = parseInt(finishScore.value);
  resetScores(true);
});

newSet.addEventListener("click", () => {
  resetScores();
});

setCount.addEventListener("input", () => {
  setToWin = Math.ceil(parseInt(setCount.value) / 2);
  resetScores(true);
});

const plyOneName = prompt("Please enter 1st Player's name");
const plyTwoName = prompt("Please enter 2nd Player's name");
plyrOneInc.textContent = `+1 ${plyOneName}`;
plyrTwoInc.textContent = `+1 ${plyTwoName}`;
