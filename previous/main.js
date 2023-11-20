function resultado_exponencial(x, lambda){
    return lambda*Math.E**(-lambda*x);
}

function soma_cumulativa(x, lambda){
    return 1-Math.E**(-lambda * x);
}

/*
let soma = 0;
for(let i=0; i<30; i++){
    const atual = resultado_exponencial(i, 2);
    console.log(i + " " + atual);
    soma += atual;
}

console.log("soma: " + soma);
*/

console.log(1-soma_cumulativa(3, 5/12));