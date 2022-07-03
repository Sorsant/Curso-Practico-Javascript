
function alturaIsoseles(lado, lado2, base) {

    //    if ((lado == lado2 && lado !== base) || (lado2 != base && lado == base))
    //     {   const  a=lado;

    //         const  b= base;   
    //     return (Math.sqrt((a * a) - ((b * b)/4) )); 
    //     }
    //     else if (lado != lado2 && lado2 == base)
    //     {   
    //         const  a=base; 
    //         const  b= lado; 
    //     return (Math.sqrt((a * a) - ((b * b)/4) )); 
    //     }
    //     else {
    //         
    //     }
}



function esIsoseles(a, b, c) {
    const algunaIgualdad = (a == b || b == c || c == a);
    const algunaDesigualdad = (a != b || b != c || c != a);
    return algunaIgualdad && algunaDesigualdad
}

function alturaTrianguloIsoseles( ladoIgual, Base) {
    return (Math.sqrt((ladoIgual **2) - ((Base **2) / 4)));
}

const trianguloIsoseles = () => {
    let altura
    const l1 = Number(document.getElementById("Inputisoseles1").value);
          l2 = Number(document.getElementById("Inputisoseles2").value);
          l3  = Number(document.getElementById("Inputisoselesbase").value); 
         if(esIsoseles(l1,l2,l3)){
            alert("es un isoseles pah")
            if (l1==l2){
                altura = alturaTrianguloIsoseles(l1,l3)
            }
            else if(l1==l3){
                altura = alturaTrianguloIsoseles(l1,l2)
            }
            else{
                altura = alturaTrianguloIsoseles(l2,l1)
            }
        alert( `La altura es :${altura}`);
        }
        else{alert("no es un tirangulo isoseles")}
}