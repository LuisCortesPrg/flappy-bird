class Game {
  constructor() {
    //aqui estaran todas las propiedades de mi juego
    //como propiedad de nuestro juego vamos a crear un pollito
    this.pollito = new Pollito();

    //vamos agregar tubos
    //this.unObstaculo=new Obstaculo
    this.obstaculosArr = [];

    this.frames = 0;
    this.isGameOn=true;
  }
  gameOver=()=>{
    this.isGameOn=false;
    gameScreenNode.style.display = "none";
  gameoverScreenNode.style.display = "flex";
  }

  collisionPollitoObstaculos=()=>{
    this.obstaculosArr.forEach((cadaObstaculo)=>{
        if (
            this.pollito.x < cadaObstaculo.x + cadaObstaculo.w &&
            this.pollito.x + this.pollito.w > cadaObstaculo.x &&
            this.pollito.y < cadaObstaculo.y + cadaObstaculo.h &&
            this.pollito.y + this.pollito.h > cadaObstaculo.y
          ) {
            // Collision detected!
            this.gameOver();
          }
    })} 
          
        

    
  

  collisionPollitoSuelo=()=>{
    if(this.pollito.y>gameBoxNode.offsetHeight){
        console.log("se fue a la puta")
        this.gameOver();
    }
  }


  obstaculosDesaparecen=()=>{
    //si el 1 elemento del arr ha salido de la vista, entonces lo removemos
    if(this.obstaculosArr[0].x<-50){
        this.obstaculosArr[0].node.remove()
        this.obstaculosArr.shift()
        
    }
  }
  obstaculosAparecen = () => {
    //cuandoqueremos que aparezcan obstaculos? al principio y cada 2 seg
    if (this.obstaculosArr.length === 0 || this.frames % 120 === 0) {
      let randomPositionY=Math.floor(Math.random()*-200)
      
      
        let nuevoObstaculoArriba = new Obstaculo(randomPositionY,true);
      this.obstaculosArr.push(nuevoObstaculoArriba);

      let nuevoObstaculoAbajo = new Obstaculo(randomPositionY + 380,false);
      this.obstaculosArr.push(nuevoObstaculoAbajo);
    }
  };
  //los metodos(funciones) que se estaran ejecutando en el juego
  gameLoop = () => {
    this.frames++;
    this.pollito.gravityEffect();
    this.collisionPollitoSuelo()
    this.collisionPollitoObstaculos()
    //this.unObstaculo.automaticMovement()
    this.obstaculosAparecen();
    this.obstaculosArr.forEach((cadaObstaculo) => {
      cadaObstaculo.automaticMovement();


      this.obstaculosDesaparecen()
    });

if(this.isGameOn===true){
    requestAnimationFrame(this.gameLoop);}
  };
}
