
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
    }

function areaCuadrada(lado)
 {
 return lado * lado;
}

console.groupEnd();

 console.group("Triangulo");

function perimetroTriangulo (lado1,lado2,base) {
   return lado1 +lado2 +base;
}

 function areaTriangulo  (base , altura){
    return (base, altura) / 2;
 }

 console.groupEnd();


console.group("Círculo");


function diametroCirculo (radio){
    return radio * 2;
}

const PI = Math.PI
console.log("el PI del circulo  es: " + PI )


function perimetroCirculo (radio) {
   const diametro = diametroCirculo(radio)
    return diametro * PI;
}


//Área
function areaCirculo (radio){
    return (radio * radio) * PI;
    }

console.groupEnd();


//---------Aca interactuamos con el HTML---------------

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}
function calcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrada(value);
    alert(area);
}

function calcularPerimetroCirculo (){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const perimetro = perimetroCirculo(radio) 
    alert(perimetro)
}
function calcularAreaCirculo (){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const area = areaCirculo(radio) 
    alert(area)
}
function calcularDiametroCirculo (){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const diametro = diametroCirculo(radio) 
    alert(diametro)
}
const calcularPerimetroTriangulo = () => {
  const lado1 = Number(document.getElementById("InputTriangulo1").value);
        lado2 = Number(document.getElementById("InputTriangulo2").value);
        base  = Number(document.getElementById("InputTriangulobase").value);   
        perimetro = perimetroTriangulo (lado1,lado2,base);
      alert(perimetro);
}

const calcularAreaTriangulo = () => {
    const altura = Number(document.getElementById("InputTrianguloaltura").value);
          base   = Number(document.getElementById("InputTriangulobase").value);   
          Area   = areaTriangulo (base,altura);
        alert(Area);
  }
