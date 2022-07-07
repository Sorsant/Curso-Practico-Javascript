function calcuarMediaAritmetica(lista)
{ 

    const sumaLista= lista.reduce(
        function(valorAcumulado = 0 ,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito){
    if (numerito % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

/* let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1]; //el primer elemento de la mitad de el array
    const elemento2 = lista1[mitadLista1 -1]; // el segundo elemento de la mitad de el array
    const promedioElemento1y2 = calcuarMediaAritmetica([elemento1,elemento2,]);
    mediana = promedioElemento1y2;
}
else{
    mediana = lista1[mitadLista1];
}
 */
function promedioDeLaMediana(lista){
    lista.sort();
    const mitadLista= parseInt(lista.length /2);   
    let mediana;

    if (esPar(lista.length)){
    const elemento1 = lista[mitadLista]; //el primer elemento de la mitad de el array
    const elemento2 = lista[mitadLista -1]; // el segundo elemento de la mitad de el array
    const promedioElemento1y2 = calcuarMediaAritmetica([elemento1,elemento2,]);
    mediana = promedioElemento1y2;
    return mediana;
    }
    else{
    mediana = lista[mitadLista];
    return mediana;
    }
}