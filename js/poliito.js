class Pollito {
  constructor() {
    //crear el elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png";
    gameBoxNode.append(this.node);

    //propiedades del pollito
    this.x = 50;
    this.y = 50;
    this.w = 30;
    this.h = 25;
    this.gravitySpeed = 1;
    this.jumpSpeed = 20;

    //ajustes de tamaño y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate();
  };

  jumpEffect = () => {
    this.y -= this.jumpSpeed;
    this.positionUpdate();
  };

  positionUpdate = () => {
    //el pollito solo se mueve en el eje y
    this.node.style.top = `${this.y}px`;
  };
}
