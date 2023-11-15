// Iteration 8: Making scoreboard functional
const playagain = document.getElementById('play-again-button');
playagain.addEventListener("click", () => {
    location.href = "./game.html";
});

const scorediv = document.querySelector("#score-board");

let score = localStorage.getItem("score");
scorediv.innerHTML = score