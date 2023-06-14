const firstPlyrScore = document.querySelector("#firstPlyrScore");
const secondPlyrScore = document.querySelector("#secondPlyrScore");
const finishScore = document.querySelector("#finish");
const plyrOneInc = document.querySelector("#plyrOneInc");
const plyrTwoInc = document.querySelector("#plyrTwoInc");
const reset = document.querySelector("#resetBtn");

const increment = (obj) => {
  let curScore = parseInt(obj.innerText);
  let newScore = ++curScore;
  obj.innerText = newScore;
  if (newScore == finishScore.value) {
    obj.classList.add("win");
    if (obj.id === "firstPlyrScore") {
      secondPlyrScore.classList.add("lose");
    } else {
      firstPlyrScore.classList.add("lose");
    }
    plyrOneInc.disabled = true;
    plyrTwoInc.disabled = true;
  }
};

const resetScores = () => {
  firstPlyrScore.innerText = "0";
  secondPlyrScore.innerText = "0";
  plyrOneInc.disabled = false;
  plyrTwoInc.disabled = false;
  firstPlyrScore.classList.remove("win", "lose");
  secondPlyrScore.classList.remove("win", "lose");
};

plyrOneInc.addEventListener("click", () => {
  increment(firstPlyrScore);
});

plyrTwoInc.addEventListener("click", () => {
  increment(secondPlyrScore);
});

reset.addEventListener("click", resetScores);

finishScore.addEventListener("input", resetScores);
