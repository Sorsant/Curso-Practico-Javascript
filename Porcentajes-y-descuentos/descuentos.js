/* const precioOriginal = 100;
const descuento = 15;

 */

function calcularPrecioConDescuento (precio,descuento){
    const porcentejePrecioConDescuento = 100 - descuento;
    const precioCondescuento = (precio * porcentejePrecioConDescuento)/100;
    return precioCondescuento;
}


const resultadoDeDescuentoDelPrecio =() => {
 const inputPrecio = Number(document.getElementById("inputPrice").value);   
       inputDescuento = Number(document.getElementById("inputDiscount").value);

       precioCondescuento = calcularPrecioConDescuento(inputPrecio,inputDescuento)
        
       resultP =document.getElementById("ResultP");
       resultP.innerText = "El precio con descuento es : $" +precioCondescuento ;

}

const resultadoDeDescuentoDelPrecio1 =() => {
    const inputPrecio1 = Number(document.getElementById("inputPrice1").value);   
          inputDescuento2 = Number(document.getElementById("inputDiscoun2").value);
   
          precioCondescuento1 = calcularPrecioConDescuento(inputPrecio1,inputDescuento2)
           
          resultP =document.getElementById("ResultP1");
          resultP.innerText = "El precio con descuento es : $" +precioCondescuento1 ;
   
   }

   const input2 = document.getElementById("rangeDiscount");

   const input3 = document.getElementById("originalPrice");
   
   function descuentoP()
   {
       if(input3.value>0){
       const input1 = document.getElementById("pantalla");
       const input2 = document.getElementById("rangeDiscount");
       const input3 = document.getElementById("originalPrice");
       const discount = parseInt(input2.value);
       const price = parseInt(input3.value);
       const porcentajePrecioDescuento = 100 - discount;
       const precioConDescuento = (price * porcentajePrecioDescuento) / 100;
       return precioConDescuento + "$";
       }
       else{
           return ""
       }
   }
