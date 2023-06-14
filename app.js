const firstPlyrScore = document.querySelector("#firstPlyrScore");
const secondPlyrScore = document.querySelector("#secondPlyrScore");
const finishScore = document.querySelector("#finish");
const plyrOneInc = document.querySelector("#plyrOneInc");
const plyrTwoInc = document.querySelector("#plyrTwoInc");
const reset = document.querySelector("#resetBtn");
let fin = parseInt(finishScore.value);

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
    obj.classList.add("has-text-success");
    if (obj.id === "firstPlyrScore") {
      secondPlyrScore.classList.add("has-text-danger");
    } else {
      firstPlyrScore.classList.add("has-text-danger");
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
  firstPlyrScore.classList.remove("has-text-success", "has-text-danger");
  secondPlyrScore.classList.remove("has-text-success", "has-text-danger");
  fin = parseInt(finishScore.value);
};

plyrOneInc.addEventListener("click", () => {
  increment(firstPlyrScore);
});

plyrTwoInc.addEventListener("click", () => {
  increment(secondPlyrScore);
});

reset.addEventListener("click", resetScores);

finishScore.addEventListener("input", () => {
  fin = parseInt(finishScore.value);
  resetScores();
});
