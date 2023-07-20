class Obstaculo {
  constructor(posY, isObstaculeUp) {
    //aqui propiedades de los tubos
    this.node = document.createElement("img");
    if(isObstaculeUp===true){
        this.node.src="./images/obstacle_top.png"
    }else{
        this.node.src="./images/obstacle_bottom.png"
    }
    
    gameBoxNode.append(this.node);

    //valores de posicion y dimension
    this.x = gameBoxNode.offsetWidth;
    this.y = posY;
    this.w = 50;
    this.h = 250;

    //AJUSTES INICIALES
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
  //aqui metodos de los tubos
  automaticMovement = () => {
    this.x -= 2;
    this.positionUpdate();
  };
  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}
