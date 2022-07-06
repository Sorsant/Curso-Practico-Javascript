/* const precioOriginal = 100;
const descuento = 15;

 */

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

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
/* 
   -------------------------------------- */
const resultadoDeDescuentoDelPrecio1 =() => {
    const inputPrecio1 = Number(document.getElementById("inputPrice1").value);   
          inputDescuento2 = Number(document.getElementById("inputDiscoun2").value);
   
          precioCondescuento1 = calcularPrecioConDescuento(inputPrecio1,inputDescuento2)
           
          resultP =document.getElementById("ResultP1");
          resultP.innerText = "El precio con descuento es : $" +precioCondescuento1 ;
   
   }/*------------------------------ */
        function resultadoDeDescuentoDelPrecio2() {
            const inputPrice = document.getElementById("inputPrice2");
            const priceValue = inputPrice.value;
            
            const inputCoupon = document.getElementById("inputCoupon");
            const couponValue = inputCoupon.value;
          
            let descuento;
          
            switch(couponValue) {
              case coupons[0]: // "JuanDC_es_Batman"
                descuento = 15;
              break;
              case coupons[1]: // "pero_no_le_digas_a_nadie"
                descuento = 30;
              break;
              case coupons[2]: // "es_un_secreto"
                descuento = 25;
              break;
            }
          
          
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
          
            const resultP2 = document.getElementById("ResultP2");
            resultP2.innerText = "El precio con descuento son: $" + precioConDescuento;
          }




        /*------------------------------ */

   function descuentoP()
   {   const input2 = document.getElementById("rangeDiscount");

   const input3 = document.getElementById("originalPrice");
   
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
/*------------------------------ */
const cajitaDeCupones= ["pelotaDeGolf","lapicera","queQueres"];

function maquinariaCupon() {
  const precioCupon = document.getElementById("precioCupon");
    const cuponValue = precioCupon.value;
  
  const Cupon = document.getElementById("implementamosCupones");
  const cuponDescuento = Cupon.value;
 let descuentoDeCupon ;
  if (cuponDescuento)
      {
        if (cuponDescuento === "pelotaDeGolf"){
          descuentoDeCupon = 20;
        }
        else if(cuponDescuento === "lapicera") {
          descuentoDeCupon = 50;
        }
        else if(cuponDescuento === "queQueres"){
          descuentoDeCupon = 99;
        }
      } 
    else
    {
      alert("no es el cupon raja de aca");
    }
    const precioConDescuento = calcularPrecioConDescuento(cuponValue, descuentoDeCupon);          
    const resultP= document.getElementById("resultP10");
    resultP.innerText = "El precio con descuento es : $" + precioConDescuento;
}
