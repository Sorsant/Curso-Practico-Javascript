const cuantoAhorrarCortoPlazo =() => {
    const Total = Number(document.getElementById("inputPrice").value);
          Año = Number(document.getElementById("inputPrice1").value);
          Pago = Number(document.getElementById("inputDiscoun2").value);
         
            const cuantoAhorrar=Total/Año/Pago;
            const resultado = parseInt(cuantoAhorrar);
            
            resultP =document.getElementById("ResultP1");
            resultP.innerText = "Para Llegar al Total de $:" + Total  + " El Ahorro debe ser de $: "  +resultado ;
}; 
const capacidadDeEndeudamiento =() => {
   const ingresos = Number(document.getElementById("inputPrice3").value);
         gastos = Number(document.getElementById("inputDiscount").value);

    const deudaInteligente= (ingresos-gastos)*0.35;
    resultado = parseInt(deudaInteligente);
    resultP =document.getElementById("ResultP");
    resultP.innerText = "El Margen de Endeudamiento es de $:" +resultado ;
};