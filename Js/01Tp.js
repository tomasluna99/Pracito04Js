//Ejercicio 3
class Rectangulo {
  constructor (altoR, anchoR){
    this.alto = altoR;
    this.ancho = anchoR;
  }
  CalcularArea (){
    return this.ancho * this.alto;
  }
  CalcularPerimetro(){
    return 2* (this.alto + this.ancho);
  }
}

let rectangulo = new Rectangulo(10,50);
console.log(rectangulo.CalcurarArea());
console.log(rectangulo.CalcularPerimetro);
document.write(rectangulo.CalcularArea());
document.write("<br>"+rectangulo.CalcularPerimetro());
