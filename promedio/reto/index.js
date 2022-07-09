const lista = [4,5,6,10,12,15];




function mediaCuadratica(lista){
    const cuadrada = lista.map(function(x) {
        return Math.pow(x,2);
     });    
     const reducer = (accumulator, curr) =>  accumulator + curr;
    const suma= cuadrada.reduce(reducer);    
    const raiz = Math.sqrt(suma/cuadrada.length);    
    return raiz;
}
