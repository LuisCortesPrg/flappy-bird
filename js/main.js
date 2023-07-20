// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreemNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode=document.querySelector("#gameover-screen")
let gameObj;

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  splashScreemNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  gameObj.gameLoop();
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
gameBoxNode.addEventListener("click", () => {
  //como invocamos la funcion jump effect
  if(gameObj.isGameOn===true){
  gameObj.pollito.jumpEffect();}
});
